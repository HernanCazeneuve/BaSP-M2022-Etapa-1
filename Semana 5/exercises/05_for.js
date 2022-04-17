var arrayFor = [ "today'll", "be", "a", "great", "day"];
for (let i = 0; i < 5; i++){
    alert(arrayFor[i]);
}
////////////////////////////////////////////////////////////////////////////////
var arrayFor = [ "today'll", "be", "a", "great", "day"];
for (let i = 0; i < 5; i++){
    arrayFor[i] = arrayFor[i].charAt(0).toUpperCase() + arrayFor[i].substring(1);
    alert ("The words first case of every word was changed to Uppercase");
}

////////////////////////////////////////////////////////////////////////////////

var sentence = "";
for (let i= 0 ; i < 5; i++){
    sentence = sentence + arrayFor[i] + " ";
}
alert(sentence);

////////////////////////////////////////////////////////////////////////////////

var arrayForC = [];
for (let i = 0; i<10; i++){
    arrayForC[i] = i
}
console.log("ex05-for-D: ", arrayForC)