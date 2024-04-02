// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// chiediamo 10 numeri all'utente

let ask = 0;
let result = 0;

for (i = 0; i < 10; i++) {
    ask = parseInt(prompt("dimmi un numero"));

    result += ask;

    console.log(result);
}

