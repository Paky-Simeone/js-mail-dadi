const resultCPU = document.getElementById('risultato-cpu');
const resultUser = document.getElementById('risultato-utente');
const resultTotal = document.getElementById('risultato-totale');
const gioca = document.getElementById('bottone');
// const annullo = document.getElementById('resetto');

// Generare un numero da 1 a 6 per l'utente
let randomUtente = Math.floor(Math.random() * 6 + 1);
resultUser.innerText = `il numero dell'utente è ` + randomUtente;

// Generare un numero da 1 a 6 per la cpu
let randomCPU = Math.floor(Math.random() * 6 + 1);
resultCPU.innerText = `il numero della cpu è ` + randomCPU;

gioca.addEventListener('click', function(){

    if(randomUtente > randomCPU){
        resultTotal.innerText = `L'uomo batte la macchina`
    }
    else if(randomCPU > randomUtente){
        resultTotal.innerText = `La macchina batte l'uomo`
    }
    else if(randomUtente == randomCPU || randomCPU == randomUtente){
        resultTotal.innerText = `Purtroppo siamo pari`
    }
    // resultCPU.classList.remove('d-none');
    // resultUser.classList.remove('d-none');
    // resultTotal.classList.remove('d-none');
})

// annullo.addEventListener('click', function(){
//     resultCPU.classList.add('d-none');
//     resultUser.classList.add('d-none');
//     resultTotal.classList.add('d-none');
// })