// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// var parola = prompt ("Dimmi una parola!");
// console.log(parola);
// Creare una funzione per capire se la parola inserita è palindroma
// function palindromi (parola) {
//     var parolaInversa = parola.split("").reverse().join("");
//     return parolaInversa;
// }
// var parolaInversa = palindromi(parola);
// console.log(parolaInversa);
// if (parola == parolaInversa) {
//     console.log("è un palindromo");
// }else {
//     console.log("non è un palindromo");
// }




// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
do {
    var userNumber = parseInt(prompt("Dammi un numero da 1 a 5!"));
} while (userNumber < 1 || userNumber > 5) {
} ;
do {
    var evenOdd = (prompt ("Even or Odd!").toUpperCase());
    console.log(evenOdd);
} while (evenOdd != "EVEN" && evenOdd != "ODD") {
} ;
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function RandomNumber (min, max){
    var number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return number;
}

var pcNumber = RandomNumber (1,5);
console.log("Pc Number " + pcNumber + " User Number " + userNumber);

// Sommiamo i due numeri

var sum = pcNumber + userNumber;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function even (sum) {

    if (sum % 2 == 0 ) {
        var result = true;
    }
    return result;
}

var result = even(sum);

if (result == true && evenOdd == "EVEN" ) {
    console.log("Win!");
}else {
    console.log(("Game over!"));
}
// Dichiariamo chi ha vinto.

