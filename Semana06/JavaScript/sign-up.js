// Variables and const declaration //
// Name variables //
const fName = document.getElementById("fName");
const reqName = document.getElementById("reqName");
const incorrectName = document.getElementById("incorrectName");
const correctName = document.getElementById("correctName");
//LastName variables //
const lName = document.getElementById("lName");
const reqLName = document.getElementById("reqLName");
const incorrectLName = document.getElementById("incorrectLName");
const correctLName = document.getElementById("correctLName");
//DNI variables //
const idNum = document.getElementById("idNum");
const reqDni = document.getElementById("reqDni");
const incorrectDni = document.getElementById("incorrectDni");
const correctDni = document.getElementById("correctDni");
//Birth date variables //
//Phone number variables //
const phone = document.getElementById("phone");
const reqPhone = document.getElementById("reqPhone");
const incorrectPhone = document.getElementById("incorrectPhone");
const correctPhone = document.getElementById("correctPhone");
//Adress variables //
/*
//City variables//
Localidad: Texto alfanumérico y debe tener más de 3 letras.
*/
//Post Code variables //
const postCode = document.getElementById("postCode");
const reqPcode = document.getElementById("reqPcode");
const incorrectPcode = document.getElementById("incorrectPcode");
const correctPcode = document.getElementById("correctPcode"); 
//Código Postal: Solo número y debe tener entre 4 y 5 números. 

// E-Mail variables //
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
//Repeat password variables //
const rPwd = document.getElementById("rPwd");
const reqRPwd = document.getElementById("reqRPwd");
const incorrectRPwd = document.getElementById("incorrectRPwd");
const correctRPwd = document.getElementById("correctRPwd")
// Validation Arrays //
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ['!',"'",'"','*', '+', '-', '/','$','%','&','(',')',
'=','?','¿','`','^','[',']','´','{','Ç','}',',',';','.',':','-','_','º','ª',' '];

//Prevent submit default //
registerForm.addEventListener("submit", prevDef);
function prevDef(e) {
    e.preventDefault();
}
//Name lastname validation//
fName.addEventListener("blur", nameValidation);
function nameValidation(e) {
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0; 
    for (i=0; i < fName.value.length; i++) {
            if(numbers.includes(fName.value[i])){
                contNum++;
            } else if(letters.includes(fName.value[i])){
                contChar++;
            } else  {
                contSymbols++;
            }   
    }    
    if( fName.value === ""){
        reqName.style.display = 'flex';
        reqName.style.justifyContent = 'center';
        fName.style.border = '2px solid red';
        console.log("Nombre vacio")
    } else if( fName.value.length<3 || contSymbols>0 || contNum>0){
        incorrectName.style.display = 'flex';
        incorrectName.style.justifyContent = 'center';
        fName.style.border = '2px solid red';
        console.log("Nombre corto o tiene numeros o caracteres")
    } else {
        correctName.style.display = 'flex';
        correctName.style.justifyContent = 'center';
        fName.style.border = '2px solid green';
        console.log("name ok")
    }
}
function writingName(e){
    reqName.style.display = 'none';
    incorrectName.style.display = 'none';
    correctName.style.display = 'none';
    fName.style.border = '1px solid black'; 
}
fName.addEventListener("focus", writingName);

//lastname validation//
lName.addEventListener("blur", lNameValidation);
function lNameValidation(e) {
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0; 
    for (i=0; i < lName.value.length; i++) {
            if(numbers.includes(lName.value[i])){
                contNum++;
            } else if(letters.includes(lName.value[i])){
                contChar++;
            } else  {
                contSymbols++;
            }   
    }    
    if( lName.value === ""){
        reqLName.style.display = 'flex';
        reqLName.style.justifyContent = 'center';
        lName.style.border = '2px solid red';
        console.log("Nombre vacio")
    } else if( lName.value.length<3 || contSymbols>0 || contNum>0){
        incorrectLName.style.display = 'flex';
        incorrectLName.style.justifyContent = 'center';
        lName.style.border = '2px solid red';
        console.log("Nombre corto o tiene numeros o caracteres")
    } else {
        correctLName.style.display = 'flex';
        correctLName.style.justifyContent = 'center';
        lName.style.border = '2px solid green';
        console.log("lName ok")
    }
}
function writingLName(e){
    reqLName.style.display = 'none';
    incorrectLName.style.display = 'none';
    correctLName.style.display = 'none';
    lName.style.border = '1px solid black'; 
}
lName.addEventListener("focus", writingLName);

