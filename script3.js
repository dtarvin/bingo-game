'use strict'

// **************** Mar 3, 2025 **********************
// **************** call stack ***********************
// console.log('This is the top of the program');

// function firstFunction() {
//     console.log('This is the first function');
//     secondFunction();
//     console.log('Back to firstFunction after secondFunction was run');
// }

// function secondFunction() {
//     console.log('This is the second function');
//     thirdFunction();
//     console.log('Back to secondFunction after thirdFunction was run');
// }

// function thirdFunction() {
//     console.log('this is the third function');
// }


// firstFunction();
// console.log('back to after firstFunction was run');

// console.log('This is the end of the program');

// console.log(product(5, 6));

// let product = (a, b) => a * b;

// ********************* hoisting ********************

// validateForm();
// validateAge();
// validateTerms();

// function validateForm() {
//     if (!isValidEmail("test@example.com")) {
//         console.log("Invalid email!");
//     }
//     if (!isValidPhone("test@example.com")) {
//         console.log("Invalid email!");
//     }
//     if (!isValidZip("test@example.com")) {
//         console.log("Invalid email!");
//     }
// }

// function isValidEmail(email) {
//     return email.includes("@");
// }

// function isValidPhone(phone) {
//     return phone.includes("-");
// }

// function isValidZip(zipCode) {
//     return email.includes("-");
// }


// function validateAge(age) {
//     if (age < 18) {
//         console.log("You are too young!");
//     }
// }


// function validateTerms(termsAgreement) {
//     if (termsAgreement = false) {
//         console.log("You must agree to the terms");
//     }
// }

// ******************* scope **************************

// var x = 10;
// console.log(`Top of program - x is ${x}`);

// function globalScope() {
//     x = 20;
//     console.log(`Inside globalScope function, x is ${x}`);
//     for (let i = 1; i < 10; i++) {
//         if (i % 3 === 0) {
//             x = i;
//             console.log(`Inside if block, x is ${x}`);
//             break;
//         }
//     }
//     console.log(`Inside function after for loop, x is ${x}`);
// }

// console.log(`Outside of function, x is ${x}`);

// globalScope();

// console.log(`After calling function, x is ${x}`);

// function functionScope() {
//     var a = 10;
//     if (a === 10) {
//         var b = 20;
//         if (b === 20) {
//             var c = 30;
//         }
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(functionScope());
// console.log(a);

// {
//     let x = 10;
// }
// console.log(x);

// function blockScope() {
//     let c = 10;
//     if (c === 10) {
//         let d = 40;
//         console.log(d); // 40
//     }
//     console.log(d);
// }
// blockScope();

// function blockScopeTwo() {
//     let a = 10;

//     if (a === 10) {
//         let b = 20;

//         if (b === 20) {
//             let c = 30;

//         }

//     }


// }
// blockScopeTwo();
// console.log(a);
// console.log(b);
// console.log(c);

// let x = 10;
// console.log(`Top of program, x is ${x}`);
// function levelsOfScope() {
//     let x = 20;
//     console.log(`Inside globalScope function, x is ${x}`);
//     for (let i = 1; i < 10; i++) {
//         if (i % 3 === 0) {
//             let x = i;
//             console.log(`Inside if block, x is ${x}`);
//             break;
//         }
//     }
//     console.log(`Inside function after for loop, x is ${x}`);
// }
// levelsOfScope();
// console.log(`After calling function, x is ${x}`);

// const MAXIMUM = 6;
// const maximum = 5;
// console.log(MAXIMUM);
// console.log(maximum);

// // Boolean()
// // Symbol()
// // BigInt('75');
// // String()
// // Number()
// let str = "bob";
// let cappedStr = str.toUpperCase(str);
// console.log(cappedStr);

// let number = 2 ** 3;
// console.log(number);
// let a = 5;
// a **= 3; // a = a ** 3

// a = a + (a **= 3);
// console.log(a);

// let apple;
// let fruit = apple ?? 'banana';
// console.log(fruit);
// let isSent = false;
// let sentStatus = isSent ?? 'Was sent';
// console.log(sentStatus);

// const employees = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         contact: {
//             email: {
//                 primaryEmail: 'jdoe@gmail.com',
//                 secondaryEmail: 'john.doe@icloud.com'
//             }
//         }
//     },
//     {
//         firstName: 'Bill',
//         lastName: 'Nye',
//         contact: {
//             phoneNumber: '217-562-4568'
//         }
//     }
// ]

// for (let i = 0; i < employees.length; i++) {
//     console.log(`${employees[i].firstName}'s email info: ${employees[i].contact.email?.primaryEmail}`);
//     console.log(`${employees[i].firstName}'s phone number info: ${employees[i].contact.phoneNumber}`);
// }

// const sarah = {
//     firstName: "Sarah Jane",
//     lastName: "Riley"
// }
// sarah.lastName ||= 'Smith'
// console.log(sarah.firstName + ' ' + sarah.lastName);

// console.log("phone" in sarah);
// console.log("lastName" in sarah);

// for (let i = 1; i <= 10; i++) {
//     if (i == 4) {
//         break;
//     }
//     console.log(i);
// }

// for (let j = 1; j <= 10; j++) {
//     if (j == 4) {
//         continue;
//     }
//     console.log(j);
// }

// const jeffsAge = 28;
// if (jeffsAge > 21) {
//     console.log('You can drink!');
// }
// if (jeffsAge > 18) {
//     console.log('You can vote!');
// }

