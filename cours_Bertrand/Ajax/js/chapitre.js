class Chapitre {
    constructor(titre, texte){
        this.titre = titre;
        this.texte = texte;
        // this.ajouteMonChaiptre();
    }
    afficher(){
        let section = document.querySelector("section");
        let article = document.createElement('artile');
        let titre = document.createElement('h2');
        let paragraphe = document.createElement('p');
        paragraphe.textContent = this.texte;
        titre.textContent = this.titre;

        article.appendChild(titre);
        article.appendChild(paragraphe);
        section.appendChild(article);

    }
}

