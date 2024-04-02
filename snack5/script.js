// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// creiamo un array vuoto

const array =[];

// chiediamo per 6 volte all'utente 6 volte di inserire un numero
// creiamo la condizione per cui se è dispari lo inseriamo nell'array precdentemente creato

for (i = 0; i < 6 ; i++) {
    
    const num = prompt("inserisci un numero");

    if (num % 2 === 1) {
        array.push(num);
    }
}

console.log(array);