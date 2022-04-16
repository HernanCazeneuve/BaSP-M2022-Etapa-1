var num1 = Math.random();
if (num1 >= 0.5){
    console.log("ex04-if_else-A", num1," Is greater than 0,5" );
}
else {
    console.log("ex4-if_else-A", num1, " Is lower than 0,5”");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Age = Math.floor(Math.random()*100);
if (Age < 2){
    console.log("ex4-if_else-B", "con", Age ,"Años es Bebé");
}else if (Age >= 2 && Age <=12 ){
        console.log("ex4-if_else-B","con", Age ,"Años es Niño");
    }else if (Age >= 13 && Age <= 19){
            console.log("ex4-if_else-B","con", Age ,"Años es Adolescente");
        }else if (Age >= 20 && Age <= 30){
                console.log("ex4-if_else-B","con", Age ,"Años es Joven");
            }else if (Age >= 31 && Age <= 60){
                    console.log("ex4-if_else-B","con", Age ,"Años es Adulto");
                }else if (Age > 61 && Age <= 75){
                        console.log("ex4-if_else-B","con", Age ,"Años es Adulto Mayor");
                    }else if (Age > 75){
                            console.log("ex4-if_else-B","con", Age ,"Años es Anciano");
                        }


