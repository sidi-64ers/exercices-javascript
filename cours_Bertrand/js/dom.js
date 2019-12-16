console.log("dom");


let main = document.createElement('main');

//main.innerHTML = "Toto est content";

//document.body.appendChild(main);

let h1 = document.querySelector('h1');

h1.after(main);

let section = document.createElement('section');
main.appendChild(section);



console.log(main);
console.dir(main);