const sendForm = document.getElementById("contact-form");
sendForm.addEventListener('submit', contactForm);
const response = document.getElementById("response");
const submitbutton = document.getElementById("submit-button");
const success = document.getElementById("submit-modal");


function contactForm(event) {
    event.preventDefault();
    let firstName = sendForm.elements[1].value;
    let email = sendForm.elements[3].value;
    let comment = sendForm.elements[4].value;
    let secondName = sendForm.elements[2].value;
    let responseText = `
    <h4>Thanks ${firstName}</h4>
    <p>The message submitted was: "${comment}"<br>
    We'll get back to you as soon as possible via ${email}.<br>
    Have an amazing Date night! <i class="fas fa-heart"</p>`;
    response.innerHTML = responseText;  

    submitbutton.innerText = "Sent!"
     
    $('#submit-modal').modal('show');

    return sendMail(this);

    function sendMail (sendForm) {
        emailjs.init("user_wAOlLN2zYLGpP3C5ZlKTc");
        emailjs.send("service_i1srpob","date-night", {
            "first-name" : firstName,
            "second-name" : secondName,
            "email-address" : email,
            "comment" : comment
        }); 
    }
}  












