var string1 = "holaMundillo";
var string2 = string1.toUpperCase();
console.log("ex02-Strings-A:", string2);
var string3 = string1.substring(0, 5);
console.log("ex02-Strings-B:", string3);
var string4 = string1.substring(9,12)
console.log("ex02-Strings-C:", string4);
var string5 = string1.substring(0,1).toUpperCase() + string1.substring(1,12).toLowerCase();
console.log("ex02-Strings-D:", string5);
var string6 = "Hola Mundo";
var string7 = string6.indexOf(" ");
console.log("ex02-Strings-E:", string7);
var string8 = "caballitos argentinos";
var string9 = string8.substring(0,1).toUpperCase() + string8.substring(1,10).toLocaleLowerCase() 
+ string8.substring((string8.indexOf(" ")),11) + string8.substring(11,12).toUpperCase() + string8.substring(12,21).toLowerCase();
console.log("ex02-Strings-F:", string9);

