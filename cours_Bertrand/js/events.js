console.log("events");

let btnClick = document.getElementById("btnClick");
let inputTest = document.getElementById("inputTest")
console.dir(btnClick);

btnClick.addEventListener('click', function(){
    
    alert("OKAY");
}
);

inputTest.addEventListener('keyup', (e) => {
    console.log(e.target.value);
});


document.body.addEventListener('mousemove', (e) => {
    console.log("X = ", e.clientX, "Y = ", e.clientY);
    
});