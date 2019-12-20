



    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'js/fromages.json', true);
    xhr.responseType = 'json';

    xhr.addEventListener('load', function(){
        let fromagesJson = xhr.response;
        console.log(xhr.response);
        fromagesJson.forEach(element => {
        let fromage = new Fromage(element.nom, element.type, element.pays, element.classement);
            // fromage.afficher(); Si pas déclaré dans le constructeur avec this.afficher(), obligé de l'appelé ici
        });
    });
    
    xhr.send();
    




