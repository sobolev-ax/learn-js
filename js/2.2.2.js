"use strict";


// // Таким образом можно конструировать функцию, код которой неизвестен на
// // момент написания программы, но строка с ним генерируется или подгружается динамически во время её выполнения.
// var sum = new Function('a,b', 'return a+b;');
// var result = sum(1,2);
// alert( result );

// function ask(question, yes, no) {
//     if(confirm(question)) yes();
//     else no();
// }
// function showOk() {
//     alert( "Вы согласились" )
// }
// function showCancel() {
//     alert ( "Вы отказались" )
// }
// ask("Вы согласны?", showOk, showCancel);
// ask(
//     "Согласны?",
//     // Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.
//     function() { console.log("Согласились!")},
//     function () { console.log("Отказались")}
// );

//функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.
//Поэтому их можно вызвать до объявления.

// function sayHi() {
//     alert( "Привет" );
// }
//alert( sayHi ); // выведет код функции

// //Функция pow(x,n)
// function pow(x, n) {
//     var result = 1;
//     if( x <= 0 || n <= 0) return;
//     if( x % 1 !== 0 || n % 1 !== 0) return;
//     while (n > 0) {
//         result *= x;
//         n--;
//     }
//     return result;
// }
// var numX = prompt("X:", '');
// var numN = prompt("N:", '');
// alert(pow(numX,numN));
// //Функция min
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else{
//         return b;
//     }
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));
// // Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// // ?
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?')
// }
// console.log(checkAge(20))