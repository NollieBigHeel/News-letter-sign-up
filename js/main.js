const button = document.getElementById("main-btn");
const disBtn = document.getElementById("dis-btn");
const emailField = document.querySelector("#emailId");
const validateEmailLabel = document.querySelector(".valid-email-label");

const enterEmailS = document.querySelector(".enter-email-article");
const thanksSec = document.querySelector(".thanks-article");


button.addEventListener('click', validate);
disBtn.addEventListener('click', dismissMessage);


function validate() {
    const emailValue = document.querySelector("#emailId").value;
    const thanksEmail = document.querySelector(".email-value");
    
    const regx = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,10})$/;

   
    console.log(emailValue);
    if(regx.test(emailValue)) {
        // Display email on thank you page
        thanksEmail.innerText = emailValue;
        return emailAccepted();
    } else {
        return emailErrorState();
    }
}

function dismissMessage () {
    enterEmailS.style.display = "flex";
    thanksSec.style.display = "none";
}

function emailErrorState() {
    console.log("This is the emailError Function");
    emailField.classList.remove("emailBorder");
    emailField.classList.add("errorEmail");
    validateEmailLabel.style.display = "inline";

}

function emailAccepted() {
    console.log("This is the emailAccepted Function");
    enterEmailS.style.display = "none";
    thanksSec.style.display = "block";
    document.getElementsById("body").style.overflowY = "hidden";
}
