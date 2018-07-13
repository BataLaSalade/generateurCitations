
var firstPartsHero = ["Super ", "Méga ", "Docteur(s) ", "Capitaine ", "L'incroyable ", "Le/La redoutable ", "L'invincible ", "Fatal(e) ", "Agent ", "L'extraordinaire ", "Lieutenant ", "Commandant ", "Dark ", "Aqua ", "Rocket ", "Inspecteur ", "L'invisible ", "Colonel ", "Le/La mystérieux(se) ", "Amiral ", "Ultra ", "Evil ", "Le/La fantastique ", "Professeur(e) ", "Turbo ", "Le/La spectaculaire "];

var secondPartsHero = ["Géant(s) ", "Araignée ", "Vampire ", "Tornade ", "Ninja ", "Mutant ", "Chaton ", "Machine ", "Vengeance ", "Rockstar ", "Eclair ", "Licorne ", "Jedi ", "Faucon ", "Sirène ", "Cobra ", "Moutarde ", "Robot ", "Salade ", "Chose ", "Zombies ", "Sorcier(ère) ", "Fantôme ", "Lagale ", "Pouliche ", "Destructeur "];

var thirdPartsHero = ["pleure devant une comédie romantique.", "mange des fraises au chocolat.", "ronfle comme un camion.", "se cache derrière la palissade en attendant que le combat se termine.", "engage le combat contre une petite vieille.", "ne veut pas être décoiffé.", "a peur de se casser un ongle.", "prend la fuite après avoir croisé une souris.", "est pété comme un coin après le pot de départ de Lilla.", "achète des fleurs pour la fête des mères.", "a la classe internationnale avec son nouveau collant vert.", "va au marché.", "va à la plage.", "a volé la Batmobile de son Batcopain.", "discute avec Pulpy, son ami imaginaire.", "explique la stratégie à suivre à son assemblée de petits canards en plastique.", "est poursuivi par un méchant.", "a une scission avec lui-même.", "danse sur la chanson What is looooove, baby don't hurt me, don't hurt me, no moooore !", "prend l'apéro avec maître Yoda.", "fait la cour à la Princesse Leïa.", "joue à Papier, Ciseaux, Cailloux, Lézard, Spock avec son alter ego.", "rêve de faire la fermeture de la taverne avec Karadoc et Perceval.", "dit être victime des colibris, sous-entendu des types qu'oublient tout et souhaite qu'on le considère en tant que tel.", "connait un technique pour tuer 3 hommes en 1 coup rien qu'avec des feuilles mortes.", "lance de la caillasse de l'autre côté de la rivière pour faire croire aux autres qu'il a traversé dans l'autre sens."];

var firstPartsGangsta = ["Joe ", "Bishop ", "Mr ", "Pitbull ", "Frank ", "Dynamite ", "Gypsy ", "Fusible ", "Mickey ", "Tatayé ", "Carlito ", "Duke ", "Jimmy ", "Danny ", "Angel ", "Tony ", "Punky ", "Bouboule ", "Jannot ", "Billy ", "Chef ", "Sharky ", "Max ", "Antoine ", "Bobbie ", "Seb "];

var secondPartsGangsta = ["Le taulard ", "Regard de braises ", "La gale ", "Gangsta ", "Les deux poings ", "Le rital ", "Le faussaire ", "Poker Face ", "Le boucher ", "Le livreur ", "Le parrain ", "Les yeux fous ", "La machoire ", "McBurnes ", "Du mitard ", "La balle ", "La balance ", "La débrouille ", "Le gitan ", "Le condamné ", "Le gouverneur ", "Le poète ", "La menace ", "Le gentil ", "Pink Lady ", "La ficèle "];

var thirdPartsGangsta = [" avoir mangé sur place après avoir demandé un menu à emporter au MacDo du coin.", " avoir volé l'orange du marchand.", " avoir répondu \"Ciseaux\" quand le représentant des forces de l'ordre a dit \"Papier\".", " avoir goûté aux fruits dans le rayon du supermarché.", " avoir fait un geste déplacé au radar automatique, sans avoir dépassé la limitation de vitesse", " avoir mis un jeton Carrfour dans un caddie Leclerc.", " avoir sonné à la porte du voisin et être parti en courant.", " être passé à un caisse \"moins de 10 articles\" alors qu'il y en avait plus.", " avoir tiré une porte alors qu'il y avait marqué \"Pousser\".", " avoir eu l'air coupable à la sortie sans achat du supermarché.", " avoir paniqué quand le portail antivol du supermarché a sonné.", " avoir pris les escaliers et avoir appuyé sur le bouton d'appel de l'ascenceur à chaque étage.", " avoir mis le volume de la télé sur un nombre impair.", " avoir mangé un \"After Eight\" avant 8h.", " avoir revendu des punitions écrites par anticipation : verbes conjugués, copies de réglement intérieur...", " avoir raccroché au nez des démarcheurs téléphoniques.", " avoir appuyé sur tous les boutons de l'ascenseur avant de sortir.", " avoir tué une heure.", " avoir demandé une chocolatine dans une boulangerie parisienne.", " avoir demandé un pain au chocolat dans une boulangerie Bordelaise.", " avoir braqué le frigo de son pote en pleine nuit.", " avoir vidé les publicités de sa boîte aux lettres dans celles de ces voisins.", " avoir cliqué sur \"Accepter\" sans lire les conditions.", " avoir enlevé sa clé USB sans être passé par \"Retirer en toute sécurité\".", " avoir appelé un numéro au pif et avoir raccrocher direct.", " son mauvais goût."];

function getRandomIndex (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var firstPartsLength = firstPartsHero.length;
var secondPartsLength = secondPartsHero.length;
var thirdPartsLength = thirdPartsHero.length;

var indexFirstPart = "";
var indexSecondPart = "";
var indexThirdPart = "";

var heroTabs=[firstPartsHero, secondPartsHero, thirdPartsHero];
var heroSentence = "";

var gangstaTabs=[firstPartsGangsta, secondPartsGangsta, thirdPartsGangsta];
var gangstaSentence = "";

var containerQuote = document.getElementById("citations");
var heroBtn = document.getElementById("hero");
var gangstaBtn = document.getElementById("gangsta");

var themeTitle = document.createElement("h2");

function createQuote(myThemeTitle){
    containerQuote.innerHTML= "";
    //var nbQuote = document.getElementById("nbQuote");
    var currentNbQuote = NbQuote.value;
    themeTitle.textContent = myThemeTitle;
    document.getElementById("citations").appendChild(themeTitle);
    
    for(i=0; i<currentNbQuote; i++){
        indexFirstPart = getRandomIndex(0, firstPartsLength-1);
        indexSecondPart = getRandomIndex(0, secondPartsLength-1);
        indexThirdPart = getRandomIndex(0, thirdPartsLength-1);
        if(myThemeTitle == "La vie secrète des héros"){
            var sentence = heroTabs[0][indexFirstPart] + heroTabs[1][indexSecondPart] + heroTabs[2][indexThirdPart];
        }
        else{
            sentence = gangstaTabs[0][indexFirstPart] + gangstaTabs[1][indexSecondPart] + "a été condamné pour" + gangstaTabs[2][indexThirdPart];
        }
        var newQuote = document.createElement("p");
        newQuote.textContent = sentence;
        document.getElementById("citations").appendChild(newQuote);
    };
}

heroBtn.addEventListener("click", function(){
    createQuote("La vie secrète des héros")
});

gangstaBtn.addEventListener("click", function(){
    createQuote("Epic Gangsta")
});