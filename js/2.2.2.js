"use strict";
function pow(number, elevate) {
    if (elevate === 0 && number === 0) {
        return undefined;
    }
    if (elevate < 0) { // проверка на отрицательную степень
        return undefined;
    }
    if (elevate % 1 > 0) { // проверка на дробную степень
        return undefined
    }

    var result = 1;

    for ( ; elevate ; elevate--){
        result *= number;
    }

    return result;
}

// // Именованные функциональные выражения
// var f = function sayHi(name) {
//     alert( sayHi ); // изнутри функции - видно (выведет код функции)
// };
// alert(f());

// //Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
// function fib(n) {
//     switch (n) {
//         case 1:
//         case 2:
//             return 1;
//             break;
//         default:
//             return fib(n-1) + fib(n-2);
//             break;
//     }
//     // fib(4) = fib(3) + fib(2);
//     // fib(3) = fib(2) + fib(1);
//     // fib(2) = 1;
//     // fib(1) = 1;
// }
// //Можно это оптимизировать,
// //запоминая уже вычисленные значения, получится гораздо быстрее.
// //Альтернативный вариант – вообще отказаться от рекурсии, а вместо этого в
// //цикле начать с первых значений 1, 2, затем из них получить fib(3), далее fib(4),
// //затем fib(5) и так далее, до нужного значения.
// function fib(n) {
//     var fibPrevPrev = 1;
//     var fibPrev = 1;
//     var fibCurrent;
//     if(n === 1) return 1;
//     if(n === 2) return 1;
//     for(var i = 3; i <= n; i++) {
//         fibCurrent = fibPrev + fibPrevPrev;
//         fibPrevPrev = fibPrev;
//         fibPrev = fibCurrent;
//     }
//     return fibCurrent;
// }
// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// alert( fib(77)); // 5527939700884757

// //Факториа́л числа – это число, умноженное на «себя минус один»,
// //затем на «себя минус два» и так далее, до единицы. Обозначается n!
// function factorial(n) {
//     if(n) {
//         return n * factorial(n-1);
//     } else {
//         return 1;
//     }
//     // factorial(4) = 4 * factorial(3);
//     // factorial(3) = 3 * factorial(2);
//     // factorial(2) = 2 * factorial(1);
//     // factorial(1) = 1;
// }
// alert( factorial(5) ); // 120

// // Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
// //С использованием цикла.
// function sumTo(n) {
//     var sum = 0;
//     while(n) {
//         sum += n;
//         n--;
//     }
//     return sum;
// }
// //Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
// function sumTo(n) {
//     if( n != 1) {
//         return n + sumTo(n-1)
//     } else {
//         return n;
//     }
//     //sumTo(3) = 3 + sumTo(2);
//     //sumtTo(2) = 2 + sumTo(1);
//     //sumTo(1) = 1;
// }
// //С использованием формулы для суммы арифметической прогрессии.
// function sumTo(n) {
//     return ( (1 + n) / 2 ) * n;
// }
// alert( sumTo(100));
// // «функция pow рекурсивно вызывает сама себя» до n == 1
// function pow(x, n) {
//     if (n != 1) {
//         return x * pow(x, n - 1);
//     } else {
//         return x;
//     }
// }
//
// alert( pow(2, 100) );

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