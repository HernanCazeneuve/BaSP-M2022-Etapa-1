// Variables anda const declaration //
// E-amil Variables //
const registerForm = document.getElementById("form");
const mailInput = document.getElementById("mail");
const mailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const reqMail = document.getElementById("reqMail");
const errorMail = document.getElementById("incorrectMail");
const correctMail = document.getElementById("correctMail");
// Password variables //
const pwdInput = document.getElementById("pwd");
const reqPwd = document.getElementById("reqPwd");
const lenghtPwd = document.getElementById("lenghtPwd");
const errorPwd = document.getElementById("incorrectPwd");
const correctPwd = document.getElementById("correctPwd");
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ['!',"'",'"','*', '+', '-', '/','$','%','&','(',')',
'=','?','¿','`','^','[',']','´','{','Ç','}',',',';','.',':','-','_','º','ª',' '];
var msgValidation= document.getElementById("msgValidation")

//Prevent submit default //
registerForm.addEventListener("submit", prevDef);
function prevDef(e) {
    e.preventDefault();
}
// e-mail validation //
mailInput.addEventListener("blur", emailValidation);
function emailValidation(e) {
    if(mailInput.value === ""){
    reqMail.style.display = 'flex';
    reqMail.style.justifyContent = 'center';
    mailInput.style.border = '2px solid red';
    } else if(!mailRegEx.test(mailInput.value)) {
    errorMail.style.display = 'flex';
    errorMail.style.justifyContent = 'center';
    mailInput.style.border = '2px solid red';
    }
    else{
        correctMail.style.display = 'flex';
        correctMail.style.justifyContent = 'center';
        mailInput.style.border = '2px solid green';
        return true;
    }
}

function writing(e){
    reqMail.style.display = 'none';
    errorMail.style.display = 'none';
    mailInput.style.border = '1px solid black'; 
}
mailInput.addEventListener("focus", writing);

// password validation //
pwdInput.addEventListener("blur", passValidation);
function passValidation() {
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0; 
    for (i=0; i < pwdInput.value.length; i++) {
            if(numbers.includes(pwdInput.value[i])){
                contNum++;
            } else if(letters.includes(pwdInput.value[i])){
                contChar++;
            } else  {
                contSymbols++;
            }   
    }    
    if(pwdInput.value === ""){
        reqPwd.style.display = 'flex';
        reqPwd.style.justifyContent = 'center';
        pwdInput.style.border = '2px solid red';
        console.log("no vacio")
        } else if(pwdInput.value.length < 8) {
            lenghtPwd.style.display = 'flex';
            lenghtPwd.style.justifyContent = 'center';
            pwdInput.style.border = '2px solid red';
            console.log("corto")
            } else if(pwdInput.value.length>7 && contNum>0 && contChar>0 && contSymbols == 0){
            correctPwd.style.display = 'flex';
            correctPwd.style.justifyContent = 'center';
            pwdInput.style.border = '2px solid green';
            console.log("ok")
            return true;
            } else {
                errorPwd.style.display = 'flex';
                errorPwd.style.justifyContent = 'center';
                pwdInput.style.border = '2px solid red';
                console.log("no cumple")
                return false;
            }
        }
function writingPwd(e){
    reqPwd.style.display = 'none';
    errorPwd.style.display = 'none';
    lenghtPwd.style.display = 'none';
    correctPwd.style.display = 'none';
    pwdInput.style.border = '1px solid black';
}
pwdInput.addEventListener("focus", writingPwd);

// Alerts while submiting //
registerForm.onsubmit = function (e){
    if(emailValidation()&& passValidation()){
        alert('Email: '+ mailInput.value +" "+ "-"+ " "+"Password: "+ pwdInput.value);
        fetch(`https://basp-m2022-api-rest-server.herokuapp.com/login?email=${mailInput.value}&password=${pwdInput.value}`)
          .then(response => response.json())
          .then(data => msgValidation.innerHTML = "<p>" + data.msg + "</p>")
          .catch(function(error) {
            console.log(error)
        }) 
    }
    else if(!emailValidation()&& passValidation()){
        alert("wrong E-mail");
    }
    else if(emailValidation() === true && !passValidation()) {
        alert("Wrong Password");
    }
    else {
        alert("The e-mail and the password are wrong");
    }
}