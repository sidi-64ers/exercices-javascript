// déclarer un tableau contenant les jours de la semaine

let semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendrdi", "samedi", "dimanche"];

// afficher tous les éléments du tableau
console.groupCollapsed("parcours du tableau avec for... of");
for (let jour of semaine){
    console.log(jour);
}
console.groupEnd();


console.groupCollapsed("parcours du tableau avec foreach");
semaine.forEach(function (jour) {
    console.log(jour);
}
);
console.groupEnd();

console.groupCollapsed("parcours dutableau avec fonction fléchée");
semaine.forEach( (jour) => {
    console.log(jour);
}
);
console.groupEnd();


console.groupCollapsed("parcours du tableau avec for...in");
for (let index in semaine) {
    console.log(semaine[index]);
}

console.groupEnd();