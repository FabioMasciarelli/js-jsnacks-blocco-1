// JSnack 9
// Calcola la somma e la media dei primi 10 numeri.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let add = 0;
let media = 0;

for ( i = 0; i < array.length ; i++) {
    add += array[i];
    console.log(add);

    media = add / 10;
    
}