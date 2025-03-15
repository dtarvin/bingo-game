let cardNumbers = [];
const bingoCard = () => {
    const bingoCardSpace = document.getElementById('bingo-card');
    const cardSheet = document.createElement("main");
    cardSheet.classList.add('inline-block', 'mx-auto', 'min-w-fit', 'border-8', 'bg-[#4bb2d3]', 'border-[#4bb2de]');
    bingoCardSpace.appendChild(cardSheet);

    const cardHeader = document.createElement('header');
    cardHeader.classList.add('flex', 'rounded-xl', 'bg-[#345995ff]');
    cardSheet.appendChild(cardHeader);

    const cardLetters = ['B', 'I', 'N', 'G', 'O'];

    for (let i = 0; i < cardLetters.length; i++) {
        const headerCell = document.createElement('div');
        headerCell.textContent = cardLetters[i];
        headerCell.classList.add('w-28', 'h-28', 'font-chewy', 'text-7xl', 'flex', 'justify-center', 'items-center', 'bg-[#f5f5f4ff]','rounded-full', 'mx-2', 'my-2');
        if (i != cardLetters.length - 1) headerCell.classList.add('mr-2');
        cardHeader.appendChild(headerCell);
    }

    const card = document.createElement("div");
    card.setAttribute("id", "card");
    card.classList.add('inline-grid', 'grid-rows-5', 'grid-flow-col', 'bg-[#4bb2de]');
    cardSheet.appendChild(card);

    cardNumbers = createCardArrays();
    console.log(`cardNumbers: ${cardNumbers}`);
    console.log(`cardNumbers[2][2] = ${cardNumbers[2][2]}`);
    cardNumbers[2][2] = 0;
    console.log(`cardNumbers now: ${cardNumbers}`);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cardCell = document.createElement("div");
            let cardCellNumber = cardNumbers[i][j];
            if (i === 2 && j === 2) {
                cardCell.textContent = "FREE";
                cardCell.classList.add('free');
            } else {
                cardCell.textContent = cardCellNumber;
            }
            cardCell.classList.add('marker', 'w-28', 'h-28', 'font-lato', 'text-5xl', 'flex', 'justify-center', 'items-center', 'bg-[#f5f5f4ff]', 'rounded-full', 'mx-2', 'my-2', cardCellNumber);
            card.appendChild(cardCell);
        }
    }
    listenForMarkingSpaces();
}

function createCardArrays() {
    /*----- Code flagged by ChatGPT -----*/
    // const cardNumbers = new Array(5);
    // let max, min;
    // for (let i = 0; i < 5; i++) {
    //     cardNumbers[i] = [];
    //     max = 15 * (i + 1);
    //     min = max - 14;
    //     cardNumbers[i] = generateRandomNumbers(5, min, max);
    // }
    // return cardNumbers;
    /*----- End of code flagged by ChatGPT -----*/

    /*----- Replacement code suggested by ChatGPT -----*/
    return Array.from({ length: 5 }, (_, i) => generateRandomNumbers(5, i * 15 + 1, (i + 1) * 15));
    /*----- End of replacement code suggested by ChatGPT -----*/
}

function generateRandomNumbers(count, min, max) {
    let uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
        uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    const uniqueNumbersArray = [...uniqueNumbers];
    return uniqueNumbersArray;
}

const bingoBalls = () => {
    const ballArray = [];
    for (let i = 1; i <= 75; i++) {
        ballArray.push(i);
    }
    return ballArray;
}

let bingoBallsNotDrawn = bingoBalls();
let bingoBallsDrawn = [];
let ballsDrawn = [];

