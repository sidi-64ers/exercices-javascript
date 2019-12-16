let tab = [56, 45, 2, 0, 111, 456, 45655];

console.log(tab);

console.group("parcours du tableau avec les indices")
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

//console.log("valeur de i: " + i); i is not defined

console.groupEnd(); //declare la fin du group

console.group("parcours du tableau avec for...of")
for (let elem of tab) {
    console.log(elem);

}

console.groupEnd();

console.group("parcours du tableau avec for...in")
for (let index in tab) {
    console.log(tab[index]);
}


console.groupEnd();


console.group("parcours du tableau avec foreach")
tab.forEach(function (elem) {
    console.log(elem);

});

console.groupEnd();


//Parcours du tableau avec forEach et fonction fléchée
console.group("parcours du tableau avec foreach et fonction fléchée")
tab.forEach((elem) => console.log(elem));
console.groupEnd();





