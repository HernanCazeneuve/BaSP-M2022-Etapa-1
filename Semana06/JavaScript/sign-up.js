// Variables and const declaration //
const registerForm = document.getElementById("form");
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
//Birth date variables //
const bDate = document.getElementById("bDate");
const reqDate = document.getElementById("reqDate");
const incorrectDate = document.getElementById("incorrectDate");
const correctDate = document.getElementById("correctDate");
//DNI variables //
const idNum = document.getElementById("idNum");
const reqDni = document.getElementById("reqDni");
const incorrectDni = document.getElementById("incorrectDni");
const correctDni = document.getElementById("correctDni");
//Phone number variables //
const phone = document.getElementById("phone");
const reqPhone = document.getElementById("reqPhone");
const incorrectPhone = document.getElementById("incorrectPhone");
const correctPhone = document.getElementById("correctPhone");
//Adress variables //
const adress = document.getElementById("adress");
const reqAdress = document.getElementById("reqAdress");
const incorrectAdress = document.getElementById("incorrectAdress");
const correctAdress = document.getElementById("correctAdress");
//City variables//
const city = document.getElementById("city");
const reqCity = document.getElementById("reqCity");
const incorrectCity = document.getElementById("incorrectCity");
const correctCity = document.getElementById("correctCity");
//Post Code variables //
const postCode = document.getElementById("postCode");
const reqPcode = document.getElementById("reqPcode");
const incorrectPcode = document.getElementById("incorrectPcode");
const correctPcode = document.getElementById("correctPcode"); 
// E-Mail variables //
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
const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",' '];
var symbols = ['!',"'",'"','*', '+', '-', '/','$','%','&','(',')',
'=','?','¿','`','^','[',']','´','{','Ç','}',',',';','.',':','-','_','º','ª'];

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
        return false;
    } else if( fName.value.length<3 || contSymbols>0 || contNum>0){
        incorrectName.style.display = 'flex';
        incorrectName.style.justifyContent = 'center';
        fName.style.border = '2px solid red';
        console.log("Nombre corto o tiene numeros o caracteres")
        return false;
    } else {
        correctName.style.display = 'flex';
        correctName.style.justifyContent = 'center';
        fName.style.border = '2px solid green';
        console.log("name ok")
        return true;
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
            return false;
        } else if( lName.value.length<3 || contSymbols>0 || contNum>0){
            incorrectLName.style.display = 'flex';
            incorrectLName.style.justifyContent = 'center';
            lName.style.border = '2px solid red';
            console.log("Nombre corto o tiene numeros o caracteres")
            return false;
        } else {
            correctLName.style.display = 'flex';
            correctLName.style.justifyContent = 'center';
            lName.style.border = '2px solid green';
            console.log("lName ok")
            return true;
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
            return false;
        } else if( idNum.value.length<7 || contSymbols>0 || contChar>0){
            incorrectDni.style.display = 'flex';
            incorrectDni.style.justifyContent = 'center';
            idNum.style.border = '2px solid red';
            console.log("DNI corto o tiene caracteres")
            return false;
        } else {
            correctDni.style.display = 'flex';
            correctDni.style.justifyContent = 'center';
            idNum.style.border = '2px solid green';
            console.log("DNI ok")
            return true;
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
    function getAge(bDate){
        var today = new Date();
        var bDt = new Date(bDate);
        var age = today.getFullYear() - bDt.getFullYear();
        return age;
    }
    bDate.addEventListener("blur", dateValidation)
    function dateValidation(e){
        if(bDate.value === ""){
            reqDate.style.display = 'flex';
            reqDate.style.justifyContent = 'center';
            bDate.style.border = '2px solid red';
            console.log("Date vacio")
            return false;
        }
        else if(getAge(bDate) <18 ||getAge(bDate)>100) {
            incorrectDate.style.display = 'flex';
            incorrectDate.style.justifyContent = 'center';
            phone.style.border = '2px solid red';
            console.log("Menor")
        return false;
    }
    else{
        correctDate.style.display = 'flex';
        correctDate.style.justifyContent = 'center';
        bDate.style.border = '2px solid green';
        console.log("Date ok")
        return true;
    }
}

function writingDate(e){
    reqDate.style.display = 'none';
    incorrectDate.style.display = 'none';
    correctDate.style.display = 'none';
    bDate.style.border = '1px solid black'; 
}
bDate.addEventListener("focus", writingDate);

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
        return false;
    } else if( phone.value.length !== 10|| contSymbols>0 || contChar>0){
        incorrectPhone.style.display = 'flex';
        incorrectPhone.style.justifyContent = 'center';
        phone.style.border = '2px solid red';
        console.log("Tel corto o tiene caracteres")
        return false;
    } else {
        correctPhone.style.display = 'flex';
        correctPhone.style.justifyContent = 'center';
        phone.style.border = '2px solid green';
        console.log("Tel ok")
        return true;
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
adress.addEventListener("blur", adressValidation)
function adressValidation(e){
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",' '];
    var symbols = ['!',"'",'"','*', '+', '-', '/','$','%','&','(',')',
    '=','?','¿','`','^','[',']','´','{','Ç','}',',',';','.',':','-','_','º','ª'];
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0;  
    for (i=0; i < adress.value.length; i++) {
        if(numbers.includes(adress.value[i])){
            contNum++;
        } else if(letters.includes(adress.value[i])){
            contChar++;
        } else  {
            contSymbols++;
        }   
    }  
    if( adress.value === ""){
        reqAdress.style.display = 'flex';
        reqAdress.style.justifyContent = 'center';
        adress.style.border = '2px solid red';
        console.log("adress vacio")
        return false;
    } else if( adress.value.length<5 || contSymbols>0 || contNum<1 || contChar<1){
        incorrectAdress.style.display = 'flex';
        incorrectAdress.style.justifyContent = 'center';
        adress.style.border = '2px solid red';
        console.log("Tiene caracteres ")
        return false;
    } else {
        correctAdress.style.display = 'flex';
        correctAdress.style.justifyContent = 'center';
        adress.style.border = '2px solid green';
        console.log("ad ok")
        return true;
    }
}
adress.addEventListener("focus", writtingAdress)
function writtingAdress(e){
    reqAdress.style.display = "none";
    incorrectAdress.style.display = "none";
    correctAdress.style.display = 'none';
    adress.style.border = "solid 2px black";
}
//City validation //
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",' '];
var symbols = ['!',"'",'"','*', '+', '-', '/','$','%','&','(',')',
'=','?','¿','`','^','[',']','´','{','Ç','}',',',';','.',':','-','_','º','ª'];
city.addEventListener("blur", cityValidation);
function cityValidation(e) {
    var contNum = 0;
    var contChar = 0;
    var contSymbols = 0; 
    for (i=0; i < city.value.length; i++) {
        if(numbers.includes(city.value[i])){
            contNum++;
        } else if(letters.includes(city.value[i])){
            contChar++;
        } else  {
            contSymbols++;
        }   
    }    
    if( city.value === ""){
        reqCity.style.display = 'flex';
        reqCity.style.justifyContent = 'center';
        city.style.border = '2px solid red';
        console.log("city vacio")
        return false;
    } else if( city.value.length<3 || contSymbols>0){
        incorrectCity.style.display = 'flex';
        incorrectCity.style.justifyContent = 'center';
        city.style.border = '2px solid red';
        console.log("Nombre corto o tiene caracteres")
        return false;
    } else {
        correctCity.style.display = 'flex';
        correctCity.style.justifyContent = 'center';
        city.style.border = '2px solid green';
        console.log("city ok")
        return true;
    }
}
function writingCity(e){
    reqCity.style.display = 'none';
    incorrectCity.style.display = 'none';
    correctCity.style.display = 'none';
    city.style.border = '1px solid black'; 
}
city.addEventListener("focus", writingCity);


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
        return false;
    } else if( postCode.value.length<4 || postCode.value.length>5 || contSymbols>0 || contChar>0){
        incorrectPcode.style.display = 'flex';
        incorrectPcode.style.justifyContent = 'center';
        postCode.style.border = '2px solid red';
        console.log("cod corto o tiene caracteres")
        return false;
    } else {
        correctPcode.style.display = 'flex';
        correctPcode.style.justifyContent = 'center';
        postCode.style.border = '2px solid green';
        console.log("cod ok")
        return true;
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
    return false;
} else if(!mailRegEx.test(mailInput.value)) {
    errorMail.style.display = 'flex';
    errorMail.style.justifyContent = 'center';
    mailInput.style.border = '2px solid red';
    return false;
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
        return false;
    } else if(pwdInput.value.length < 8) {
        lenghtPwd.style.display = 'flex';
        lenghtPwd.style.justifyContent = 'center';
        pwdInput.style.border = '2px solid red';
        console.log("corto")
        return false;
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

// Repeat password validation //
rPwd.addEventListener("blur", passRValidation);
function passRValidation(){
    if(rPwd.value === ""){
        reqRPwd.style.display = 'flex';
        reqRPwd.style.justifyContent = 'center';
        rPwd.style.border = '2px solid red';
        console.log("vacio")
        return false;
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

// On Submit //
registerForm.onsubmit = function (e){
    if (nameValidation() === true && lNameValidation() === true && dniValidation() === true &&  dateValidation() === true
    && phoneValidation() === true && adressValidation() === true && cityValidation() === true && 
    postCodeValidation() === true && emailValidation() === true &&  passValidation() === true && 
    passRValidation() === true) {
        alert ('Name: ' + fName.value + ' ' + 'Surname: ' + lName.value + ' ' + 'DNI: ' + idNum.value
        + 'Date of Birth :' + bDate.value + ' ' + 'Phone Number :' + phone.value + ' ' + 'Adress :' + 
        adress.value + ' ' + 'Location: ' + city.value + ' ' + 'Posta Code: ' + postCode.value + ' ' +
        'Email: ' + mailInput.value + ' ' + 'Password: ' + pwdInput.value + 'Repeated Password: ' + rPwd.value);
        return true
    }else if (nameValidation() !== true){
        alert ('Wrong Name');
    }else if (lNameValidation() !== true) {
        alert ('Wrong Surname');
    }else if (dniValidation() !== true) {
        alert ('Wrong DNI');
    }else if (dateValidation() !== true) {
        alert ('Wrong Date of Birth');
    }else if (phoneValidation() !== true) {
        alert ('Wrong Phone Number');
    }else if (adressValidation() !== true) {
        alert ('Wrong Adress');
    }else if (cityValidation() !== true) {
        alert ('Wrong Location');
    }else if (postCodeValidation() !== true) {
        alert ('Wrong Postal Code');
    }else if (emailValidation() !== true) {
        alert ('Wrong Email');
    }else if (passValidation() !== true) {
        alert ('Wrong Password');
    }else if (passRValidation() !== true) {
        alert ('Wrong Password');
    }
}
//Prevent submit default //
registerForm.addEventListener("submit", prevDef);
function prevDef(e) {
    e.preventDefault();
}

