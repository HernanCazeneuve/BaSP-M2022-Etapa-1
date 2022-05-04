// Variables and var declaration //
var registerForm = document.getElementById("form");
// Name variables //
var fName = document.getElementById("fName");
var reqName = document.getElementById("reqName");
var incorrectName = document.getElementById("incorrectName");
var correctName = document.getElementById("correctName");
//LastName variables //
var lName = document.getElementById("lName");
var reqLName = document.getElementById("reqLName");
var incorrectLName = document.getElementById("incorrectLName");
var correctLName = document.getElementById("correctLName");
//Birth date variables //
var bDate = document.getElementById("bDate");
var reqDate = document.getElementById("reqDate");
var incorrectDate = document.getElementById("incorrectDate");
var correctDate = document.getElementById("correctDate");
var age;
//DNI variables //
var idNum = document.getElementById("idNum");
var reqDni = document.getElementById("reqDni");
var incorrectDni = document.getElementById("incorrectDni");
var correctDni = document.getElementById("correctDni");
//Phone number variables //
var phone = document.getElementById("phone");
var reqPhone = document.getElementById("reqPhone");
var incorrectPhone = document.getElementById("incorrectPhone");
var correctPhone = document.getElementById("correctPhone");
//Adress variables //
var address = document.getElementById("address");
var reqAdress = document.getElementById("reqAdress");
var incorrectAdress = document.getElementById("incorrectAdress");
var correctAdress = document.getElementById("correctAdress");
//City variables//
var city = document.getElementById("city");
var reqCity = document.getElementById("reqCity");
var incorrectCity = document.getElementById("incorrectCity");
var correctCity = document.getElementById("correctCity");
//Post Code variables //
var postCode = document.getElementById("postCode");
var reqPcode = document.getElementById("reqPcode");
var incorrectPcode = document.getElementById("incorrectPcode");
var correctPcode = document.getElementById("correctPcode"); 
// E-Mail variables //
var mailInput = document.getElementById("mail");
var mailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var reqMail = document.getElementById("reqMail");
var errorMail = document.getElementById("incorrectMail");
var correctMail = document.getElementById("correctMail");
// Password variables //
var pwdInput = document.getElementById("pwd");
var reqPwd = document.getElementById("reqPwd");
var lenghtPwd = document.getElementById("lenghtPwd");
var errorPwd = document.getElementById("incorrectPwd");
var correctPwd = document.getElementById("correctPwd");
//Repeat password variables //
var rPwd = document.getElementById("rPwd");
var reqRPwd = document.getElementById("reqRPwd");
var incorrectRPwd = document.getElementById("incorrectRPwd");
var correctRPwd = document.getElementById("correctRPwd")
// Validation Arrays //
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",' '];
var symbols = ['!',"'",'"','*', '+', '-', '/','$','%','&','(',')',
'=','?','¿','`','^','[',']','´','{','Ç','}',',',';','.',':','-','_','º','ª'];
var msgValidation = document.getElementById("msgValidation")

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
    var newFormat = '';
    function getAge(bDate){
        var today = new Date();
        var bDt = new Date(bDate);
        age = today.getFullYear() - bDt.getFullYear();
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
        else if(getAge(bDate.value) <18 ||getAge(bDate)>100) {
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
     var formatDate = bDate.value.split('-');
     newFormat =
            formatDate.slice(1, 2) +
            '/' +
            formatDate.slice(2) +
            '/' +
            formatDate.slice(0, 1);
            console.log(newFormat);
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
//Address validation //
address.addEventListener("blur", adressValidation)
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
    for (i=0; i < address.value.length; i++) {
        if(numbers.includes(address.value[i])){
            contNum++;
        } else if(letters.includes(address.value[i])){
            contChar++;
        } else  {
            contSymbols++;
        }   
    }  
    if( address.value === ""){
        reqAdress.style.display = 'flex';
        reqAdress.style.justifyContent = 'center';
        address.style.border = '2px solid red';
        console.log("address vacio")
        return false;
    } else if( address.value.length<5 || contSymbols>0 || contNum<1 || contChar<1){
        incorrectAdress.style.display = 'flex';
        incorrectAdress.style.justifyContent = 'center';
        address.style.border = '2px solid red';
        console.log("Tiene caracteres ")
        return false;
    } else {
        correctAdress.style.display = 'flex';
        correctAdress.style.justifyContent = 'center';
        address.style.border = '2px solid green';
        console.log("ad ok")
        return true;
    }
}
address.addEventListener("focus", writtingAdress)
function writtingAdress(e){
    reqAdress.style.display = "none";
    incorrectAdress.style.display = "none";
    correctAdress.style.display = 'none';
    address.style.border = "solid 2px black";
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

// Date format change

// On Submit //
registerForm.onsubmit = function (e){
    if (nameValidation() === true && lNameValidation() === true && dniValidation() === true &&  dateValidation() === true
    && phoneValidation() === true && adressValidation() === true && cityValidation() === true && 
    postCodeValidation() === true && emailValidation() === true &&  passValidation() === true && 
    passRValidation() === true) {
        alert ('Name: ' + fName.value + ' ' + 'Surname: ' + lName.value + ' ' + 'DNI: ' + idNum.value
        + 'Date of Birth :' + bDate.value + ' ' + 'Phone Number :' + phone.value + ' ' + 'Address :' + 
        address.value + ' ' + 'Location: ' + city.value + ' ' + 'Posta Code: ' + postCode.value + ' ' +
        'Email: ' + mailInput.value + ' ' + 'Password: ' + pwdInput.value + 'Repeated Password: ' + rPwd.value);
        //Server-side Validation
        fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${fName.value}&lastName=${lName.value}&dni=${idNum.value}&dob=${newFormat}&phone=${phone.value}&address=${address.value}&city=${city.value}&zip=${postCode.value}&email=${mailInput.value}&password=${pwdInput.value}`)
            .then(function(response) {
                console.log(response)
                return response.json();
            })
            .then(function (data) {
                    msgValidation.innerHTML = "<p>" + data.msg + "</p>";
                    console.log(data.msg);
                    saveDataLocal(data);
        
                }) 
                .catch(error => {
                    console.error(error);
            }) 
        return true
    }
    if (nameValidation() !== true){
        alert ('Wrong Name');
    }
    if (lNameValidation() !== true) {
        alert ('Wrong Surname');
    }
    if (dniValidation() !== true) {
        alert ('Wrong DNI');
    }
    if (dateValidation() !== true) {
        alert ('Wrong Date of Birth');
    }
    if (phoneValidation() !== true) {
        alert ('Wrong Phone Number');
    }
    if (adressValidation() !== true) {
        alert ('Wrong Adress');
    }
    if (cityValidation() !== true) {
        alert ('Wrong Location');
    }
    if (postCodeValidation() !== true) {
        alert ('Wrong Postal Code');
    }
    if (emailValidation() !== true) {
        alert ('Wrong Email');
    }
    if (passValidation() !== true) {
        alert ('Wrong Password');
    }
    if (passRValidation() !== true) {
        alert ('Wrong Password');
    }
}
//Prevent submit default //
registerForm.addEventListener("submit", prevDef);
function prevDef(e) {
    e.preventDefault();
}

//save data on local storage
function saveDataLocal() {
    localStorage.setItem('name', fName.value);
    localStorage.setItem('lastName', lName.value);
    localStorage.setItem('dob', bDate.value);
    localStorage.setItem('dni', idNum.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('zip', postCode.value);
    localStorage.setItem('email', mailInput.value);
    localStorage.setItem('password', pwdInput.value);
}  

//Complete the form with data from local storage. When refreshing the browser the the form is still completed.
window.onload = function localDataCompleteForm () {
    localStorage.getItem('name') !== null ? fName.value = localStorage.getItem('name') : null;
    localStorage.getItem('lastName') !== null ? lName.value = localStorage.getItem('lastName') : null;
    localStorage.getItem('dob') !== null ? bDate.value = localStorage.getItem('dob') : null;
    localStorage.getItem('dni') !== null ? idNum.value = localStorage.getItem('dni') : null;
    localStorage.getItem('phone') !== null ? phone.value = localStorage.getItem('phone') : null;
    localStorage.getItem('address') !== null ? address.value = localStorage.getItem('address') : null;
    localStorage.getItem('city') !== null ? city.value = localStorage.getItem('city') : null;
    localStorage.getItem('zip') !== null ? postCode.value = localStorage.getItem('zip') : null;
    localStorage.getItem('email') !== null ? mailInput.value = localStorage.getItem('email') : null;
    localStorage.getItem('password') !== null ? pwdInput.value = localStorage.getItem('password') : null;
}
