// Завдання 1

// let i = 4;
// let password = prompt('Enter password')
// do {
//     if (password == 1111) {
//         console.log("Запрошуємо на сайт!");
//         i = 0
//     } else if (password != 1111) {
//         if (i === 1) {
//             console.log("Будь ласка спробуйте пізніше!");
//             i=0
//         }else{
//             password = prompt(`Залишилось ${i-=1} з 4`)        

//         }

//     }
// }
// while (i > 0)

// Завдання 2 

// let n1 = prompt();
// let result = 1;
// let i = 1;
// while( i<=n1 ){
//     result *= i;
//     i++
// }
// console.log(result);

// Завдання 3

// let i=1000;
// while( i<=9999) {
//     document.write(`<h2> ${i}</h2>`)
//     i+=3
// }


// Завдання 3


// let i=1;
// while( i<=55 ){
//     document.write(`<h2> ${i}</h2>`)
//     i+=2
// }



// Завдання 4

// let i=90;
// while( i>=0 ){
//     document.write(`<h2> ${i}</h2>`)
//     i-=5
// }

// Завдання 5
// let i=1;
// let result = 1;
// while(i<=20){
//     document.write(`<h2> ${result*=2}</h2>`)
//     i++
// }

// Завдання 6
// let i=2;
// let result = 1
// while(i<10000){
//     document.write(`<h2> ${i}</h2>`)
//     i=2*i-1
// }


// Завдання 7
// let i=-166;
// while(i<100){
//     if(i>-100){
//      document.write(`<h2> ${i}</h2>`)
//     }
//     i=2*i+200
//  }

// Завдання 8

let i = 1;
let a = +prompt('Введіть число');
let b = +prompt('Введіть степінь');
let result = 1;
while ( i <= b || i <= -b) {
    result *= a;
    i++
}
if (b > 0) {
    result = result
} else if (b < 0) {
    result = 1 / result
} else {
    result = 1
}
console.log(result);