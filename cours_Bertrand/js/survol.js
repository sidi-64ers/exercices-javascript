// document.querySelector("h1").onmouseenter = function(){
// 	this.style.color = "red";
// };
// document.querySelector("h1").onmouseleave = function(){
// 	this.style.color = "black";
// };

// document.querySelector("body").style.display = "flex";
// document.querySelector("body").style.justifyContent = "center";
// document.querySelector("body").style.alignItems = "center";



// let title = document.querySelector("h1");
    
//     title.onmouseenter = function(){
//     this.style.color = "red";}
    
//     title.onmouseleave = function(){
//     this.style.color = "black";
// }    


// document.querySelector("h1").onclick = function (){
//     this.animate([
//         // keyframes
//     { transform: 'translateY(0px)' }, 
//     { transform: 'translateY(-300px)' }
//   ], { 
//     // timing options
//     duration: 2000,
//     iterations: Infinity
//   });

// }

// EX 6
// Uniquement en Javascript, créez 2 paragraphes contenant du texte.
// Stockez les 2 éléments dans des variables.
// Ajoutez de la mise en forme aux paragraphes : marges, bordures...


let monP1 = document.createElement('p');
monP1.innerHTML = 'mon premier paragraphe';

let article = document.querySelector('article');
 article.appendChild(monP1);

 let monP2 = document.createElement('p');
monP2.innerHTML = 'mon second paragraphe';

article.appendChild(monP2);

article.style.display = "flex";
article.style.flexDirection = "column";
article.style.alignItems = "center";
article.style.justifyContent = "center";

monP1.style.border = "3px dotted brown";
monP1.style.padding = "5px";
// monP1.style.marginLeft = "auto";
// monP1.style.marginRight = "auto";

monP2.style.border = "3px dotted brown";
monP2.style.padding = "5px";
// monP2.style.marginLeft = "auto";
// monP2.style.marginRight = "auto";







