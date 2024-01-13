const inviaElement = document.getElementById('invia');
const emailElement = document.getElementById('email');
const controlloElement = document.getElementById('controllo');
const dadiElement = document.getElementById('dadi');

const lista = ['mariorossi@gmail.com', 'demetriopadre@gmail.com', 'pakysimeone@gmail.com', 'tizianonicolai@gmail.com'];
inviaElement.addEventListener('click', function (){
    const mail = emailElement.value
    for (let i = 0; i < lista.length; i++) {

        if (mail == lista[i]) {
            // controlloElement.innerText = ("Sei in lista, congratulazioni!");
            // dadiElement.innerHTML = (`<a href="../dadi/index.html">Entra pure</a>`);
            document.location.href = '../dadi/index.html';
            break;
        }
         else{
            controlloElement.innerText = ("Ti devi ancora registrare");
         }
    }
});