//ID Number validation//
idNum.addEventListener("blur", dniValidation);
function dniValidation(e) {
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0; 
    for (i=0; i < idNum.value.length; i++) {
            if(numbers.includes(idNum.value[i])){
                contNum++;
            } else if(letters.includes(idNum.value[i])){
                contChar++;
            } else  {
                contSymbols++;
            }   
    }    
    if( idNum.value === ""){
        reqDni.style.display = 'flex';
        reqDni.style.justifyContent = 'center';
        idNum.style.border = '2px solid red';
        console.log("DNI vacio")
    } else if( idNum.value.length<7 || contSymbols>0 || contChar>0){
        incorrectDni.style.display = 'flex';
        incorrectDni.style.justifyContent = 'center';
        idNum.style.border = '2px solid red';
        console.log("DNI corto o tiene caracteres")
    } else {
        correctDni.style.display = 'flex';
        correctDni.style.justifyContent = 'center';
        idNum.style.border = '2px solid green';
        console.log("DNI ok")
    }
}
function writingDNI(e){
    reqDni.style.display = 'none';
    incorrectDni.style.display = 'none';
    correctDni.style.display = 'none';
    idNum.style.border = '1px solid black'; 
}
idNum.addEventListener("focus", writingDNI);

//Birth date validation//

//Phone number validation //
phone.addEventListener("blur", phoneValidation);
function phoneValidation(e) {
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0; 
    for (i=0; i < phone.value.length; i++) {
            if(numbers.includes(phone.value[i])){
                contNum++;
            } else if(letters.includes(phone.value[i])){
                contChar++;
            } else  {
                contSymbols++;
            }  
    }    
    if( phone.value === ""){
        reqPhone.style.display = 'flex';
        reqPhone.style.justifyContent = 'center';
        phone.style.border = '2px solid red';
        console.log("Tel vacio")
    } else if( phone.value.length !== 10|| contSymbols>0 || contChar>0){
        incorrectPhone.style.display = 'flex';
        incorrectPhone.style.justifyContent = 'center';
        phone.style.border = '2px solid red';
        console.log("Tel corto o tiene caracteres")
    } else {
        correctPhone.style.display = 'flex';
        correctPhone.style.justifyContent = 'center';
        phone.style.border = '2px solid green';
        console.log("Tel ok")
    }
}
function writingPhone(e){
    reqPhone.style.display = 'none';
    incorrectPhone.style.display = 'none';
    correctPhone.style.display = 'none';
    phone.style.border = '1px solid black'; 
}
phone.addEventListener("focus", writingPhone);
//Adress validation //

//City validation //

//Post Code validation//
postCode.addEventListener("blur", postCodeValidation);
function postCodeValidation(e) {
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0; 
    for (i=0; i < postCode.value.length; i++) {
            if(numbers.includes(postCode.value[i])){
                contNum++;
            } else if(letters.includes(postCode.value[i])){
                contChar++;
            } else  {
                contSymbols++;
            }  
    }    
    if( postCode.value === ""){
        reqPcode.style.display = 'flex';
        reqPcode.style.justifyContent = 'center';
        postCode.style.border = '2px solid red';
        console.log("cod vacio")
    } else if( postCode.value.length<4 || postCode.value.length>5 || contSymbols>0 || contChar>0){
        incorrectPcode.style.display = 'flex';
        incorrectPcode.style.justifyContent = 'center';
        postCode.style.border = '2px solid red';
        console.log("cod corto o tiene caracteres")
    } else {
        correctPcode.style.display = 'flex';
        correctPcode.style.justifyContent = 'center';
        postCode.style.border = '2px solid green';
        console.log("cod ok")
    }
}

function writingPcode(e){
    reqPcode.style.display = 'none';
    incorrectPcode.style.display = 'none';
    correctPcode.style.display = 'none';
    postCode.style.border = '1px solid black'; 
}
postCode.addEventListener("focus", writingPcode);
//E-mail validation//
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
        console.log("vacio")
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
            //return true;
            } else {
                errorPwd.style.display = 'flex';
                errorPwd.style.justifyContent = 'center';
                pwdInput.style.border = '2px solid red';
                console.log("no cumple")
                //return false;
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

// Repeat password validation //
rPwd.addEventListener("blur", passRValidation);
function passRValidation(){
    if(rPwd.value === ""){
        reqRPwd.style.display = 'flex';
        reqRPwd.style.justifyContent = 'center';
        rPwd.style.border = '2px solid red';
        console.log("vacio")
        } else if (rPwd.value === pwdInput.value){
        correctRPwd.style.display = 'flex';
        correctRPwd.style.justifyContent = 'center';
        rPwd.style.border = '2px solid green';
        console.log("ok")
        return true;       
    } else {
        incorrectRPwd.style.display = 'flex';
        incorrectRPwd.style.justifyContent = 'center';
        rPwd.style.border = '2px solid red';
        console.log("no cumple")
        return false;  
    }
}
function writingRPwd(e){
    reqRPwd.style.display = 'none';
    incorrectRPwd.style.display = 'none';
    correctRPwd.style.display = 'none';
    rPwd.style.border = '1px solid black';
}
rPwd.addEventListener("focus", writingRPwd); 