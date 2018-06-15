/*
----- LES CONSIGNES -----
Créer un générateur de citations
    Les citations sont générées aléatoirement une par une à chaque appel du programme JavaScript
    Chaque citation est la combinaison d'au moins 3 morceaux de phrases (à preparer soit-même)
    A défaut d'être intélligible, la phrase doit être cohérente (pas de point d'exclamation au milieu d'une phrase)
Le programme peut afficher le résultat dans la console JavaScript
----- EVOLUTION DU PROGRAMME -----
--> L'utilisateur doit pouvoir choisir le nombre de citations (de 1 à 5)
--> Choisir entre 2 types de générateurs de citations (donc 2 ensembles de phrases)
--> Une fois les citations gérérées, l'utilisateur doit pouvoir choisir de générer de nouvelles citations ou d'arrêter le programme

*/

// ----- Ensemble de phrase thème Héros -----
// Création d'un tableau pour stocker les premières parties des phrases
var firstPartsHero = ["Super ", "Méga ", "Docteur(s) ", "Capitaine ", "L'incroyable ", "Le/La redoutable ", "L'invincible ", "Fatal(e) ", "Agent ", "L'extraordinaire ", "Lieutenant ", "Commandant ", "Dark ", "Aqua ", "Rocket ", "Inspecteur ", "L'invisible ", "Colonel ", "Le/La mystérieux(se) ", "Amiral ", "Ultra ", "Evil ", "Le/La fantastique ", "Professeur(e) ", "Turbo ", "Le/La spectaculaire "];

// Création d'un tableau pour stocker les deuxièmes parties de phrases
var secondPartsHero = ["Géant(s) ", "Araignée ", "Vampire ", "Tornade ", "Ninja ", "Mutant ", "Chaton ", "Machine ", "Vengeance ", "Rockstar ", "Eclair ", "Licorne ", "Jedi ", "Faucon ", "Sirène ", "Cobra ", "Moutarde ", "Robot ", "Salade ", "Chose ", "Zombies ", "Sorcier(ère) ", "Fantôme ", "Lagale ", "Pouliche ", "Destructeur "];

// Création d'un tableau pour stocker les 3eme parties de phrases
var thirdPartsHero = ["pleure devant une comédie romantique.", "mange des fraises au chocolat.", "ronfle comme un camion.", "se cache derrière la palissade en attendant que le combat se termine.", "engage le combat contre une petite vieille.", "ne veut pas être décoiffé.", "a peur de se casser un ongle.", "prend la fuite après avoir croisé une souris.", "est pété comme un coin après le pot de départ de Lilla.", "achète des fleurs pour la fête des mères.", "a la classe internationnale avec son nouveau collant vert.", "va au marché.", "va à la plage.", "a volé la Batmobile de son Batcopain.", "discute avec Pulpy, son ami imaginaire.", "explique la stratégie à suivre à son assemblée de petits canards en plastique.", "est poursuivi par un méchant.", "a une scission avec lui-même.", "danse sur la chanson What is looooove, baby don't hurt me, don't hurt me, no moooore !", "prend l'apéro avec maître Yoda.", "fait la cour à la Princesse Leïa.", "joue à Papier, Ciseaux, Cailloux, Lézard, Spock avec son alter ego.", "rêve de faire la fermeture de la taverne avec Karadoc et Perceval.", "dit être victime des colibris, sous-entendu des types qu'oublient tout et souhaite qu'on le considère en tant que tel.", "connait un technique pour tuer 3 hommes en 1 coup rien qu'avec des feuilles mortes.", "lance de la caillasse de l'autre côté de la rivière pour faire croire aux autres qu'il a traversé dans l'autre sens."];

// ----- Ensemble de phrase thème Gangster -----
// Création d'un tableau pour stocker les premières parties des phrases
var firstPartsGangsta = ["Joe ", "Bishop ", "Mr ", "Pitbull ", "Frank ", "Dynamite ", "Gypsy ", "Fusible ", "Mickey ", "Tatayé ", "Carlito ", "Duke ", "Jimmy ", "Danny ", "Angel ", "Tony ", "Punky ", "Bouboule ", "Jannot ", "Billy ", "Chef ", "Sharky ", "Max ", "Antoine ", "Bobbie ", "Seb "];

// Création d'un tableau pour stocker les deuxièmes parties de phrases
var secondPartsGangsta = ["Le taulard ", "Regard de braises ", "La gale ", "Gangsta ", "Les deux poings ", "Le rital ", "Le faussaire ", "Poker Face ", "Le boucher ", "Le livreur ", "Le parrain ", "Les yeux fous ", "La machoire ", "McBurnes ", "Du mitard ", "La balle ", "La balance ", "La débrouille ", "Le gitan ", "Le condamné ", "Le gouverneur ", "Le poète ", "La menace ", "Le gentil ", "Pink Lady ", "La ficèle "];

