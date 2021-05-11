/*var readline = require("readline-sync");
var saisie = readline.questionInt ("entrez votre age (entre 16 et 24 ans): " );



// code optimisé !!

switch (saisie){
    case 16 :     
    case 17 : console.log("Mineur");
    break;
    case 18 :     
    case 19 :     
    case 20 : console.log("Majeur");
    break;
    case 21 :    
    case 22 :   
    case 23 :     
    case 24 : console.log("Adulte");
    break;
    default : console.log("inexistatnt");
}*/



// variante


var readline = require("readline-sync");
var saisie = readline.questionInt ("entrez votre age (entre 16 et 24 ans): " );

if (saisie <= 17) {
    console.log("Mineur");

}else if (saisie <= 20) {
    console.log("Majeur");

}else if (saisie <=24)  {
    console.log("adulte"); 
}else{
    console.log("age non compris");
}
