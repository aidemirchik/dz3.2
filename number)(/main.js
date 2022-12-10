// function count(num1, num2) {
// if (num1 < num2) {
//     return num1
// } else {
//     return num2
// }
// }
// console.log(count(9, 16));

// random numbers

// let num1 = prompt("Введите число")
// let num2 = prompt("Введите число")

// if (num1 < num2) {
//         alert(num1) 
//     } else if (num1 > num2){
//         alert(num2)
//     } else{
//         alert(" равны ")
//     }


function count(n1, n2) {
    return Math.min(n1, n2)
}
console.log(count(7,45));