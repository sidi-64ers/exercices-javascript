class Chapitre {
    constructor(titre, texte, OuJeVeuxAjouterMesDonnees){
        this.titre = titre;
        this.texte = texte;
        this.OuJeVeuxAjouterMesDonnees = OuJeVeuxAjouterMesDonnees;
        // this.ajouteMonChaiptre();
    }
    ajouteMonChaiptre(){
        let article = document.createElement('artile');
        let titre = document.createElement('h2');

        article.textContent = this.texte;
        titre.textContent = this.titre;

        this.OuJeVeuxAjouterMesDonnees.appendChild(titre);
        this.OuJeVeuxAjouterMesDonnees.appendChild(article);
    }
}


let section = document.querySelector('section');


let requeteXhr = new XMLHttpRequest();

requeteXhr.onreadystatechange = function (){
    console.log(requeteXhr.status)
    if (requeteXhr.readyState === 4){
        let response = JSON.parse(this.response)
        let titreLivre = document.createElement('h1')
        titreLivre.textContent = response.titreLivre 
        section.appendChild(titreLivre)

    for(let i = 0; i < response.chapitres.length; i++){
        let article = new Chapitre(response.chapitres[i].titre, response.chapitres[i].texte, section);
        article.ajouteMonChaiptre();
        }
    }

}

requeteXhr.open('GET', "chapitre.json", true);
requeteXhr.send();

// fetch('chapitre.json').then((response) => {
//         response = JSON.parse(response);
//         let titreLivre = document.createElement('h1')
//         titreLivre.textContent = response.titreLivre 
//         section.appendChild(titreLivre)

//     for(let i = 0; i < response.chapitres.length; i++){
//         let article = new Chapitre(response.chapitres[i].titre, response.chapitres[i].texte, section)
//         }
// });