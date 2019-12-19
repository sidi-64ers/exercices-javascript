// Initialisation des variables dont nous aurons besoin pour calibrer notre canvas
let l = 500;
let h = 500;
let ctx2D;

// Fonction que nous pouvons déclencher pour créer une balise canvas dans la page HTML
function creeCanvas() {
    // Créer une variable canvas qui stocke un élément HTML CANVAS
    let canvas = document.createElement("canvas");
    // Avec la balise canvas, nous avons besoin du contexte. C'est lui qui reçoit les éléments interactifs.
    ctx2D = canvas.getContext("2d"); // Contexte du canvas pour dessiner les images
    canvas.width = l; // Largeur du canvas
    canvas.height = h; // Hauteur du canvas
    document.body.appendChild(canvas); // Une nouvelle balise est ajoutée au DOM HTML
    // On lance la fonction de dessin de l'image une fois que le canvas a été créé
    dessineImage('img/poire.png');
}

// Ajouter une image au canvas, l'argument src doit recevoir une chaîne de caractère représentant l'adresse de l'image à charger
function dessineImage(src) {
    let img = new Image();
    // On utilise une méthode en flat arrow éviter que le onload (asynchrone) n'ait de contexte
    img.onload = () => {
        ctx2D.drawImage(img, l / 2 - 100, h / 2 - 100);
    }
    img.src = src; // Une fois l'image créée, on lui attribue les données de l'image à charger
}
creeCanvas();