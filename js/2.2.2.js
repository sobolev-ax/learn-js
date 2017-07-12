"use strict";

function filterRange(arr, a, b) {

}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился

// var arr = ["test", 2, 1.5, false];
//
// find(arr, "test"); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
// find(arr, false); // 3
// find(arr, 0); // -1
//
// function find(arr, value) {
//     var key;
//     if (arr.indexOf()) {
//         var result = arr.indexOf(value);
//         console.log("function find: " + result);
//         return result;
//     };
//     for ( key in arr) {
//         if ( arr[key] === value) {
//             console.log("function find: " + key);
//             return key;
//         }
//     }
//     console.log("function find: -1")
//     return -1;
// }
// if ([].indexOf) {
//
//     var find = function(array, value) {
//         return array.indexOf(value);
//     }
//
// } else {
//     var find = function(array, value) {
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] === value) return i;
//         }
//
//         return -1;
//     }
//
// }

// // Напишите код, который:
// //      Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// //      Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// //      При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// //      Выводит сумму всех значений массива
//
// var number;
// var summ = 0;
// var arr = [];
//
// while(true) {
//     number = prompt("Введите слагаемое", "");
//     if ( number !== null && number !== "" && !isNaN(number)) {
//         arr.push(+number);
//         summ = summ + arr[ arr.length - 1 ];
//     } else {
//         if (summ !== 0) alert("Сумма: " + summ);
//         break;
//     }
// }

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand = 0 + Math.floor(Math.random() * ((arr.length - 1) + 1 - 0));
// alert(arr[rand]);

// var styles = ["джаз", "блюз"];
// styles.push("рок-н-ролл");
// styles[ styles.length -2 ] = "классика";
// alert(styles.shift());
// styles.unshift("рэпп", "регги");

// var goods = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
// console.log(goods[goods.length-1]);
// goods.push("computer");
// console.log(goods);

// //Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// multiplyNumeric(menu);
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }
// function multiplyNumeric(obj) {
//     var key;
//     for (key in obj) {
//         if(isNumeric( obj[key] )) {
//             obj[key] = obj[key]*2;
//         }
//     }
// }
//
// console.log(menu);

// //Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// var salariesEmpty  = {};
// function calculateSalaries(obj) {
//     var sum = 0;
//     for(var key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }
// console.log( calculateSalaries(salaries) );
// console.log( calculateSalaries(salariesEmpty) );
// // Есть объект salaries с зарплатами. Напишите код,
// // который выведет имя сотрудника, у которого самая большая зарплата.
// function maxSalaries(obj) {
//     var nameMax = "Пустой массив";
//     var salariesMax = 0;
//     var nameAnother;
//
//     for(var key in obj) {
//         if ( obj[key] > salariesMax ) {
//             salariesMax = obj[key];
//             nameMax = key;
//         }
//     }
//
//     return nameMax;
// }
// console.log( maxSalaries(salaries) );
// console.log( maxSalaries(salariesEmpty) );

// // Создайте функцию isEmpty(obj), которая возвращает true,
// // если в объекте нет свойств и false – если хоть одно свойство есть.
// function isEmpty(obj) {
//     for(var key in obj) {
//         return false;
//     }
//     return true;
// }
// var schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "подъём";
// alert( isEmpty(schedule) ); // false

// var menu = {
//     width: 300,
//     height: 200,
//     title: "menu"
// };
// for (var propName in menu) {
//     console.log(propName + " : " + menu[propName]);
// }

// var user = {};
// user["name"] = "Вася";
// user["surname"] = "Петров";
// user.name = "Сергей";
// delete user.name;

// var person = {};
// person.name = 'Sasha';
// person.age = 26;
// if ("name" in person) console.log("Существует свойство");
//
// var person = {};
// person['name'] = 'sobolev_ax';
// person['he like computer games'] = true;
// console.log(person);

// // Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
// // Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
// // число-значение, в данном случае 120.
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));
// console.log(extractCurrencyValue("$1300"));
// console.log(extractCurrencyValue("Р120"));

// // Создайте функцию truncate(str, maxlength), которая проверяет длину
// // строки str, и если она превосходит maxlength – заменяет конец str
// // на "...", так чтобы ее длина стала равна maxlength.
// function truncate(str, maxlength) {
//     if (str.length <= maxlength) { // если подходит то сразу возращаем строку
//         return str;
//     } else {
//         return str.slice(0, maxlength-3) + "...";
//     }
// }
// console.log(
//     truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) == "Вот, что мне хоте...");
// console.log(
//     truncate("Всем привет!", 20) == "Всем привет!");

// //Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false
// function checkSpam(str) {
//     return ~str.toLowerCase().indexOf("xxx") || ~str.toLowerCase().indexOf("viagra") ? true : false;
// }
// console.log(checkSpam('buy ViAgRA now') == true);
// console.log(checkSpam('free xxxxx') == true);
// console.log(checkSpam("innocent rabbit") == false);