const drawBingoBall = () => {
    /*----- Code flagged by ChatGPT -----*/
    // let ballDrawn = 0;
    // while (bingoBallsNotDrawn.indexOf(ballDrawn) === -1) {
    //     ballDrawn = Math.floor(Math.random() * 75) + 1;
    // }
    // bingoBallsNotDrawn = bingoBallsNotDrawn.filter(ball => ball !== ballDrawn);
    // ballsDrawn.push(ballDrawn);
    // console.log(`drawBingoBall ballsDrawn: ${ballsDrawn}`);
    // if (ballDrawn >= 61) ballDrawn = 'O-' + ballDrawn;
    // else if (ballDrawn >= 46) ballDrawn = 'G-' + ballDrawn;
    // else if (ballDrawn >= 31) ballDrawn = 'N-' + ballDrawn;
    // else if (ballDrawn >= 16) ballDrawn = 'I-' + ballDrawn;
    // else ballDrawn = 'B-' + ballDrawn;
    // bingoBallsDrawn.push(ballDrawn);
    // showBallDrawnOnScreen(ballDrawn);
    // addBallToBallsDrawnList(ballDrawn);
    /*----- End of code flagged by ChatGPT -----*/

    /*----- Replacement code suggested by ChatGPT -----*/
    if (bingoBallsNotDrawn.length === 0) {
        alert("All bingo balls have been drawn!");
        return;
    }

    // Draw a random ball and remove it from the available list
    const ballDrawn = bingoBallsNotDrawn.splice(Math.floor(Math.random() * bingoBallsNotDrawn.length), 1)[0];

    // Prevent 'ballsDrawn' array from growing indefinitely
    if (ballDrawn.length > 75) {
        ballsDrawn.shift(); // Remove the oldest ball if the array gets too large
    }
    ballsDrawn.push(ballDrawn);

    // Determine ball letter (B, I, N, G, O)
    let ballDisplay;
    if (ballDrawn >= 61) ballDisplay = 'O-' + ballDrawn;
    else if (ballDrawn >= 46) ballDisplay = 'G-' + ballDrawn;
    else if (ballDrawn >= 31) ballDisplay = 'N-' + ballDrawn;
    else if (ballDrawn >= 16) ballDisplay = 'I-' + ballDrawn;
    else ballDisplay = 'B-' + ballDrawn;

    // Use Set to prevent duplicates
    bingoBallsDrawn = [...new Set([...bingoBallsDrawn, ballDisplay])];

    // Update UI efficiently
    requestAnimationFrame(() => {
        showBallDrawnOnScreen(ballDisplay);
        addBallToBallsDrawnList(ballDisplay);
    });
    /*----- End of replacement code recommended by ChatGPT -----*/

    console.log('bingoBallsNotDrawn now has ' + bingoBallsNotDrawn.length + ' balls in it');
    console.log('bingoBallsDrawn now has ' + bingoBallsDrawn);
    console.log('bingoBallsNotDrawn: ' + bingoBallsNotDrawn);
};

const showBallDrawnOnScreen = (ballDrawn) => {
    const currentBall = document.getElementById('currentBall');
    currentBall.textContent = "";
    const currentBallNumber = document.createTextNode(ballDrawn);
    currentBall.appendChild(currentBallNumber);
}

const addBallToBallsDrawnList = (ballDrawn) => {
    const ballList = document.getElementById("accordion-content");
    const listedBall = document.createElement("div");
    listedBall.textContent = ballDrawn;
    listedBall.classList.add('text-4xl', 'text-center', 'py-2', 'px-4', 'border-r-2', 'border-l-2', 'border-b-2', 'border-[#714BDE]', 'text-[#714BDE]');
    ballList.appendChild(listedBall);
}

const listenForMarkingSpaces = () => {
    /*----- Code flagged by ChatGPT -----*/
    // const spaces = document.querySelectorAll(".marker");
    // spaces.forEach((space) => {
    //     space.addEventListener("click", function (evt) {
    //         space.classList.toggle('bg-[#f5f5f4ff]');
    //         space.classList.toggle('bg-[#26c485ff]');
    //         space.classList.toggle('marked');
    //     });
    // });
    /*----- End of code flagged by ChatGPT -----*/

    /*----- Replacement code recommended by ChatGPT -----*/
    document.getElementById("card").addEventListener("click", (evt) => {
        if (evt.target.classList.contains("marker")) {
            evt.target.classList.toggle('bg-[#f5f5f4ff]');
            evt.target.classList.toggle('bg-[#26c485ff]');
            evt.target.classList.toggle('marked');
        }
    })
    /*----- End of replacement code recommended by ChatGPT -----*/
} 

/*----- Additional code recommended by ChatGPT -----*/
const accordionContent = document.getElementById('accordion-content');
const arrowIcon = document.getElementById('arrow-icon');
/*----- End of additional code recommended by ChatGPT -----*/

const toggleAccordion = () => {
    /*----- Code flagged by ChatGPT -----*/
    // document.getElementById('accordion-content').classList.toggle("hidden");
    // document.getElementById('arrow-icon').classList.toggle("rotate-180");
    /*----- End of code flagged by ChatGPT -----*/

    /*----- Replacement code recommended by ChatGPT -----*/
    accordionContent.classList.toggle("hidden");
    arrowIcon.classList.toggle("rotate-180");
    /*----- End of replacement code recommended by ChatGPT -----*/
}

const startNewGame = () => {
    /*----- Code flagged by ChatGPT -----*/
    // const ballList = document.getElementById("accordion-content");
    // ballList.innerHTML = '';
    // const currentBall = document.getElementById('currentBall');
    // currentBall.textContent = '';
    // const spaces = document.querySelectorAll(".marker");
    // spaces.forEach((space) => {
    //     // space.classList.remove('bg-[#f5f5f4ff]');
    //     space.classList.remove('bg-[#26c485ff]');
    //     space.classList.remove('marked');
    //     space.classList.add('bg-[#f5f5f4ff]');
    // });
    /*----- End of code flagged by ChatGPT -----*/

    /*----- Replacement code recommended by ChatGPT -----*/
    bingoBallsNotDrawn = bingoBalls();
    bingoBallsDrawn = [];
    ballsDrawn = [];

    // Clear UI elements
    document.getElementById("accordion-content").innerHTML = '';
    document.getElementById("currentBall").textContent = '';

    // Reset card spaces
    document.querySelectorAll(".marker").forEach((space) => {
        space.classList.remove('bg-[#26c485ff]', 'marked');
        space.classList.add('bg-[#f5f5f4ff]');
    });
    /*----- End of replacement code recommended by ChatGPT -----*/
};

