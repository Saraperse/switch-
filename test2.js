var readline = require("readline-sync");
var saisie = readline.questionInt ("entrez un numero entre 1 et 12 : " );


// une variante ( soit on force la saisie des entier avec question Int , soit on utilise la fonction ParseInt)


var saisie = ParseInt(readline.question("entrez un numero entre 1 et 12 : " ));

switch (saisie){
    case 1 : console.log("Janvier") // saisie === 1
    break;
    case 2 : console.log("Fevrier")
    break;
    case 3 : console.log("Mars")
    break;
    case 4 : console.log("Avril")
    break;
    case 5 : console.log("Mai")
    break;
    case 6 : console.log("Juin")
    break;
    case 7 : console.log("Juillet")
    break;
    case 8 : console.log("aout")
    break;
    case 9 : console.log("Septembre")
    break;
    case 10 : console.log("Octobre")
    break;
    case 11 : console.log("Novembre")
    break;
    case 12 : console.log("Decembre")
    break;
    default : console.log("Mois inexistant");
}



// Partie 2

var readline = require("readline-sync");
var saisie = readline.question("entrez un mois de l'annee : " );

switch (saisie)
{
    case "Janvier" : 
    console.log("1")
    break;
    case "Fevrier" : 
    console.log("2")
    break;
    case "Mars" : 
    console.log("3")
    break;
}