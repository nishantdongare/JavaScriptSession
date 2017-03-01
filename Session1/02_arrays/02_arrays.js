//Array Declaration
//Short Way
var myArray = [];

//Constructor Way
var myArray = new Array();

/*
typeof []
<< "object"
*/

var pizzas = [];

pizzas[0];
<< undefined

//Adding Value to Array
pizzas[0] = "Ham & Pineapple";

pizza[1] = "Mushroom";
pizza[2] = "Spinach & Rocket";

//Adding Data at random spot
pizzas[5] = "Pineapple & Sweetcorn";

//Delete element from array
mixedArray = [null, 1, "two", true, undefined, {} ];

/*
delete pizzas[3];
<< true*/
var pizzas = ["Margherita", "Mushroom", "Chicken & Bacon"];

//Length is mutable
pizzas.length = 8

//Push,Pop,Shift,unshift
//pizzas.pop();
//pizza.push();

pizzas.shift();
pizzas.shift("Chicken & Bacon");
var element = pizzas.shift();

pizzas.concat(["Spicy Chickenn", "Chicken and Mushroom"]);

pizzas.join();
//"Margherita,Mushroom,Chicken & Bacon"

pizzas.join(" & ");



pizzas.slice(2,4) // starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included)

pizzas.splice(2, 1, "Chicken and Pepper", "Veggie Deluxe");


pizzas.reverse();

pizzas.sort();

[5, 9, 10].sort();


pizzas.indexOf("Spicy Beef");

pizzas.indexOf("Margherita");








