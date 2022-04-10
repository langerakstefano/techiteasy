// #### Opdracht 2 - Elementen in de DOM plaatsen
//
// _Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
// een oude vertrouwde for-loop voor!
//
// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
// console.
// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.


// Opdracht 2A
let totalSold = 0;

for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold
}
console.log(totalSold);

// Opdracht 2B
const totalSoldTv = document.getElementById("totalSoldTV");

totalSoldTv.innerHTML = `<p>${totalSold}</p>`;

console.log(totalSoldTv)

//Opdracht 2C
let totalBought = 0;
for (let i = 0; i < inventory.length; i++) {
    totalBought += inventory[i].originalStock
}
console.log(totalBought)

//Opdracht 2D
const totalBoughtTv = document.getElementById("totalBought");

totalBoughtTv.innerHTML = `<p>${totalBought}</p>`;

console.log(totalBoughtTv)

//Opdracht 2E
const totalInStock = totalBought - totalSold;
console.log(totalInStock)

const totalInStockTv = document.getElementById("totalInStock");

totalInStockTv.innerHTML = ` <p> ${totalInStock}`;

console.log(totalInStockTv)
