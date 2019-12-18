                                //ex1:

//document.getElementById("titre").style.color="brown";
//document.getElementById("btnClick").style.color="purple";


//document.querySelector("p").style.margin = "auto";
//document.querySelector("p").style.backgroundColor = "yellow";


// let texteB = document.createElement("texteB");
// texteB.innerHTML = "Ipsum";
// document.body.appendChild(texteB);


// //inversion texte

// let btnClick = document.getElementById('btnClick').textContent;
// let texteA = document.getElementById('texteA').textContent;

// document.getElementById('btnClick').textContent = texteA;
// document.getElementById('texteA').textContent = btnClick;



                                //Ex2:


// let div1 = document.createElement('div');
// div1.innerHTML = '1ère div';

// let body = document.querySelector('body');
// body.appendChild(div1);

// let div2 = document.createElement('div');
// div2.innerHTML = '2ème div';

// body.appendChild(div2);

// let div3 = document.createElement('div');
// div3.innerHTML = '3ème div';
// body.appendChild(div3);


// //style des 3 div
// let divElements = document.querySelectorAll('div');
// let bodyElement = document.querySelector('body')
// bodyElement.style.display = "flex";
// bodyElement.style.justifyContent = "center";
// bodyElement.style.alignItems = "center";

// divElements[0].style.background = "green";
// divElements[1].style.background = "yellow";
// divElements[2].style.background = "red";



                                    //Ex3:


// let maDiv = document.createElement('div');
// maDiv.innerHTML = 'Coucou';
// let body = document.querySelector('body');
// body.appendChild(maDiv);

// maDiv.className = "maClasse";


                                //Ex5:

let maPhoto = document.querySelector("img");
let monImage = ("src", "img/6.jpg");
console.log(maPhoto.src);
console.log(monImage);

maPhoto.addEventListener('click', function(){
    maPhoto.setAttribute("src", "img/promoSimplon_20191206.jpg");
});

maPhoto.onclick =  function() {
    maPhoto.setAttribute("src", "img/promoSimplon_20191206.jpg");
};

monImage.onclick = function() {
    maPhoto.style.display = "none";
    monImage.style.display = "block";
};

