const bingoCard = () => {
    const cardSheet = document.createElement("main");
    cardSheet.classList.add('inline-block', 'border-8', 'border-green-500');
    document.body.appendChild(cardSheet);

    const cardHeader = document.createElement('header');
    cardHeader.classList.add('flex', 'border-2', 'border-zinc-900');
    cardSheet.appendChild(cardHeader);

    const cardLetters = ['B', 'I', 'N', 'G', 'O'];

    for (let i = 0; i < cardLetters.length; i++) {
        const headerCell = document.createElement('div');
        headerCell.textContent = cardLetters[i];
        headerCell.classList.add('w-28', 'h-28', 'text-5xl', 'flex', 'justify-center', 'items-center', 'bg-cyan-400');
        if (i != cardLetters.length - 1) headerCell.classList.add('mr-2');
        cardHeader.appendChild(headerCell);
    }

    const card = document.createElement("div");
    card.setAttribute("id", "card");
    card.classList.add('inline-grid', 'grid-rows-5', 'grid-flow-col', 'gap-2', 'bg-zinc-900', 'border-2', 'border-zinc-900');
    cardSheet.appendChild(card);

    let cardNumbers = [];
    cardNumbers = createCardArrays();
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cardCell = document.createElement("div");
            let cardCellNumber = cardNumbers[i][j];
            cardCell.textContent = cardCellNumber;
            cardCell.classList.add('w-28', 'h-28', 'text-5xl', 'flex', 'justify-center', 'items-center', 'bg-pink-100');
            card.appendChild(cardCell);
        }
    }
}
function createCardArrays() {
    const cardNumbers = new Array(5);
    let max, min;
    for (let i = 0; i < 5; i++) {
        cardNumbers[i] = [];
        max = 15 * (i + 1);
        min = max - 14;
        cardNumbers[i] = generateRandomNumbers(5, min, max);
    }
    return cardNumbers;
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

const drawBingoBall = () => {
    let ballDrawn = 0;
    while (bingoBallsNotDrawn.indexOf(ballDrawn) === -1) {
        ballDrawn = Math.floor(Math.random() * 75) + 1;
    }
    bingoBallsNotDrawn = bingoBallsNotDrawn.filter(ball => ball !== ballDrawn);
    console.log('bingoBallsNotDrawn now has ' + bingoBallsNotDrawn.length + ' balls in it');
    bingoBallsDrawn.push(ballDrawn);
}



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