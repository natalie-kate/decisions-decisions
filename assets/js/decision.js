('#start').on('click', timer());
function timer() {
    let timeLeft = 7;

    setInterval(function () {
            if (timeLeft < 0) {
        return;
    } else {
        $("#timer p").text(timeLeft);
        if (timeLeft >= 7) {
            $("#timer p").css("color", "green");
            $("#timer p").css("transition", "color 3000ms ease-out");
        }
        if (timeLeft == 5) {
            $("#timer p").css("color", "orange");
        }
        if (timeLeft <= 3) {
            $("#timer p").css("transition", "color 3000ms ease-in");
            $("#timer p").css("color", "red");
        }
        if (timeLeft < 2) {
            $("#timer p").css("animation", "flash 500ms 4");
        }
    }
    timeLeft -= 1;
}, 1000)
};
function timerStop() {
    clearInterval(timer);
    $("#timer p").css("color", "green");
    $("#timer p").text("8");
};

$("#option1").click(function () {
    timerStop();
    let stayingInOptions = ["Movie Night", "TV Binge", "Takeaway", "Game Night", "Cook Together", "Video Games", "Cocktail Making", "Pamper Session"];
    $("#option1").hide();
    $("#option2").hide();
    $("#option3").show();
    $("#option4").show();
    game(stayingInOptions);
});

$("#option2").click(function () {
    timerStop();
    let goOutOptions = ["Bowling", "Dinner", "Club", "Cinema", "Bar", "Escape Room", "Live Music", "Pool Hall"];
    $("#option1").hide();
    $("#option2").hide();
    $("#option3").show();
    $("#option4").show();
    game(goOutOptions);
});

function game(options) {
    let chosenOptions = [];
    let notChosen = [];

    randomChoice(options)

    function randomChoice(optionsArray) {
        length = optionsArray.length;
        adjustedLength = length -= 1
        randomNumber1 = Math.floor(Math.random() * length);
        randomNumber2 = Math.floor(Math.random() * adjustedLength);

        getOptions(randomNumber1, randomNumber2);

        function getOptions(num1, num2) {
            button1 = options[num1];
            options.splice([num1], 1);
            button2 = options[num2];
            options.splice([num2], 1)

            displayOptions(button1, button2);
        }

        function displayOptions(buttonText1, buttonText2) {
            $("#option3").text(buttonText1);
            $("#option4").text(buttonText2);
        };
        timerStart();
    }

    $("#option3").click(function () {
        timerStop();
        chosenOptions.push($("#option3").text());
        notChosen.push($("#option4").text());

        if ((notChosen.length >= 6) && ((options.length + chosenOptions.length) == 2)) {
            remainingChoices = options.concat(chosenOptions);
            finalChoice(remainingChoices[0], remainingChoices[1])

        } else if ((options.length == 0) && (chosenOptions.length > 1)) {
            chosenOptions.forEach(function (i) {
                options.push(i)
            });
            chosenOptions.splice(0, chosenOptions.length)
            randomChoice(options);
        } else {
            randomChoice(options);
        }
    });


    $("#option4").click(function () {
        timerStop();
        chosenOptions.push($("#option4").text());
        notChosen.push($("#option3").text());

        if ((notChosen.length >= 6) && ((options.length + chosenOptions.length) == 2)) {
            remainingChoices = options.concat(chosenOptions);
            finalChoice(remainingChoices[0], remainingChoices[1])

        } else if ((options.length == 0) && (chosenOptions.length > 1)) {
            chosenOptions.forEach(function (i) {
                options.push(i)
            })
            chosenOptions.splice(0, chosenOptions.length)
            randomChoice(options);
        } else {
            randomChoice(options);
        }
    });

    function finalChoice(choice1, choice2) {
        timerStop();
        $("#option3, #option4").hide();
        $("#option5").show().text(choice1);
        $("#option6").show().text(choice2);
        timerStart();

        $("#option5, #option6").click(function () {
            timerStop();
            result = $(this).text();
            showResults(result);
        });
    }

    function showResults(winningOption) {
        $(".game").hide();
        $(".(winningOption)").show;
    }
}