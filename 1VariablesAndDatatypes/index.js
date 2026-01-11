// Console.log is used to log (print) a message to the console 
console.log("hello world");

// DATATYPES

//primitive(sr=tores actual value in stack memory) :- primitve values are immutable and represent single, simple values. There are seven primitive types:
console.log(typeof "Helloe, world!");  //String
console.log(typeof 42);  // number
console.log(typeof true);  // boolean
console.log(typeof undefined); //undefined
console.log(typeof Symbol()); //symbol
console.log(typeof 123n);  // bigint
console.log(typeof null); // object

//non-primitive/reference(store address and heap memory) data type
console.log(typeof {}); // object
console.log(typeof []); // object
 

//VARIABLES
//  var :- variable can be re-declared and updated. A global scope variable.
//  let :- variable cannot be re-declared but can be updated. A block scope variable.
//  const :- variable cannot be re-declared or updated. A block scope variable.

var age = 12;
var age = 24;
var age = 22;
console.log(age);

let name = "shushant";
name = "suraj";
console.log(name);

const myName = "suraj";
// myName = "shushant";   we can not reassign  or redeclare with const
console.log(myName);

let a = 10;
{
    a = 15;
    console.log(a); // 15;
}
console.log(a); // 15

//OBJECT
let obj = {
    name:"shushant",
    age:20,
    gender:"M"
}
console.log(obj["name"]);
console.log(obj.age);

// TRUTHY and FALSY values
//1. false values   false, 0, -0, "", null, undefined, NaN
//2. truth values   true, "non-empty string", 1(any number except 0), [] both empty and non empty array, {} both empty and non empty object, function(){}


