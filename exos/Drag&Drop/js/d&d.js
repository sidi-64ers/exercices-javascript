// eviter que javascript fasse réagir le navigateur

function allowDrop(ev) {
    ev.preventDefault();
}
// Attrapper un objet
function drag(ev) {
    console.log(ev);
    console.log("drag start : ", ev.target.id);
    ev.dataTransfer.setData("text", ev.target.id);
}
// Lacher l'objet dragué
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}