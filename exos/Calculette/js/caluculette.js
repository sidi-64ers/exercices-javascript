// Récupérer tous les articles dans la section
let calculette = document.querySelectorAll("article");
let Resultat = document.querySelector("h1");
// Les cases
calculette.forEach(clic);
function clic(touche, index){
    touche.onclick = function(){
        // Traitement du texte de la calculatrice pour évaluer les opérations à mener
        if(this.innerText == "="){
            calculResultat(Resultat.innerText);
        }else if(this.innerText == "CE"){
            init();
        }else
            Resultat.innerText += this.innerText;
        }
}
// Fonction d'initialisation pour annuler tout
function init(){
    Resultat.innerText = "";
}

// Fonction de calcul des résultats
function calculResultat(val){
    Resultat.innerText += "="+eval(val);
}
// Gestion du clavier
addEventListener("keydown", function(e){
    // Test sur la touche majuscule enfoncée
    if(e.shiftKey){
        // On valide qu'il s'agit bien des bonnes touches avec les keycodes
        if (e.keyCode >=48 && e.keyCode <= 57 || e.keyCode == 187 || e.keyCode == 191){
            Resultat.innerText += e.key; // ajout des valeurs dans le champ de calcul
            console.log(e.currentTarget);
        }
    }else if(e.keyCode == 187){
        calculResultat(Resultat.innerText); // Lancement des résultats avec la touche =
    }else if(e.keyCode == 54 || e.keyCode == 220){
        Resultat.innerText += e.key;
    }
})