// Création d'un tableau pour stocker les 3eme parties de phrases
var thirdPartsGangsta = [" avoir mangé sur place après avoir demandé un menu à emporter au MacDo du coin.", " avoir volé l'orange du marchand.", " avoir répondu \"Ciseaux\" quand le représentant des forces de l'ordre a dit \"Papier\".", " avoir goûté aux fruits dans le rayon du supermarché.", " avoir fait un geste déplacé au radar automatique, sans avoir dépassé la limitation de vitesse", " avoir mis un jeton Carrfour dans un caddie Leclerc.", " avoir sonné à la porte du voisin et être parti en courant.", " être passé à un caisse \"moins de 10 articles\" alors qu'il y en avait plus.", " avoir tiré une porte alors qu'il y avait marqué \"Pousser\".", " avoir eu l'air coupable à la sortie sans achat du supermarché.", " avoir paniqué quand le portail antivol du supermarché a sonné.", " avoir pris les escaliers et avoir appuyé sur le bouton d'appel de l'ascenceur à chaque étage.", " avoir mis le volume de la télé sur un nombre impair.", " avoir mangé un \"After Eight\" avant 8h.", " avoir revendu des punitions écrites par anticipation : verbes conjugués, copies de réglement intérieur...", " avoir raccroché au nez des démarcheurs téléphoniques.", " avoir appuyé sur tous les boutons de l'ascenseur avant de sortir.", " avoir tué une heure.", " avoir demandé une chocolatine dans une boulangerie parisienne.", " avoir demandé un pain au chocolat dans une boulangerie Bordelaise.", " avoir braqué le frigo de son pote en pleine nuit.", " avoir vidé les publicités de sa boîte aux lettres dans celles de ces voisins.", " avoir cliqué sur \"Accepter\" sans lire les conditions.", " avoir enlevé sa clé USB sans être passé par \"Retirer en toute sécurité\".", " avoir appelé un numéro au pif et avoir raccrocher direct.", " son mauvais goût."];

console.log(firstPartsHero.length);
console.log(secondPartsHero.length);
console.log(thirdPartsHero.length);
console.log("-----");
console.log(firstPartsGangsta.length);
console.log(secondPartsGangsta.length);
console.log(thirdPartsGangsta.length);

// Récupération aléatoire d'un item (morceau de phrase) dans chaque tableau
// Utilisation de la fonction Math.random (renvoie un nombre aléatoire compris entre 0 inclus et 1 exclus)associé aux indices des item de chaque tableau
// Attention le nombre généré doit être un entier
// Math.ceil() renvoie le plus petit entier supérieur ou égal à un nombre donnée
// Math.floor() renvoie le plus grand entier qui est inférieur ou égal à un nombre donnée
function getRandomIndex (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

// Verification de la génération des deux lots de citation
// theme 1 : La vie secrète des héros
console.log("La vie secrete des heros");
var indexFirstPart = getRandomIndex(0, firstPartsHero.length-1);
var indexSecondPart = getRandomIndex(0, secondPartsHero.length-1);
var indexThirdPart = getRandomIndex(0, thirdPartsHero.length-1);

console.log("Pendant ce temps, quelque part dans le monde, " + firstPartsHero[indexFirstPart] + secondPartsHero[indexSecondPart] + thirdPartsHero[indexThirdPart]);
// thème 2 : Les pires gangsters
console.log("Epic Gangsta");
var indexFirstPart = getRandomIndex(0, firstPartsGangsta.length-1);
var indexSecondPart = getRandomIndex(0, secondPartsGangsta.length-1);
var indexThirdPart = getRandomIndex(0, thirdPartsGangsta.length-1);

console.log(firstPartsGangsta[indexFirstPart] + secondPartsGangsta[indexSecondPart] + "a été condamné pour" + thirdPartsGangsta[indexThirdPart]);

//var hero=firstPartsHero.concat(secondPartsHero, thirdPartsHero);
//console.log(hero.length);

// Création d'un tableau par thème, pour regrouper les différentes parties de phrases
// Cela permettra de donner le choix à l'utilisateur entre thème 1 ou thème 2 / tab1 ou tab2
console.log("\n-----\n");
var heroTabs=[firstPartsHero, secondPartsHero, thirdPartsHero];
var heroSentence = "Pendant ce temps, quelque part dans le monde, " + heroTabs[0][indexFirstPart] + heroTabs[1][indexSecondPart] + heroTabs[2][indexThirdPart];
console.log(heroSentence);
console.log("\n-----\n");
var gangstaTabs=[firstPartsGangsta, secondPartsGangsta, thirdPartsGangsta];
var gangstaSentence = gangstaTabs[0][indexFirstPart] + gangstaTabs[1][indexSecondPart] + "a été condamné pour" + gangstaTabs[2][indexThirdPart]
console.log(gangstaSentence);
console.log("\n-----\n");

function numberQuote(number) {
    if ((number>0 && number<=5) && (userTheme === "1")) {
        for(i=0; i<number; i++){
            console.log(heroSentence);
        };
    }
    else if ((number>0 && number<=5) && (userTheme === "2")) {
        for(i=0; i<number; i++){
            console.log(gangstaSentence);
        };
    };
};

//choix du thème
console.log("Bienvenue dans le geekotron ! \n-----\nChoisissez le thème de vos citations : \n1 - La vie secrète des Héros \n2 - Epic Gangsta \n0 - Quitter\n-----");

var userTheme = prompt("Choisissez votre thème");
var userQuoteNb = prompt("Combien de citations souhaitez-vous ? (jusqu'à 5 max.)")

while(userTheme !== "0"){
    if (userTheme === "1") {
    
    }
    else if (userTheme === "2") {
        
    }
    else{
        console.log("Cette fonctionnalité n'existe pas");
    };
};
console.log("Au revoir !");


// choix du nombre de citation
console.log("Bienvenue dans le geekotron ! \n Vous pouvez générer jusqu'à 5 citations en même temps. \nCombien de citations souhaitez-vous générer ?")





/*var userChoiseNb = prompt("Saisissez le nombre de citations (jusqu'à 5)");
var userChoiseNbCleaned
for (i=0; i<userChoiseNbCleaned; i++){
    
};*/
