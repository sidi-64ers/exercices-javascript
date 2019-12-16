//déclaration

function chapitre(chap) {
    let maDiv = document.createElement("div");
    let monTitre = document.createElement("h1");
    let monParagraphe = document.createElement("p");
    monTitre.innerText = chap.titre;
    monParagraphe.innerText = chap.texte;
    maDiv.appendChild(monTitre);
    maDiv.appendChild(monParagraphe);
    document.body.appendChild(maDiv);
}

let bienvenue = {
    titre: "Bienvenue !",
    texte: "Bienvenue sur mon site! Plein de lorem ipsum",
};

let chapitre1 = {
    titre: "Chapitre 1 : un chapitre pour débuter",
    texte: "Paragraphe chapitre 2",
}

let chapitre2 = {
    titre: "Chapitre 2 : un autre chapitre",
    texte: "Paragraphe chapitre 2",
}

let chapitre3 = {
    titre: "Chapitre 3 : Encore un autre chapitre",
    texte: "Paragraphe chapitre 3",
}

//appel de la fonction
//chapitre("Bienvenue !", "Bienvenue sur mon site ! Plein de lorem ipsum...");
//chapitre("Paragraphe chapitre 1", "Chapitre 1 : un chapitre pour débuter");
//chapitre("Paragraphe chapitre 2", "Chapitre 2 : un autre chapitre");
//chapitre("Paragraphe chapitre 3", "Chapitre 3 : encore un chapitre");

chapitre(bienvenue);
chapitre(chapitre1);
chapitre(chapitre2);
chapitre(chapitre3);





// var maDiv1 = document.createElement("div");
// var monTitre1 = document.createElement("h1");
// var monParagraphe1 = document.createElement("p");
// monTitre1.innerText = "Chapitre 1 : un chapitre pour débuter";
// monParagraphe1.innerText = "Paragraphe chapitre 1";
// maDiv1.appendChild(monTitre1);
// maDiv1.appendChild(monParagraphe1);
// document.body.appendChild(maDiv1);

// var maDiv3 = document.createElement("div");
// var monTitre3 = document.createElement("h1");
// var monParagraphe3 = document.createElement("p");
// monTitre3.innerText = "Chapitre 2 : un autre chapitre";
// monParagraphe3.innerText = "Paragraphe chapitre 2";
// maDiv3.appendChild(monTitre3);
// maDiv3.appendChild(monParagraphe3);
// document.body.appendChild(maDiv3);

// var maDiv4 = document.createElement("div");
// var monTitre4 = document.createElement("h1");
// var monParagraphe4 = document.createElement("p");
// monTitre4.innerText = "Chapitre 3 : encore un chapitre";
// monParagraphe4.innerText = "Paragraphe chapitre 3";
// maDiv4.appendChild(monTitre4);
// maDiv4.appendChild(monParagraphe4);
// document.body.appendChild(maDiv4);