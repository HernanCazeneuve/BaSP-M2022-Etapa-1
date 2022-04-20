
/////////////////////////////////////////// A //////////////////////////////////////////////////////////////////
var n1 = "perro";
var n2 = 3;
function suma2Num (n1, n2) {
    return n1 + n2;
}
console.log("ex6-functions-A", suma2Num (n1, n2));

/////////////////////////////////////////// B ////////////////////////////////////////////////////////////////
function suma2Num (n1, n2) {
    if(isNaN(n1) || isNaN(n2)){
      console.log("Wrong input!!!");
      return NaN;
  } else {
    return n1 + n2;
    }
}
console.log("ex6-functions-B", suma2Num (n1, n2));
//////////////////////////////////////////// C /////////////////////////////////////////////////////////////
var num = 2;
function validateInteger (num) {
   return Number.isInteger(num)
}
console.log("ex6-functions-C", validateInteger(num));
//////////////////////////////////////////// D /////////////////////////////////////////////////////////////
var n3 = 2;
var n4 = 2; 
function validateSum (n3,n4){
    if (!isNaN(n3) && !isNaN(n4)) {
        if (validateInteger(n3) && validateInteger(n4)){
            return n3 + n4;
        } 
        if(!validateInteger(n3) && !validateInteger(n4)){
            alert("Warning " + n3 + " is not an integer " + n4 + " neither");
            return Math.round(n3)+Math.round(n4)
        }
        if(!validateInteger(n3)) {
            alert("Warning " + n3 + " not an integer");
                return Math.round(n3)+n4;
        }
        if(!validateInteger(n4)) {
            alert("Warning " + n4 + " not an integer");
                return Math.round(n4)+n3;
        }
    } else {
        alert("Warning, one of the two parameters is not a number");
        return NaN;
    }
}
console.log("ex6-Functions-D: ", validateSum (n3,n4));

///////////////////////////////////////////// E //////////////////////////////////////////////////////////////
function suma2NumE (n3,n4){
    return validateSum (n3,n4);
}
console.log("ex6-Functions-E: ", suma2NumE (n3,n4));