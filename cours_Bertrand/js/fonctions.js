console.log("fonctions");

//déclaration de fonction
function direBonjour(nom, prenom){
 //   return "Bonjour" + " " + nom + " " + prenom;
    let mess = `Bonjour ${nom} ${prenom} !`
    return mess;
}

//appel de la fonction

let message = direBonjour("Tata", "Yoyo");
console.log(message);