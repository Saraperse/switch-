/*var readline = require("readline-sync");
var saisie = readline.questionInt ("entrez un numero entre 1 et 3 : " );

if (saisie === 1){
    console.log("footballeur"); 
}
else if(saisie === 2){ 
    console.log("rugbyman"); 
}
else if(saisie === 3){ 
    console.log("nageur"); 
}
else{ 
    console.log("default");  
}

// Les deux codes sont égaux !*/

var readline = require("readline-sync");
var saisie = readline.questionInt ("entrez un numero entre 1 et 3 : " );

switch(saisie){
    case 1 :
    console.log("footballeur");
    break;
    case 2 : 
    console.log("rugbyman")
    break;
    case 3: 
    console.log("nageur");
    break;
    default : 
    console.log("non traite")
}