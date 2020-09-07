console.log("Ok!");

// 1. Display in the console the numbers from 1 to 20

function displayNumbers() {
    for (var a = 0; a < 20;) {
        a++;
        console.log(a);
    }
}

displayNumbers();

// 2. Display in the console the odd numbers from 1 to 20

function displayOddNumbers() {
    for ( var b = 0; b <= 20; b++) {
        if (b % 2 !== 0) {
            console.log(b);
        } 
    }
}

displayOddNumbers();

// 3. Compute the sum of the elements of an array and display it in the console

var array = [1, 2, 3, 4, 5, 6]

function sumOfElem() {
    for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
    console.log(sum);

}

sumOfElem();

// 4. Compute the maximum of the elements of an array and display it in the console 

var array = [5, 8, 1, 3, 2, 10]
maxNumber = array[0];

function maxElem() {
    for ( var i = 1; i < array.length; ++i) {
        if ( array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    console.log(maxNumber);
}

maxElem();

// 5. Compute how many times a certain element appears in an array

var array = [1, 88, 3, 1, 43, 1, 1, 1]

function arrayCounter() {
    var count = 0;
    for ( var i = 0; i < array.length; ++i ) {
        if ( array[i] === 1 ) {
            count++;
        }
    }
    console.log(count);
}

arrayCounter();