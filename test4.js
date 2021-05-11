
var menu = " 1/ Ajouter un joueur \n";
menu +=  " 2/ Modifier les informations d'un joueur \n";
menu += " 3/ Supprimez un joueur";

console.log(menu);


var readline = require("readline-sync");
var saisie = readline.questionInt ("Quel est votre choix ( entre 1 et 3 ?) " );

switch (saisie){
    case 1 : 
    console.log("Vous avez selectionne d'ajouter un joueur");
    break;
    case 2 : 
    console.log("Vous avez selectionne de modifier les informations d'un joueur");
    break;
    case 3 : 
    console.log("Vous avez selectionne de supprimer un joueur");
    default : console.log("cas non traite");
}

