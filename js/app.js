let tempsTravail = 1500;
let tempsPause = 300;
let tempsPauseProlongee = 1500;

let chronometre = document.getElementById("chronometre").textContent = tempsTravail

function comteARebours() {
    chronometre.innerText = tempsTravail
    tempsTravail--
    console.log(tempsTravail, chronometre)
}
setInterval(comteARebours(),1000)
