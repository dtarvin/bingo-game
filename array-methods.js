const chores = ['Clean bathroom', 'Go shopping', 'Tidy up', 'Mow lawn'];

// chores = ['Clean bathroom', 'Go shopping', 'Tidy up', 'Mow lawn', 'Clean living room']; // Uncaught TypeError: Assignment to constant variable.

function iterateOverArray(arr) {
    console.log('My chore list is as follows:');
    for (let i = 0; i < arr.length; i++) {
        console.log(`Chore #${i + 1}: ${arr[i]}`);
    }
    console.log(arr[0]);
    console.log('That is all I have to do!');
    console.log(`Length of the array: ${arr.length}`);
    console.log(`----------------------------------------`);
}

// iterateOverArray(chores);

chores.push('Clean living room');

// console.log('chores.push() with one element');
// iterateOverArray(chores);

chores.push('Mop kitchen floor', 'Dust china cabinet');

// console.log('chores.push() with two elements');
// iterateOverArray(chores);

// chores.unshift('Sweep garage');

// console.log('chores.unshift() with one element');
// iterateOverArray(chores);

// chores.unshift('Vacuum bedroom', 'Clean windows');

// console.log('chores.unshift() with two elements');
// iterateOverArray(chores);

// chores.splice(3, 0, "Paint garage");

// console.log('chores.splice() with one element added and none removed or replaced');
// iterateOverArray(chores);

// chores.splice(8, 0, "Lay sod", "Lay out vegetable garden");

// console.log('chores.splice() with two elements added and none removed or replaced');
// iterateOverArray(chores);

// chores.pop();

// console.log('After pop()');
// iterateOverArray(chores);

// chores.pop();

// console.log('After second pop()');
// iterateOverArray(chores);

// chores.pop();

// console.log('After third pop()');
// iterateOverArray(chores);

// chores.pop();

// console.log('After fourth pop()');
// iterateOverArray(chores);

const carCollection = [
    [
        "Caravan",
        "Durango",
        "Ram"
    ],
    [
        "F-150",
        "Focus",
        "Fiesta"
    ],
    [
        "Outback",
        "Forester",
        "Ascent"
    ]
];

function iterateOverMultidimensionalArray(arr) {
    console.log(`Start of array listing`);
    for (let i = 0; i < arr.length; i++) {
        console.log('-----------------------------------')
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`The car at index ${i}${j} is a ${arr[i][j]}`);
        }
        console.log('-----------------------------------')
    }
    console.log('That is the end');
}

// iterateOverMultidimensionalArray(carCollection);

// carCollection[1].pop();

// iterateOverMultidimensionalArray(carCollection);

// carCollection.pop();

// iterateOverMultidimensionalArray(carCollection);

// iterateOverArray(chores);

// chores.shift();

// console.log(`After shift()`)
// iterateOverArray(chores);

// chores.shift();

// console.log(`After second shift()`)
// iterateOverArray(chores);

// chores.shift();

// console.log(`After third shift()`)
// iterateOverArray(chores);

// chores.shift();

// console.log(`After fourth shift()`)
// iterateOverArray(chores);

// iterateOverMultidimensionalArray(carCollection);

// carCollection[1].shift();

// iterateOverMultidimensionalArray(carCollection);

// carCollection.shift();

// iterateOverMultidimensionalArray(carCollection);

// iterateOverArray(chores);

// const deleteChore = chores.splice(4, 1);

// iterateOverArray(chores);

// const otherDeletedChores = chores.splice(2, 2);

// iterateOverArray(chores);

// console.log(`First deleted chore: ${deleteChore}`);
// console.log(`Next two deleted chores: ${otherDeletedChores}`);

// chores.splice(1, 2, "De-clutter attic", "Weed flower bed", "Aerate lawn", "Wash car");

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// numbers 3 through 10 inclusive = 3, 4, 5, 6, 7, 8, 9, 10
// numbers 3 through 10 exclusive = 4, 5, 6, 7, 8, 9
// numbers 3 through 10, 3 inclusive and 10 exclusive = 3, 4, 5, 6, 7, 8, 9

// iterateOverArray(chores);

// const slice1 = chores.slice(2, 4); // getting indices 2 and 3, end of range (4) is exclusive

// console.log(`Slice 1 = ${slice1}`);

// iterateOverArray(chores);

// const slice2 = chores.slice(4);

// console.log(`Slice 2 = ${slice2}`);

// indices 0, 1, 2, 3, 4, 5, 6
// const slice3 = chores.slice(2, -1);

// console.log(`Slice 3 = ${slice3}`);

// chores.reverse();

// iterateOverArray(chores);

function compare(value1, value2) {
    if (value1 < value2) {
        return -1;  // The first value is smaller than the second value
    } else if (value1 > value2) {
        return 1;  // The first value is greater than the second value
    } else {
        return 0;  // Both values are of equal size
    }
}

const values = [7, 6, 4, 8, 7, 2, 4];
values.sort(compare);
console.log(values);