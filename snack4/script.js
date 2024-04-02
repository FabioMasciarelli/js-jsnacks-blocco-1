// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.

const array = ["pippo", "pluto", "topolino"]

// chiediamo all'user il suo nome

const username = prompt("qual'è il tuo nome?");

// dichiariamo una variabile di appoggio
let flag = false;

for (i = 0; i < array.length; i++ ) {

    if (username === array[i]) {
        flag = true;
    } 
}

let outputMessage="";

if (flag === true) {
    outputMessage = `sei invitato!`;
} else if (flag === false) {
    outputMessage = `non sei stato invitato`;
}

const result = document.querySelector(".result");

result.innerHTML = outputMessage;
