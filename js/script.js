// 1 - Palindroma
// Chiedere all'utente di inserire una parola
var parola = prompt ("Dimmi una parola!");
console.log(parola);
// Creare una funzione per capire se la parola inserita è palindroma
function palindromi (parola) {
    var parolaInversa = parola.split ("").reverse().join("");
    return parolaInversa;
}
var parolaInversa = palindromi(parola);
console.log(parolaInversa);
if (parola == parolaInversa) {
    console.log("è un palindromo");
}else {
    console.log("non è un palindromo");
}
// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.