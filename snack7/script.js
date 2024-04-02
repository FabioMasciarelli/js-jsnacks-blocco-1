// Stampa le potenze di 2 fino a 1000.

const base = 2;
let risultato = 0;

for ( i = 0; risultato <= 1000; i++) {
    risultato = Math.pow ( base, i);
    if (risultato <= 1000) {
        console.log(risultato);
    }
};



// finchè il risultato dell'operzione non arriva a 1000
    // calcolo il risultato della prossima potenza 2^0, 2^1, 2^2 = 1 
    // se il risultato è < 1000
        //stampiamo il risultato