// Déclaration des variables
let tempsTravail = 1500;
let tempsPause = 300;
let tempsPauseProlongee = 1500;
let chronometre = document.getElementById("chronometre")
let phaseTravail = document.getElementById("travail")
let phasePause = document.getElementById("pause")
let phase = 1;
let tempsPhase = 0;

// Fonction de changement de phase travail/pause
function gererPhase () {
    if(phase % 2 == 1) {
        phaseTravail.style.display = "block"
        phasePause.style.display = "none"
    } else {
        phaseTravail.style.display = "none"
        phasePause.style.display = "block"
    }
}

// Fonction de changement de temps de phase travail/pause
function gererTempsPhase () {
    if(phase % 2 == 1) {
        tempsPhase = tempsTravail
    } else {
        tempsPhase = tempsPause
    }
}

// Fonction de décompte
function compteARebours() {
    gererPhase()
    let minutes = parseInt(tempsPhase / 60,10)
    let secondes = parseInt(tempsPhase % 60,10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    chronometre.innerText = minutes + ":" + secondes
    tempsPhase = tempsPhase <= 0 ? 0 : tempsPhase - 1
    if(tempsPhase == 0) {
        phase ++;
        gererTempsPhase()
    }  
}

// Déclaration et ajout de la fonction du bouton "Démarrer"
let boutonDemmarrer = document.getElementById("demarrer")
boutonDemmarrer.addEventListener('click', () => {
    gererTempsPhase()
    boutonRecommencer.style.display="block"
    boutonDemmarrer.style.display = "none"
    setInterval(compteARebours,1000)
})

// Déclaration et ajout de la fonction du bouton "Recommencer"
let boutonRecommencer = document.getElementById("recommencer")
boutonRecommencer.style.display="none"
boutonRecommencer.addEventListener('click', () => {
    location.reload();
})