//LOOPS
//1. for loop
for (let i=1; i<=5; i++){
    console.log(i);
}

//2. While loop
let i=1;
while(i<=5){
    console.log(i);
}


//3. do while loop
let j=6;
do{
    console.log(j);
    j++;
}
while(j<=5);


// for...of loop  :-  Used to loop through array values.
let fruits = ["apple","mango","banana"];
for(let fruit of fruits){
    console.log(fruit);
}

// for...in loop  :-  Used to loop through object keys.
let student = {name: "shushant", age:20, course: "B.tech"};
for(let key in student){
    console.log(key, student[key]);
}


// forEach()
let numbers = [1,2,3,4];
numbers.forEach(function(n){
    console.log(n);
});



//STRINGS
//1. String Length
let text = "JavaScript";
console.log(text.length);

//2. Access Characters
console.log(text[0]);
console.log(text[4]);

//3. Strings are Immutable
let str = "Hi";
str[0] = "b"; //no change
str = "Bi"; //correct

//4. Convert to Uppercase
console.log(text.toUpperCase());\

//5. Convet to LowerCase
console.log(text.toLowerCase());

//6. Remove spaces
let name = "      shushant   ";
console.log(name.trim());

//7. Extract part
let address = "house no.88 afghanistan";
console.log(address.slice(2,8));

//8. Replace text
console.log(address.replace("88","47"));

//9. check if exists
console.log(address.includes("afghanistan"))
console.log(address.includes("afghanistan", 12))

//10. Convert string to array
const words = address.split(" ");
console.log(words);

//11. String Concatination
console.log("Shushant" + " " + "Singh");

//12. String to Numbers
const pi = "3.14";
let n = Number(pi);

//13. Convert Number to String
let x = 50;
let s = x.toString();
