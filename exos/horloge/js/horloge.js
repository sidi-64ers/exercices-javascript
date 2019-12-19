let secondes = 0;
let minutes = 0;
let heures = 0;

let toutePetiteAiguille = document.querySelector("#secondes");
let petiteAguille = document.querySelector("#minutes");
let grandeAiguille = document.querySelector("#heures");



function chrono(){
    secondes ++;
    toutePetiteAiguille.style.transform = 'rotate('+secondes*6+'deg)';

    if(secondes % 60 == 0){
        minutes ++;
        petiteAguille.style.transform = 'rotate('+minutes*6+'deg)';
    }
    if(secondes % 360 == 0){
        heures++;
        grandeAiguille.style.transform = 'rotate('+heures*6+'deg)';
    }
}

let interval = setInterval(chrono, 1000);