// //Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом
// function ucFirst(str) {
//     var firstChar = str.charAt(0);
//     firstChar = firstChar.toUpperCase();
//     str = str.slice(1);
//     //console.log(firstChar + str);
//     return firstChar + str;
// }
// console.log(ucFirst("вася") == "Вася");
// console.log(ucFirst("") == ""); // нет ошибок при пустой строке

// // Поиск всех вхождений
// function f() {
//     var str = "23 23 2 getdrgdf trhrthr getOOgetgetget"; //4 -совпадения
//     var index = 0;
//     while (1) {
//         index = str.indexOf("get", index);
//         if (index === -1) return 1;
//         console.log(index);
//         index++;
//     }
// };
// f();

// var str = "Widget";
// if(~str.indexOf("get")) {
//     alert ('Совпадение');
// } else {
//     alert (':(');
// }

// console.log("".charAt(0));
// console.log(""[0]);

// //Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.
// function random(max) {
//     alert( Math.random() * max );
// }
// console.log(random(300));

// function fib(n) {
//     var a = 1,
//         b = 0,
//         x;
//     for (var i = 0; i < n; i++) {
//         x = a + b;
//         a = b;
//         b = x;
//     }
//     return b;
// }
// function fibBinet(n) {
//     var fi = (1 + Math.sqrt(5)) / 2;
//     return Math.round( Math.pow(fi, n) / Math.sqrt(5) )
// }
// console.log(fibBinet(77));
// console.log(fib(77));

// function getDecimal(n) {
//     if (n < 0) n = -n;
//     return Math.round((n - parseInt(n)) * 1000) / 1000;
// }
// alert( getDecimal(12.345) ); // 0.345
// alert( getDecimal(1.2) ); // 0.2
// alert( getDecimal(-1.2) ); // 0.2
// // function getDecimal(num) { // работаем как со строкой
// //     var str = "" + num;
// //     var zeroPos = str.indexOf(".");
// //     if (zeroPos == -1) return 0;
// //     str = str.slice(zeroPos);
// //     return +str;
// // }

// var i = 0;
// while (i < 11) {
//     i += 0.2;
//     if (i > 9.8 && i < 10.2) alert( i );
// }

// // alert( 0.1 + 0.2 + '$' );
// // Что можно сделать, чтобы избежать проблем с ошибками округления?
// alert( (0.1 + 0.2).toFixed(1) + '$');

// console.log( 6.35.toFixed(20));

// //Создайте страницу, которая предлагает ввести два числа и выводит их сумму.
// var numberOne = +prompt("Число первое:");
// var numberTwo = +prompt("Число второе:");
// alert(
//     numberOne + numberTwo
// );

// var n = 10000000;
// console.log( n.toLocaleString() );
// n = 10000;
// console.log( n.toLocaleString() );

// console.log( 0.1 + 0.2 /*=== 0.3*/);
// console.log(9999999999999999);

// var n = 3.456;
// console.log( Math.round(n * 100) / 100 ); // Более точный и правильный метод
// console.log( +n.toFixed(2) );

// console.log( Math.floor(3.1));
// console.log( Math.ceil(3.1));
// console.log( Math.round(3.1));
// console.log( ~~3.1);
// console.log( 1.2 + 1.3 ^ 0);

// var n = 255;
// console.log( n.toString(16) );


// function isNumeric(n) {
//     return !isNaN(parseFloat(n) && isFinite(n));
// };

// var x = prompt("Введите значение", "-11.4");
// if (isNaN(x)) {
//     alert( "Строка преобразовалась в NaN. Не число." );
// } else {
//     alert( "Число" );
// }

// console.log( parseInt("12px") );
// console.log( parseInt("12.456px") );
// console.log( parseFloat("12px") );
// console.log( parseFloat("12.456px") );
// console.log( parseInt("FF", 16) );

// console.log(+"nfng");
// console.log(" - NaN");
// console.log(+"2323");
// console.log(" - число");
// console.log("2323");
// console.log(" - строка");

// //Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не NaN/Infinity/-Infinity
// console.log( isFinite(1) );
// console.log( isFinite(Infinity) );
// console.log( isFinite(NaN));

// var value = prompt("Введити Infinity", 'Infinity');
// var number = +value;
// console.log( number );

// console.log(0xff);
// console.log(2e3);
// console.log(33e-2);
// console.log(1/0);
// console.log(-1/0);
// console.log(1e500);
// console.log( 0 / 0); // NaN ничему не равно
// console.log( isNaN(2) );
// console.log( isNaN("") );
// console.log( isNaN(0) );
// console.log( isNaN(Infinity) );
// console.log( isNaN("123") );
// console.log( isNaN("sdfdf") );

// var number = 3.14566;
// console.log(number.toFixed(2));
// console.log(number.toFixed(0));
// console.log(number.toFixed(10));
// console.log(12..toFixed(3));

// var helloWorldStrict = "Hello World!";
// console.log(helloWorldStrict.length);
// console.log(helloWorldStrict.toUpperCase());
// console.log(helloWorldStrict.toUpperCase);

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