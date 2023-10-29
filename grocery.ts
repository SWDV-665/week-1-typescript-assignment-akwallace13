// create a class
class Grocery {
    // declare properties and corresponding data type
    name: string;
    quantity: number;
    price: number;
    total: number;

    // add a constructor
    constructor(n: string, q: number, p: number, t: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
        this.total = t;
    }
}

// create a list of grocery items
// new keyword is used to inititalise objects
let list_of_items = [
    new Grocery("Milk", 3, 4, 13),
    new Grocery("Bread", 6, 3, 18),
    new Grocery("Eggs", 11, 5, 55)
]

// access the html element with id app
const ele = document.getElementById("app");

// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `Item: ${e.name}, Qty: ${e.quantity}, Cost Each: $${e.price}, Total: $${e.total}`;
    ele.appendChild(p);
});