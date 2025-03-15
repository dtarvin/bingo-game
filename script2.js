// Homework answers

// function getTicketPrice(age) {
//     alert(`You have put your age as ${age}`);
//     let ticketPrice = 0;
//     if (age <= 0) {
//         alert('That is not a valid age');
//     }
//     if (age < 12) {
//         ticketPrice = 5;
//     } else if (age < 18) {
//         ticketPrice = 10;
//     } else if (age < 60) {
//         ticketPrice = 20;
//     } else {
//         ticketPrice = 15;
//     }
//     alert(`Your ticket price is ${ticketPrice}`);
// }

// getTicketPrice(60);

// alert('Good job!');

// function getBingoLetter(bingoBall) {
//     let bingoBallLetter;
//     alert(`The ball number drawn is ${bingoBall}`);
//     if (bingoBall <= 0 || bingoBall > 75 || typeof bingoBall != "number") {
//         alert(`That is not a valid bingo ball number`);
//     } else {
//         if (bingoBall <= 15) {
//             bingoBallLetter = 'B';
//         }
//         else if (bingoBall <= 30) {
//             bingoBallLetter = 'I';
//         }
//         else if (bingoBall <= 45) {
//             bingoBallLetter = 'N';
//         }
//         else if (bingoBall <= 60) {
//             bingoBallLetter = 'G';
//         }
//         else {
//             bingoBallLetter = 'O';
//         }
//         alert(`That number is in the ${bingoBallLetter} column.`);
//     }
//     alert('You got this!');
// }

// getBingoLetter(-3);
// getBingoLetter(0);
// getBingoLetter(2);
// getBingoLetter(15);
// getBingoLetter(28);
// getBingoLetter(30);
// getBingoLetter(36);
// getBingoLetter(45);
// getBingoLetter(57);
// getBingoLetter(60);
// getBingoLetter(63);
// getBingoLetter(75);
// getBingoLetter('Shakra');

// function getTransformersPriceTotal(numFigures) {
//     let total = 0;
//     for (let i = 0; i < numFigures.length; i++) {
//         if (numFigures[i] < 0 || typeof numFigures[i] != "number") {
//             alert(`You do not have a valid number at index ${i}!`);
//             return;
//         }
//     }
//     total += (
//         (
//             (numFigures[0] * 9.99) +
//             (numFigures[1] * 24.99) +
//             (numFigures[2] * 34.99) +
//             (numFigures[3] * 54.99) +
//             (numFigures[4] * 89.99)
//         ) * 1.07
//     )
//     alert(`Yout total for ${numFigures[0]} Core class figures, ${numFigures[1]} Deluxe figure, ${numFigures[2]} Voyager figures, 
//         ${numFigures[3]} Leader class figures, and ${numFigures[4]} Commander class figures is ${total}, including tax.`);
// }

// getTransformersPriceTotal([1, 2, 2, 1, 'a']);

// function getGreeting(dayOfWeek) {
//     switch (dayOfWeek) {
//         case "MON":
//             alert("Manic Monday!");
//             break;
//         case "TUE":
//             alert("Taco Tuesday!");
//             break;
//         case "WED":
//             alert("Hump Day!");
//             break;
//         case "THU":
//             alert("Downhill stretch");
//             break;
//         case "FRI":
//             alert("FriYAY!");
//             break;
//         case "SAT":
//             alert("The weekend! Hooray!");
//             break;
//         case "SUN":
//             alert("I'm sleeping in!");
//             break;
//         default:
//             alert("That's not a valid day of the week.");
//     }
// }

// getGreeting("2");

// function sumOfThreesAndSevens() {
//     let total = 0;
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0 || i % 7 == 0) {
//             total += i;
//         }
//     }
//     return total;
// }

// let sum = sumOfThreesAndSevens();
// alert(`The sum is ${sum}`);

// function getEveryThirdCharFromString(str) {
//     let everyThirdCharFromString = "";
//     for (let i = 2; i < str.length; i += 3) {
//         everyThirdCharFromString += str[i];
//     }
//     alert(`The value of everyThirdCharFromString is ${everyThirdCharFromString}.`);
// }

// getEveryThirdCharFromString("eaglestones");

// function getNumberFromUser() {
//     const numberSet = 8;
//     let num = prompt('Enter a number please');
//     while (num != numberSet) {
//         num = prompt('Wrong number, choose again');
//     };
//     alert('You got it!');
// };

// getNumberFromUser();

// function calculateArea(width, length) {
//     return width * length;
// }

// let area = calculateArea(5, 6);

// let area = (width, length) => {
//   console.log('Hello');
//   return width * length;
// }
// alert(`The area is ${area(4, 3)}`);



// function functionScope() {
//   var a = 10;
//   if (a === 10) {
//     var b = 20;
//     if (b === 20) {
//       var c = 30;
//     }
//   }
//   console.log(a);  // 10
//   console.log(b);  // 20
//   console.log(c);  // 30
// }
// functionScope();
// console.log(a); // uncaught ReferenceError: a is not defined

// function blockScope() {
//   if (true) {
//     let d = 40;
//     console.log(d);  // 40
//   }
//   console.log(d);  // Uncaught ReferenceError: d is not defined
// }
// blockScope();

// function printPersonInformation(firstName, lastName, age) {
//   console.log(`First name: ${firstName}`);
//   console.log(`Last name: ${lastName}`);
//   console.log(`Age: ${age}`);
// }
// printPersonInformation("Bill", "Nye");
// First name: Bill
// Last name: Nye
// Age: undefined

// function square(x) { return x * x; }
// console.log(square(4, true, "hedgehog"));  // 16

// function minus(a, b) {
//   if (b === undefined) {
//     return -a;
//   }
//   else {
//     return a - b;
//   }
// }
// console.log(minus(10));  // -10
// console.log(minus(10, 5));  // 5









// // Global scope
// let x = 10;
// console.log(`x = ${x}`);  // x = 10
// function globalScope() {
//   x = 20;
//   for (let i = 1; i < 10; i++) {
//     if (i % 3 == 0) {
//       x = i;
//       break;
//     }
//   }
// }

// globalScope();
// console.log(`x = ${x}`);  // x = 3

// run again but change line 6 to var x = 20
// run again but change line 10 to var x = i


// function testOfFunctionScope() {
//     for (let i = 1; i < 10; i++) {
//         console.log(`i is now ${i}`);
//         if (i % 3 == 0) {
//             let y = i;
//             break;
//         }
//     }
//     console.log(`y is ${y}`);
// }

// testOfFunctionScope();

