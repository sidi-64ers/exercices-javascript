let bouton = document.getElementById("bouton");
bouton.addEventListener('click', () => {
    afficherChapitres()
});

function afficherChapitres(){


let xhr = new XMLHttpRequest();


// destination de la requete ajax
xhr.open('GET', 'datas/datas.php', true);
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
    let section = document.querySelector("section");
    section.innerHTML = "";
    let chapitresJson = xhr.response;
    chapitresJson.forEach(element => {
        let chapitre = new Chapitre(element.titre, element.texte );
        chapitre.afficher();
    });
});

xhr.send();
}








// function chapitre(chap) {
//     let maDiv = document.createElement("div");
//     let monTitre = document.createElement("h1");
//     let monParagraphe = document.createElement("p");
//     monTitre.innerText = chap.titre;
//     monParagraphe.innerText = chap.texte;
//     maDiv.appendChild(monTitre);
//     maDiv.appendChild(monParagraphe);
//     document.body.appendChild(maDiv);
// }






console.log("Fin du fichier");
