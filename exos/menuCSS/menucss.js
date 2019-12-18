let menu = document.querySelectorAll('nav > ul > li');
console.log(menu)

for (let elmt of menu) {
    elmt.addEventListener("click", function () {

        let lien = elmt.children[1]
       
        if (lien.style.visibility === "visible") {
            lien.style.visibility = "hidden"
            lien.style.opacity = 0
        } 
        
        else {
            lien.style.visibility = "visible"
            lien.style.opacity = 1;
        }
    })
console.log(elmt.children[1]) 
}
