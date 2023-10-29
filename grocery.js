// create a class
var Grocery = /** @class */ (function () {
    // add a constructor
    function Grocery(n, q, p, t) {
        this.name = n;
        this.quantity = q;
        this.price = p;
        this.total = t;
    }
    return Grocery;
}());
// create a list of grocery items
// new keyword is used to inititalise objects
var list_of_items = [
    new Grocery("Milk", 3, 4, 13),
    new Grocery("Bread", 6, 3, 18),
    new Grocery("Eggs", 11, 5, 55)
];
// access the html element with id app
var ele = document.getElementById("app");
// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "Item: ".concat(e.name, ", Qty: ").concat(e.quantity, ", Cost Each: $").concat(e.price, ", Total: $").concat(e.total);
    ele.appendChild(p);
});
