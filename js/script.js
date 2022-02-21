let userAge = prompt("Quanti anni hai?");

while (isNaN(userAge) || userAge === '') {
	userAge = prompt("Per favore, inserisci un numero per indicare la tua età.");
}

while (userAge <= 0) {
	userAge = prompt("Per favore, inserisci un numero maggiore di 0.");
}

let km = prompt("Quanti km devi percorrere?");

while (isNaN(km) || km === '') {
	km = prompt("Per favore, inserisci un numero per indicare la distanza che vuoi percorrere in kilometri.");
}

while (km <= 0) {
	km = prompt("Per favore, inserisci un numero maggiore di 0.");
}

const priceAtKm = 0.21;
let price = (priceAtKm * km);

let discount = 0;
let discountType;

if (userAge >= 65) {
	discount = 0.4;
	discountType= 'pensionati'
} else if (userAge < 18) {
	discount = 0.2;
	discountType= 'minorenni'
} else {
	discount = 0;
}

let discounted = (price * discount);

let finalPrice = (price - discounted).toFixed(2);

const myOutput = document.getElementById("my-output");

myOutput.innerHTML = `Hai scelto di viaggiare per ${km} km. Il prezzo del tuo biglietto è: <strong>${finalPrice} €</strong>`;

if (userAge >= 18  && userAge < 65 ) {

} else {
	myOutput.innerHTML += `<div>Il prezzo iniziale era di <span style="text-decoration: line-through;">${price.toFixed(2)} €</span>.	Grazie allo sconto ${discountType} hai risparmiato <em style="color:red;">${discounted.toFixed(2)} €</em></div>`;
}
