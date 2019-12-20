class Fromage {
    constructor(nom, type, pays, classement){
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
        this.afficher() 
        // this.classementStars // thisclassementStars n'a pas besoin d'être rensigné dans le constructeur car il est créé à la volée
        // appel de la fonction dès q'un objet Fromage est crée
        // this.ajouteMonChaiptre();
    }
    afficher(){
        let section = document.querySelector("section");
        let article = document.createElement('article');
        let nomFromage = document.createElement('h2');
        let maDiv = document.createElement('div');
        let typeFromage = document.createElement('p');
        let pays = document.createElement('p');
        this.classementStars = document.createElement('p'); // Je crée une variable global à l'objet à la volée avec "this.laVariable" car JS est un language dynamique, pas besoin de le mettre dans le constructeur. Cette variable sera accessible dans toutes les méthodes de l'objet
        this.etoile()
        nomFromage.textContent = this.nom;
        typeFromage.textContent = this.type;
        pays.textContent = this.pays;
        // classement.textContent = this.classement;
        
        
        section.appendChild(article);
        article.appendChild(nomFromage);
        article.appendChild(maDiv)
        maDiv.appendChild(typeFromage);
        maDiv.appendChild(pays);
        article.appendChild(this.classementStars)
        
    }
    etoile(){
        for (let i = 0; i < this.classement; i++) {
            let stars = document.createElement('img')
            stars.src = './js/etoile.png'
            this.classementStars.appendChild(stars)
            stars.style.width = '2vw'
        }
        
    }
}
