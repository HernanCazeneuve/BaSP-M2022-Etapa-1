var array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-Arrays-A:", array1[5], array1[11]);
/////////////////////////////////////////
var array2 = array1.sort();
console.log("ex03-Arrays-B:", array2);
/////////////////////////////////////////
array2.unshift("Domingo");
array2.push("Lunes");
console.log("ex03-Arrays-C:", array2);
/////////////////////////////////////////
array2.shift();
array2.pop();
console.log("ex03-Arrays-D:", array2);
/////////////////////////////////////////
var array3 = array1.reverse();
console.log("ex03-Arrays-E:", array3);
/////////////////////////////////////////
var joinedarray = array3.join("-");
console.log("ex03-Arrays-F", joinedarray);
/////////////////////////////////////////
var array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var array4 = array1.slice(4,11);
console.log("ex03-Arrays-G", array4);