// function checkIsSent(isSent) {
//     if (isSent) {
//         return "It was sent";
//     } 
//     return null;
// }

// function createUser(username, email, password = 'admin') {
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     }
//     return user;
// }
// const john = createUser('John Doe', 'jdoe@gmail.com', 'secret');
// console.log(john);
// const jim = createUser('Jim Jones', 'jimjones@icloud.com');
// console.log(jim);

// function calculateTwoNumbers() {
//     const a = 3;
//     const b = 6;
//     return function addTwoNumbers() {
//         console.log(`${a} + ${b} = ${a + b}`);
//     }
// }
// const answer = calculateTwoNumbers();
// // const answer = function addTwoNumbers() { console.log(`${a} and ${b}`); }

// answer();

// function createCounter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         }
//     };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();
// count++;

// function returnPlusTwo(num) {
//     let sum = num + 2;
//     return () => sum;
// }
// let threePlusTwo = returnPlusTwo(3);
// let fivePlusTwo = returnPlusTwo(5);
// console.log(threePlusTwo());
// console.log(fivePlusTwo());

// function multiplier(factor) {
//     return function (number) {
//         return number * factor;
//     }
// }
// let twice = multiplier(2);
// console.log(twice(5));

// let twice = function (number) { return number * 2 };
// twice(5);

// function greetingGenerator(greeting) {
//     return function (name) {
//         console.log(`${greeting}, ${name}!`);
//     }
// }

// const sayHello = greetingGenerator("Hello");
// const sayHola = greetingGenerator("Hola");

// sayHello("Chris");
// sayHola("Alice");

// var x = 5;

// const changeX = () => {
//     var x = 6;
//     if (true) {
//         let x = 7;
//     } else {
//         let x = 9;
//     }
//     return x;
// }
// x = changeX();
// console.log(x);

// setTimeout(() => {
//     console.log('Delayed for 5 seconds');
// },
//     5000);

// const cars = ['Audi', 'Bentley', 'Cadillac', 'Chevy', 'Chrysler', 'Dodge', 'Ford', 'Hyundai'];

// for (let i = 0; i < cars.length; i++);

// 

// function returnPlusTwo(n) {
//     // let sum = n + 2;
//     // return sum;
//     return n + 2;
// }

// const theSum = returnPlusTwo(3);
// console.log(theSum);

// function multiplier(factor) {
//     return (number) => number * factor;
// }

// const result = multiplier(3);
// const endResult = result(5);
// console.log(result);
// console.log(endResult);

// function multiplier(factor) {
//     return (number) => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));

// Customer Details
// Policy Information
// ***Name
// ***Policy Number
// ***Address
// ***Effective Date
// Customer Alerts
// ***Any Alerts on the account
// Policies
// ***List of all Policies
// Riders on Demand
// ***List of Available Riders for customer to purchase
// Recurring Summary
// ***List of all recurring automatic payments

// ******* No recurring payments available
// ******* No Customer Alerts available
// ******* Unable to Process Request
// ******* Unable to Complete Purchase

// Error warnings show up in red
// Info warnings show up in ble

// function createLogger(prefix) {
//     return function (message) {
//         console.log(`[${prefix}] ${message}`);
//     }
// }

// // create Specific Loggers
// const infoLogger = createLogger("INFO");
// const warnLogger = createLogger("WARN");
// const errorLogger = createLogger("ERROR");

// // use them
// // call to recurring summary comes back empty
// infoLogger('No recurring payments available.');
// infoLogger('No customer alerts available');
// errorLogger('Unable to process request');
// // attempt to purchase rider fails
// errorLogger('Unable to purchase rider');


// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str);
// const newStr = str.toUpperCase();
// console.log(newStr);
// substring - one or two numbers
// first number - index at which to start (indices start at 0, not 1)
// second number (optional) - index at which to end
// the substring created does not include the character at the index matching 
// the second number
// const partOfString = str.substring(2, 9); // characters 2 through 8 - exclusive of second index
// console.log(partOfString);
// const anotherPartOfString = str.slice(3, 8); // chars 3 through 7
// console.log(anotherPartOfString);
// const stillSomeOfString = str.slice(-6, -1);
// console.log(stillSomeOfString);
// const yetMoreOfString = str.substring(-6, -1);
// console.log(yetMoreOfString);


// const str = 'Boy are my arms tired!';
// const locationOfA = str.indexOf('a');
// console.log(locationOfA);
// const locOfAFromEnd = str.lastIndexOf('a');
// console.log(locOfAFromEnd);

// const punchline = '   Sails are through the roof!   ';
// console.log(punchline + '!');
// const trimmedPunchline = punchline.trim();
// console.log(trimmedPunchline + '!');
// const punchlineArray = trimmedPunchline.split(" ");
// console.log(punchlineArray);
// const joinedPunchline = punchlineArray.join(' ');
// console.log(joinedPunchline);
// const lowerCasePunchline = punchline.trim().toLowerCase();
// console.log(lowerCasePunchline);

// const changedPunchline = punchline.replace('Sails', 'Sales');
// console.log(changedPunchline);

// const mood = 'Happy!';
// const elatedMood = mood.repeat(3);
// console.log(elatedMood);

const time = '5:36 AM';
const militaryTime = time.substring(0, 4).replace(':', '').padStart(4, "0");
console.log(militaryTime);

console.log(`the character code at index 5 (A) is ${time.charCodeAt(5)}`);