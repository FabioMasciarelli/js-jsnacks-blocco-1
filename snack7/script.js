// Stampa le potenze di 2 fino a 1000.

const base = 2;
let risultato = 0;

for ( i = 0; risultato <= 1000; i++) {
    risultato = Math.pow ( base, i);
    if (risultato <= 1000) {
        console.log(risultato);
    }
};


