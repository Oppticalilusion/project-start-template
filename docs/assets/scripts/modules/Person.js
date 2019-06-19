// Kevan Rayner 2019
//
// Example File
// Creates a class and uses parts of it in a basic example

class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}

 	greet() {
 		console.log("Hello there..., " + this.name +
 		 ". I like the color " + this.favoriteColor + ".");
	}
}
 
//export default Person;
module.exports = Person;

/* 
function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello there, " + this.name);
	}
}
*/

//--------------------------------------------
//console.log("Hello from Person.js");
//exports.exampleProperty = "Super value";
//exports.exampleFxn = function() {
//	alert("FREAK OUT");
//}

// --------------------------------------------------------------------------------

//function person(name, favColor) {
//	console.log("Hello There, " + name + ". I like the color " + favColor + ".");
//}

//var john = {
//	name: "John Doe",
//	favouriteColor: "blue",
//	greet: function() {
//		console.log("Hello There," + john.name + ". I like the color " + john.favouriteColor + ".");
//	}
//}

//john.greet();

//person(john.name, john.favouriteColor);
//person("Jane Smith", "green");