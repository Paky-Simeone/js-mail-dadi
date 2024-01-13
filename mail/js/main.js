const inviaElement = document.getElementById('invia');
const emailElement = document.getElementById('email');
const controlloElement = document.getElementById('controllo');

const lista = ['mariorossi@gmail.com', 'demetriopadre@gmail.com', 'pakysimeone@gmail.com', 'tizianonicolai@gmail.com'];
inviaElement.addEventListener('click', function (){
    const mail = emailElement.value
    for (let i = 0; i < lista.length; i++) {

        if (mail == lista[i]) {
            controlloElement.innerText = ("Sei in lista, congratulazioni!");
            break;
        }
         else{
             controlloElement.innerText = ("Non sei in lista, mi dispiace!");
         }
    }
});