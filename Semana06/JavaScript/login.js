// Variables anda const declaration //
const registerForm = document.getElementById("form");
const mailInput = document.getElementById("mail");
const pwdInput = document.getElementById("pwd");
const mailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const reqMail = document.getElementById("reqMail");
const errorMail = document.getElementById("incorrectMail");
const reqPwd = document.getElementById("reqPwd");
const errorPwd = document.getElementById("incorrectPwd");

//Prevent submit default //
registerForm.addEventListener("submit", prevDef);
function prevDef(e) {
    e.preventDefault();
}
// e-mail validation //
mailInput.addEventListener("blur", erroMsgMail);
function erroMsgMail(e) {
    if(mailInput.value === ""){
    reqMail.style.display = 'flex';
    reqMail.style.justifyContent = 'center';
    } else if(!mailRegEx.test(mailInput.value)) {
    errorMail.style.display = 'flex';
    errorMail.style.justifyContent = 'center';
    }
}

function writing(e){
    reqMail.style.display = 'none';
    errorMail.style.display = 'none'; 
}
mailInput.addEventListener("focus", writing);

// password validation //

mailInput.addEventListener("blur", errorMsgPwd);
function errorMsgPwd(e) {
    if(pwdInput.value === ""){
    reqPwd.style.display = 'flex';
    reqPwd.style.justifyContent = 'center';
    } 
}
function writingPwd(e){
    reqPwd.style.display = 'none';
    errorPwd.style.display = 'none'; 
}
pwdInput.addEventListener("focus", writingPwd);