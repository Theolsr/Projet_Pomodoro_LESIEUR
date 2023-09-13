let minutesTravail=25;
let minutesPause = 5;
let secondes=0;

function CompteARebours() {
    while(minutesTravail >= 1 && secondes >= 0) {
        secondes = 59;
        console.log(secondes)
        for(let i = secondes; i > 0; i--) {
            secondes = secondes - 1;
            console.log("Secondes :" + secondes);
        if(secondes == 0) {
            minutesTravail = minutesTravail -1;
            console.log("Minutes :" + minutesTravail);
            secondes = 59;
            }
        
        }

    }
}
CompteARebours()