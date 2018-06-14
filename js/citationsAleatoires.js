/*
----- LES CONSIGNES -----
Créer un générateur de citations
    Les citations sont générées aléatoirement une par une à chaque appel du programme JavaScript
    Chaque citation est la combinaison d'au moins 3 morceaux de phrases (à preparer soit-même)
    A défaut d'être intélligible, la phrase doit être cohérente (pas de point d'exclamation au milieu d'une phrase)
Le programme peut afficher le résultat dans la console JavaScript
*/

// Création d'un tableau pour stocker les premières parties des phrases
var firstParts = ["Super ", "Méga ", "Docteur(s) ", "Capitaine ", "L'incroyable ", "Le/La redoutable ", "L'invincible", "Fatal(e) ", "Agent ", "L'extraordinaire ", "Lieutenant ", "Commandant ", "Dark ", "Aqua ", "Rocket ", "Inspecteur ", "L'invisible ", "Colonel ", "Le/La mystérieux(se) ", "Amiral ", "Ultra ", "Evil ", "Le/La fantastique ", "Professeur(e) ", "Turbo ", "Le/La spectaculaire "];

// Création d'un tableau pour stocker les deuxièmes parties de phrases
var secondParts = ["Géant(s) ", "Araignée ", "Vampire ", "Tornade ", "Ninja ", "Mutant ", "Chaton ", "Machine ", "Vengeance ", "Rockstar ", "Eclair ", "Licorne ", "Jedi ", "Faucon ", "Sirène ", "Cobra ", "Moutarde ", "Robot ", "Salade ", "Chose ", "Zombies ", "Sorcier(ère) ", "Fantôme ", "Lagale ", "Pouliche ", "Destructeur "];

//Création d'un tableau pour stocker les 3eme parties de phrases
var thirdParts = ["pleure devant une comédie romantique.", "mange des fraises au chocolat.", "ronfle comme un camion.", "se cache derrière la palissade en attendant que le combat se termine.", "engage le combat contre une petite vieille.", "ne veut pas être décoiffé.", "a peur de se casser un ongle.", "prend la fuite après avoir croisé une souris.", "est pété comme un coin après le pot de départ de Lilla.", "achète des fleurs pour la fête des mères.", "a la classe internationnale avec son nouveau collant vert.", "va au marché.", "va à la plage.", "a volé la Batmobile de son Batcopain.", "discute avec Pulpy, son ami imaginaire.", "explique la stratégie à suivre à son assemblée de petits canards en plastique.", "est poursuivi par un méchant.", "a une scission avec lui-même.", "danse sur la chanson What is looooove, baby don't hurt me, don't hurt me, no moooore !", "prend l'apéro avec maître Yoda.", "fait la cour à la Princesse Leïa.", "joue à Papier, Ciseaux, Cailloux, Lézard, Spock avec son alter ego.", "rêve de faire la fermeture de la taverne avec Karadoc et Perceval.", "dit être victime des colibris, sous-entendu des types qu'oublient tout et souhaite qu'on le considère en tant que tel.", "connait un technique pour tuer 3 hommes en 1 coup rien qu'avec des feuilles mortes.", "lance de la caillasse de l'autre côté de la rivière pour faire croire aux autres qu'il a traversé dans l'autre sens."];

console.log(firstParts.length + "\n" + secondParts.length + "\n" + thirdParts.length);
console.log(firstParts + "\n" + secondParts + "\n" + thirdParts);

