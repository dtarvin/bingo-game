const bingoCard = () => {
    const card = document.createElement("div");
    card.setAttribute("id", "card");
    card.classList.add('inline-grid', 'grid-cols-5', 'gap-2', 'bg-zinc-900', 'border-2', 'border-zinc-900');
    document.body.appendChild(card);

    let cardNumbers = [];
    cardNumbers = createCardArrays();
    console.log('cardNumbers = ' + cardNumbers);
    console.log('cardNumbers is a ' + typeof (cardNumbers));
    console.log('cardNumbers[1][0] = ' + cardNumbers[1][0]);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cardCell = document.createElement("div");
            let cardCellNumber = cardNumbers[i][j];
            cardCell.textContent = cardCellNumber;
            cardCell.classList.add('w-28', 'h-28', 'text-5xl', 'flex', 'justify-center', 'items-center', 'bg-pink-100');
            card.appendChild(cardCell);
        }
    }

    // const letterB = [];
    // const letterI = [];
    // const letterN = [];
    // const letterG = [];
    // const letterO = [];

    // main array should have five arrays - one for each letter
    // loop five times to populate main array
    // first loop - to fill first sub-array - B
    // need to run Math.random 5 times with 15 as max and 1 as min
    // second loop - to fill second sub-array - I
    // need to run Math.random 5 times with 30 as max and 16 as min
    // third loop - to fill third sub-array - N
    // need to run Math.random 4 times with 45 as max and 31 as min
    // could run 5 times, but if main array index is 2 and sub-array index is 2, add "free" to array instead
}
function createCardArrays() {
    const cardNumbers = new Array(5);
    let max, min;
    for (let i = 0; i < 5; i++) {
        cardNumbers[i] = [];
        max = 15 * (i + 1);
        min = max - 14;
        cardNumbers[i] = generateRandomNumbers(5, min, max);
        console.log('cardNumbers[' + i + '] = ' + cardNumbers[i]);
        console.log('cardNumbers[' + i + '][2] = ' + cardNumbers[i][2]);
    }
    return cardNumbers;
}

function generateRandomNumbers(count, min, max) {
    // 1: Create a `Set` object
    let uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
        // 2: Generate each random number
        uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    const uniqueNumbersArray = [...uniqueNumbers];
    // 3: Immediately insert them numbers into the Set...
    return uniqueNumbersArray;
}
// ...set how many numbers to generate from a given range
// console.log(generateRandomNumbers(5, 5, 10));
