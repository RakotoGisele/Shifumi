var number = 0;
var person;
var random;
var signeUtilisateur = '';
var signeOrdinateur = '';
var ledUtilisateur = '';
var ledOrdinateur = '';

/* fonction permettant d'entrée un nom d'utilisateur */
function change() {
    person = prompt("Quel est votre nom ?");
    if (person != null) {
        document.getElementById("nom_utilisateur").innerHTML =
            person;
    }
}

/* fonction affichant l'image correspondant au choix de l'utilisateur*/
function choix_utilisateur(signe) {
    if (signe == "pierre") {
        document.getElementById("signe_utilisateur").src = "rock-golem.svg";
        signeUtilisateur = "pierre";
    }
    else if (signe == "feuille") {
        document.getElementById("signe_utilisateur").src = "scroll-unfurled.svg";
        signeUtilisateur = "feuille";

    }
    else {
        document.getElementById("signe_utilisateur").src = "scissors.svg";
        signeUtilisateur = "ciseau";

    }

    
    choix_ordinateur();
    number++;
    console.log("number: " + number);
    document.getElementById("number").innerText = number;
    compare();

    console.log("Signe utilisateur : "+ signeUtilisateur);
    console.log("Signe ordinateur : "+ signeOrdinateur);
    
}

/* fonction affichant l'image correspondant au choix de l'ordinateur aléatoirement */
function choix_ordinateur() {
    random = Math.round(Math.random() * 3)
    if (random == 1) {
        console.log("pierre");
        document.getElementById("choix_ordinateur").src = "rock-golem.svg";
        signeOrdinateur = "pierre";
    }
    else if (random == 2) {
        console.log("feuille");
        document.getElementById("choix_ordinateur").src = "scroll-unfurled.svg";
        signeOrdinateur = "feuille";

    }
    else {
        console.log("ciseau");
        document.getElementById("choix_ordinateur").src = "scissors.svg";
        signeOrdinateur = "ciseau";

    }
}

/* fonction qui sert à comparé le choix de l'utilisateur et celui de l'ordinateur et permettant ensuite de faire fonctionner les led correspondants au résultats des matchs*/
function compare() {
    switch (number) {
        case 1:
            ledUtilisateur="led_Utilisateur_1";
            ledOrdinateur="led_Ordinateur_1";
            break;
        case 2:
            ledUtilisateur="led_Utilisateur_2";
            ledOrdinateur="led_Ordinateur_2";
            break;
        case 3:
            ledUtilisateur="led_Utilisateur_3";
            ledOrdinateur="led_Ordinateur_3";
            break;
    }
    if (signeUtilisateur == signeOrdinateur) {
        alert("Egalite");
        document.getElementById(ledUtilisateur).style.backgroundColor = "yellow";
        document.getElementById(ledOrdinateur).style.backgroundColor = "yellow";
    }
    else if (signeUtilisateur == "pierre" && signeOrdinateur == "ciseau" || signeUtilisateur == "feuille" && signeOrdinateur == "pierre" || signeUtilisateur == "ciseau" && signeOrdinateur == "feuille") {
        alert("Gagnant");
        document.getElementById(ledUtilisateur).style.backgroundColor = "green";
        document.getElementById(ledOrdinateur).style.backgroundColor = "red";
    }
    else {
        alert("Perdant");
        document.getElementById(ledUtilisateur).style.backgroundColor = "red";
        document.getElementById(ledOrdinateur).style.backgroundColor = "green";
    }
}