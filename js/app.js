let tempsTravail = 1500;
let tempsPause = 300;
let tempsPauseProlongee = 1500;

let chronometre = document.getElementById("chronometre")

function compteARebours() {
    let minutes = parseInt(tempsTravail / 60,10)
    let secondes = parseInt(tempsTravail % 60,10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    chronometre.innerText = minutes + ":" + secondes
    tempsTravail = tempsTravail - 1
}

let boutonDemmarrer = document.getElementById("demarrer")
boutonDemmarrer.addEventListener('click', () => {
    setInterval(compteARebours(),1000)
})

let boutonRecommencer = document.getElementById("recommencer")
boutonRecommencer.addEventListener('click', () => {
    location.reload();
})