let userAge = prompt("Quanti anni hai?");
let km = prompt("Quanti km devi percorrere?");

const priceAtKm = 0.21;
let price = (priceAtKm * km);

let discount = 0;

if (userAge >= 65) {
	discount = 0.4;
} else if (userAge < 18) {
	discount = 0.2;
} else {
	discount = 0;
}

let discounted = (price * discount);

let finalPrice = (price - discounted).toFixed(2);

let myOutput = document.getElementById("my-output");

myOutput.innerHTML = `Il prezzo del tuo biglietto è: ${finalPrice} €`;

if (userAge >= 18  && userAge < 65 ) {

} else {
	myOutput.innerHTML += ` <div> Grazie allo sconto hai risparmiato ${discounted.toFixed(2)} € </div>`;
}