const checkIfMarksAreCorrect = () => {
    const spaces = document.querySelectorAll(".marker");
    const markedSpaces = Array.from(spaces)
        .filter((space) => space.classList.contains('marked'))
        .map((markedSpace) => markedSpace.textContent.trim());
    console.log('The marked spaces are: ' + markedSpaces);
    let index = markedSpaces.indexOf('FREE');
    console.log(index);
    markedSpaces[index] = "0";
    index = ballsDrawn.indexOf(0);
    if (index === -1) ballsDrawn.push(0);
    console.log(`The marked spaces are now: ${markedSpaces}`);
    console.log(`checkIfMarksAreCorrect ballsDrawn: ${ballsDrawn}`);

    const markedSpaceNumbers = markedSpaces.map(Number);
    const legitSpaces = markedSpaceNumbers
        .filter((markedNumber) => ballsDrawn.includes(markedNumber));
    console.log('legitSpaces: ' + legitSpaces);
    if (
        (checkColForBingo(legitSpaces)) ||
        (checkRowForBingo(legitSpaces, cardNumbers, 0, 0)) ||
        (chkDiagTopLeftBottomRight(legitSpaces, cardNumbers, 0)) ||
        (chkDiagTopRightBottomLeft(legitSpaces, cardNumbers, 4, 0))
    ) {
        console.log("BINGO!!!");
    }
}

const chkDiagTopLeftBottomRight = (legitSpaces, cardNumbers, i) => {
    if (i == 5) return true;
    else {
        console.log(`current card number is ${cardNumbers[i][i]}`);
        const isValidSpace = legitSpaces.includes(cardNumbers[i][i]);
        console.log(`isValidSpace: ${isValidSpace}`);
        if (isValidSpace) return chkDiagTopLeftBottomRight(legitSpaces, cardNumbers, i + 1);
        else return false;
    }
}

const chkDiagTopRightBottomLeft = (legitSpaces, cardNumbers, i, j) => {
    if (j == 5) return true;
    else {
        console.log(`current card number is ${cardNumbers[i][j]}`);
        const isValidSpace = legitSpaces.includes(cardNumbers[i][j]);
        console.log(`isValidSpace: ${isValidSpace}`);
        if (isValidSpace) return chkDiagTopRightBottomLeft(legitSpaces, cardNumbers, i - 1, j + 1);
        else return false;
    }
}

const checkColForBingo = (legitSpaces) => {
    let spacesColumn = [];
    let max, min;
    for (let i = 0; i <= 4; i++) {
        max = 15 * (i + 1);
        min = max - 14;
        spacesColumn = legitSpaces.filter((legitSpace) => legitSpace >= min && legitSpace <= max);
        console.log(`The length of spacesColumn for column ${i + 1} is ${spacesColumn.length}`);
        if ((i == 2 && spacesColumn.length == 4) || spacesColumn.length == 5 ) {
            return true;
        }
    }
    return false;
}


const checkRowForBingo = (legitSpaces, cardNumbers, i, j) => {
    if (i == 5) return true;
    if (j == 5) return false;
    console.log(`current card number is ${cardNumbers[i][j]}`);
    const isValidSpace = legitSpaces.includes(cardNumbers[i][j]);
    if (isValidSpace) return checkRowForBingo(legitSpaces, cardNumbers, i + 1, j);
    else return checkRowForBingo(legitSpaces, cardNumbers, 0, j + 1);
}

// do we get the marked ones and see if they're in the list, or take each from the list and see 
// if one is marked?
// Do it from marked ones

// 1. take the arrays of numbers and filter the ones with the marked class into a new array
// 2. take the balls drawn array, remove the letter and dash, and sort into a new array
// 3. check each number that is marked against each number in the drawn array
// 4. if a marked number is not in the drawn array, remove the marked class from that element

// function empty() {
//     element.textContent = "";
// }

// let parent = document.getElementById("parent");
// empty(parent);

// 1. create array to draw balls from
// 2. pick a random number
// 3. see if that ball is in the array
// 4. if it is, remove that ball from the array and post the number
// 5. if it isn't, get another random number and try again
// 6. make sure to reuse same array so numbers go down




// 1: Create a `Set` object
// 2: Generate each random number
// 3: Immediately insert them numbers into the Set...
// ...set how many numbers to generate from a given range
// console.log(generateRandomNumbers(5, 5, 10));

    // const letterB = [];
    // const letterI = [];
    // const letterG = [];
 
    // const letterO = [];
    
    
    // const letterN = [];
    // main array should have five arrays - one for each letter
    // loop five times to populate main array
    // first loop - to fill first sub-array - B
    // need to run Math.random 5 times with 15 as max and 1 as min
    // second loop - to fill second sub-array - I
    // need to run Math.random 5 times with 30 as max and 16 as min
    // third loop - to fill third sub-array - N
    // need to run Math.random 4 times with 45 as max and 31 as min
// could run 5 times, but if main array index is 2 and sub-array index is 2, add "free" to array instead