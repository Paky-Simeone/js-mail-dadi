// Dichiariamo le variabili/constanti
const inviaElement = document.getElementById('invia');
const emailElement = document.getElementById('email');
const controlloElement = document.getElementById('controllo');
const dadiElement = document.getElementById('dadi');

// Creiamo una lista
const lista = ['mariorossi@gmail.com', 'demetriopadre@gmail.com', 'pakysimeone@gmail.com', 'tizianonicolai@gmail.com'];

// Aggiungiamo la funzione click al bottone
inviaElement.addEventListener('click', function (){
    const mail = emailElement.value

    // Creiamo un ciclo
    for (let i = 0; i < lista.length; i++) {

        // controlliamo se la mail inserita è nella lista
        if (mail == lista[i]) {

            // Stampiamo "Sei in lista..." e il link per giocare ai dadi
            controlloElement.innerText = ("Sei in lista, congratulazioni!");
            dadiElement.innerHTML = (`<a href="../dadi/index.html">Entra pure</a>`);
            // Altro metodo perandare nella pagina del gioco dei dadi direttamente cliccando sul bottone
            // // document.location.href = '../dadi/index.html';
            break;
        }
         else{
            controlloElement.innerText = ("Ti devi ancora registrare");
         }
    }
});