console.log("Ok!");

// // 1. Display in the console the numbers from 1 to 20

// function displayNumbers() {
//     for (var a = 0; a < 20;) {
//         a++;
//         console.log(a);
//     }
// }

// displayNumbers();

// 2. Display in the console the odd numbers from 1 to 20

function displayOddNumbers() {
    for(b = 0; b < 20; (b % 2) !== 0;) {
        b = b + 1;
        console.log(b);
    }
}

displayOddNumbers();

