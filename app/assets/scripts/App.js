// Kevan Rayner 2019
//
// Example File
// -------------------------------------------------------

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

import $ from 'jquery';


var mobileMenu = new MobileMenu();

//new RevealOnScroll($(".feature-item"), "85%"); //Our-features area
//new RevealOnScroll($(".testimonial"), "60%"); //Testimonials area

var stickyHeader = new StickyHeader();

var modal = new Modal();

//-------------------------------------------------------------
// Example use of classes from other files

//var $ = require('jquery');
//var Person = require('./modules/Person');
//import Person from './modules/Person';

//class Adult extends Person {
//	payTaxes() {
//		console.log(this.name + " now owes &0 in taxes.");
//	}
//}

//alert("ABC 321");

// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Adult("Jane Smith", "orange");
// jane.greet();
// jane.payTaxes();
 
// $("h1").remove();

//console.log(Person.exampleProperty);
//Person.exampleFxn();