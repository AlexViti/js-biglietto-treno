let userAge = prompt("Quanti anni hai?");
let km = prompt("Quanti km devi percorrere?");

const priceAtKm = 0.21;
let price = (priceAtKm * km);

let discount = 0;

if (userAge > 40) {
	discount = 0.4;
} else if (userAge < 20) {
	discount = 0.2;
} else {
	discount = 0;21

}

let discounted = (price * discount);

let finalPrice = (price - discounted).toFixed(2);

document.getElementById("my_output").innerHTML = `Il prezzo del tuo biglietto è: ${finalPrice}` €;