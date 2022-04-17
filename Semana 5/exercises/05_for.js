var arrayForA = [ "today'll", "be", "a", "great", "day"];
for (let i = 0; i < 5; i++){
    alert(array1[i]);
}
////////////////////////////////////////////////////////////////////////////////
var arrayForB = [ "today'll", "be", "a", "great", "day"];
for (let i = 0; i < 5; i++){
    arrayForB[i] = arrayForB[i].charAt(0).toLocaleUpperCase() + arrayForB[i].substring(1);
    alert ("The words first case of every word was changed to Uppercase");
}

////////////////////////////////////////////////////////////////////////////////

var sentence = "";
for (let i= 0 ; i < 5; i++){
    sentence = sentence + arrayForA[i] + " ";
}
alert(sentence);

////////////////////////////////////////////////////////////////////////////////

var arrayForC = [];
for (let i = 0; i<10; i++){
    arrayForC[i] = i
}
console.log("ex05-for-D: ", arrayForC)