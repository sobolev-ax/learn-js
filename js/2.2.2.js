"use strict";


var arr = [1, 2, 3, 4, 5, 6, 7];




console.log( filter(arr, function(a) {
    return a % 2 == 0
}));

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

function filter(arr, func) {
    var result = [];
    var value;

    for (var i = 0; i < arr.length; i++) {
        value = arr[i];
        if ( func(value) ) {
            result.push(value);
        }
    }

    //console.log(result);
    return result;
}

function inBetween(a, b) {
    return true;
}









// var users = [{
//     name: "Вася",
//     surname: 'Иванов',
//     age: 20
// }, {
//     name: "Петя",
//     surname: 'Чапаев',
//     age: 25
// }, {
//     name: "Маша",
//     surname: 'Медведева',
//     age: 18
// }];
//
// users.sort(byField('name'));
// users.forEach(function(user) {
//     console.log( ( user.name ) );
// }); // Вася, Маша, Петя
//
// users.sort(byField('age'));
// users.forEach(function(user) {
//     console.log( ( user.name ) );
// }); // Маша, Вася, Петя
//
// function byField(str) {
//
//     if (str === "name") {
//         return function (a, b) {
//             return a.name > b.name ? 1 : -1;
//         }
//     } else if (str === "age") {
//         return function (a, b) {
//             return a.age > b.age ? 1 : -1;
//         }
//     }
//
// }

// var buffer = makeBuffer();
//
// function makeBuffer() {
//     var buffer = "";
//
//     function bf(value) {
//
//         if (arguments.length == 0) {
//             return buffer;
//         }
//
//         buffer = buffer + value;
//
//         // if (value !== undefined) {
//         //     //console.log('push');
//         //     buffer = buffer + "" + value;
//         // } else {
//         //     //console.log('pull');
//         //     return buffer;
//         // }
//     };
//
//     bf.clear = function () {
//         buffer = ""
//     }
//
//     return bf;
// }
//
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// alert( buffer() ); // 'Замыкания Использовать Нужно!'
//
// var buffer2 = makeBuffer();
// buffer2(0);
// buffer2(1);
// buffer2(0);
//
// buffer2.clear();
//
// alert( buffer2() ); // '010'

// buffer(2);
// buffer(0);
// buffer(1);
// buffer(7);
//
// console.log( buffer() );

// function sum(a) {
//     //var a = arguments[0];
//     return function (b) {
//         return a + b;
//         //return a + arguments[0];
//     }
// }
// console.log(sum(1)(2));

// function makeCounter() {
//     var currentCount = 1;
//
//     function counter() {
//         return currentCount++;
//     }
//
//     counter.set = function (value) {
//         currentCount = value;
//     };
//     counter.reset = function () {
//         currentCount = 1;
//     };
//
//     return counter;
// };
//
// var counter = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2
//
// counter.set(5);
// alert( counter() ); // 5

// function makeCounter() {
//     var currentCount = 1;
//
//     return {
//         getNext: function() {
//             return currentCount++;
//         },
//         set: function (value) {
//             currentCount = value;
//         },
//         reset: function () {
//             currentCount = 1;
//         }
//     };
// };
// var counter = makeCounter();
// console.log( counter.getNext() );
// console.log( counter.getNext() );
// counter.set(5)
// console.log( counter.getNext() );

// var a = 1;
//
// function getFunc() {
//     var a = 2;
//
//     var func = new Function('', 'alert(a)');
//
//     return func;
// }
//
// getFunc()(); // 1, из window

// //Здесь внутренняя функция будет искать – и находить currentCount
// // каждый раз в самом внешнем объекте переменных: глобальном объекте window.
// //В результате все счётчики будут разделять единое, глобальное текущее значение.
// var currentCount = 1;
//
// function makeCounter() {
//     return function() {
//         return currentCount++;
//     };
// }
//
// var counter = makeCounter();
// var counter2 = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2
//
// alert( counter2() ); // 3
// alert( counter2() ); // 4

// function makeCounter() {
//     var currentCount = 1;
//
//     return function() {
//         var currentCount;
//         // можно ли здесь вывести currentCount из внешней функции (равный 1)?
//     };
// }

// var a = 5;
//
// (function() {
//     alert(a)
// })()

// function test() {
//
//     alert( window );
//
//     // LexicalEnvironment = {
//     //     window: undefined
//     // }
//
//
//     var window = 5;
//
//     alert( window );
// }
//
// test();

// var value = 0;
//
// function f() {
//     if (1) {
//         value = true;
//     } else {
//         value = false;
//     }
//
//     alert( value );
// }
//
// f();
// console.log(value)

// if ("a" in window) {
//     a = 1;
// }
// alert( a ); // <-- error!

// function formatDate(date) {
//     var diff = new Date() - date; // разница в миллисекундах
//
//     if (diff < 1000) { // прошло менее 1 секунды
//         return 'только что';
//     }
//
//     var sec = Math.floor(diff / 1000); // округлить diff до секунд
//
//     if (sec < 60) {
//         return sec + ' сек. назад';
//     }
//
//     var min = Math.floor(diff / 60000); // округлить diff до минут
//     if (min < 60) {
//         return min + ' мин. назад';
//     }
//
//     // форматировать дату, с учетом того, что месяцы начинаются с 0
//     var d = date;
//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ];
//
//     for (var i = 0; i < d.length; i++) {
//         d[i] = d[i].slice(-2);
//     }
//
//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }
//
// alert( formatDate(new Date(new Date - 1)) ); // только что
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // 30 сек. назад
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // 5 мин. назад
//
// alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

// function formatDate(date) {
//     var now = new Date();
//     var dif = now - date;
//
//     if ( dif < 1000 ) {
//         return "только что";
//     } else if (dif < 60 * 1000) {
//         return dif / 1000 + " сек. назад";
//     } else if (dif < 60 * 60 * 1000) {
//         return dif / (60 * 1000) + " мин. назад";
//     } else {
//         return printDate(date);
//     }
// }
//
// function printDate(d) {
//     var year = "" + d.getFullYear();
//     var month = "" + (d.getMonth() + 1);
//     var day = "" + d.getDate();
//     var hours = "" + d.getHours();
//     var minutes = "" + d.getMinutes();
//
//     year = year.slice(-2);
//     if (month.length === 1) month = "0" + month;
//     if (day.length === 1) day = "0" + day;
//     if (hours.length === 1) hours = "0" + hours;
//     if (minutes.length === 1) minutes = "0" + minutes;
//
//
//     //console.log(year + '.' + month + '.' + day);
//
//
//     return day + '.' + month + '.' + year + " " + hours + ":" + minutes;
// }
//
// console.log( formatDate(new Date(new Date - 1)) ); // "только что"
//
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

// var d = new Date(2014, 0, 30); // 30 января 2014
// console.log( formatDate(d) ); // '30.01.14'
//
// function formatDate(d) {
//     var year = "" + d.getFullYear();
//     var month = "" + (d.getMonth() + 1);
//     var day = "" + d.getDate();
//
//     year = year.slice(-2);
//     if (month.length === 1) month = "0" + month;
//     if (day.length === 1) day = "0" + day;
//
//
//     //console.log(year + '.' + month + '.' + day);
//
//
//     return day + '.' + month + '.' + year
// }

// console.log( getSecondsToTomorrow() );
//
// function getSecondsToTomorrow() {
//     var dateNow = new Date();
//     var dateNext = new Date(
//         dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);
//     return Math.round( (dateNext - dateNow) / 1000 );
// }

// function getSecondsToday() {
//     var date = new Date();
//     return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
//
// console.log(getSecondsToday());

// function getLastDayOfMonth(year, month) {
//     var date = new Date (year, month + 1, 0);
//
//     return date.getDate();
// }
//
// console.log( getLastDayOfMonth(2012, 1) ); //29

// var date = new Date(2015, 0, 2);
//
// console.log( ( getDateAgo(date, 1) ) ); // 1, (1 января 2015)
// console.log( ( getDateAgo(date, 2) ) ); // 31, (31 декабря 2014)
// console.log( ( getDateAgo(date, 365) ) ); // 2, (2 января 2014)
//
// function getDateAgo(date, days) {
//     var dateCopy = new Date(date);
//
//     dateCopy.setDate(dateCopy.getDate() - days);
//
//     return dateCopy.getDate();
// }

// var date = new Date(2012, 0, 8);  // 3 янв 2012
// alert( getLocalDay(date) );       // вторник, выведет 2
//
// function getLocalDay(date) {
//     return date.getUTCDay() + 1;
// }

// var date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) );      // Должно вывести 'вт'
//
// function getWeekDay(date) {
//     return date.toLocaleString("ru", {weekday: 'short'});
// }
// function getWeekDay(date) {
//     var days = ["вс", "пн", "вт" ,"ср", "чт", "пт", "сб"];
//
//     return days[date.getDay()];
// }
// function getWeekDay(date) {
//     var result;
//
//     switch (date.getDay()) {
//         case 0:
//             result = "вс";
//             break;
//         case 1:
//             result = "пн";
//             break;
//         case 2:
//             result = "вт";
//             break;
//         case 3:
//             result = "ср";
//             break;
//         case 4:
//             result = "чт";
//             break;
//         case 5:
//             result = "пт";
//             break;
//         case 6:
//             result = "сб";
//             break;
//     }
//
//     return result;
// }

// var date = new Date(2012, 1, 20, 3, 12, 0);
//
// console.log(date);

// console.time("start")
// console.log(performance.now())
//
//
// console.timeEnd("start")

// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//     for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//     for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(f) {
//     var date = new Date();
//     for (var i = 0; i < 1000; i++) f(arr);
//     return new Date() - date;
// }
//
// // bench для каждого теста запустим много раз, чередуя
// var timeIn = 0,
//     timeLength = 0;
// for (var i = 0; i < 100; i++) {
//     timeIn += bench(walkIn);
//     timeLength += bench(walkLength);
// }
// alert( 'Время walkIn: ' + timeIn + 'мс' );
// alert( 'Время walkLength: ' + timeLength + 'мс' );


// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//     for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//     for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(f) {
//     var date = new Date();
//     for (var i = 0; i < 10000; i++) f(arr);
//     return new Date() - date;
// }
//
// alert( 'Время walkIn: ' + bench(walkIn) + 'мс' );
// alert( 'Время walkLength: ' + bench(walkLength) + 'мс' );

// var start = new Date; // засекли время
//
// // что-то сделать
// for (var i = 0; i < 100000; i++) {
//     var doSomething = i * i * i;
// }
//
// var end = new Date; // конец измерения
//
// alert( "Цикл занял " + (end - start) + " ms" );

// var now = new Date();
// console.log(now);

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));
//
// function sum() {
//     var result = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }

// function f(x) {
//     if (arguments.length === 0) {
//         return 0;
//     } else if (x === undefined) {
//         return 1;
//     }
// }
//
// console.log(f(undefined)); // 1
// console.log(f()); // 0

// function showWarning(obj) {
//     var width = obj.width || 200; // по умолчанию
//     var height = obj.height || 100;
//
//     var contents = obj.contents || "Предупреждение";
//
//     //console.log(contents)
// }
// showWarning({
//     contents: "Вы вызвали функцию" // и всё понятно!
// });

// function f(x) {
//     var y = arguments[0];
//     console.log(arguments[0] + "------" + arguments[1]);
//     console.log(x);
// }
//
// f(10, 15);

// var arr = [1, 2, 3, 4, 5];
// var sum = getSums(arr);
//
// console.log(arr);
// console.log(sum);
//
// function getSums(arr) {
//     var result = [];
//
//     arr.reduce( function (previousValue, currentItem) {
//         //console.log(previousValue + "-----" + currentItem);
//         result.push(  previousValue + currentItem);
//         return previousValue + currentItem;
//     }, 0);
//
//     return result;
// }

// var arr = ["Есть", "жизнь", "на", "Марсе"];
// var arrLength = arr.map( function(item) {
//     return item.length;
// });
//
// console.log(arrLength); // 4,5,2,5

// forEach – для перебора массива.
// filter – для фильтрации массива.
// every/some – для проверки массива.
// map – для трансформации массива в массив.
// reduce/reduceRight – для прохода по массиву с вычислением значения.

// var arr = [1, 2, 3, 4];
// var result = arr.reduce( function (previousValue, current) {
//     return current + previousValue;
// }, 0)
// console.log(result);

// function unique(arr) {
//     var obj = {};
//     var result = [];
//
//     for (var i = 0; i < arr.length; i++) {
//         obj[ arr[i] ] = arr[i];
//     }
//
//     for (var key in obj) result.push(key);
//
//     return result;
// }
//
// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];
//
// alert( unique(strings) ); // кришна, харе, 8-()

// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
// console.log( aclean(arr) );
//
// function aclean(arr) {
//     var obj = {};
//
//     for (var i = 0; i < arr.length; i++) {
//         var sorted = arr[i] // ЗОВ
//             .toLowerCase() // зов
//             .split('') // ['з','о','в']
//             .sort() // ['в','з','о']
//             .join(''); // взо
//         obj[sorted] = arr[i];
//     }
//
//     var result = [];
//
//     for (var key in obj) result.push( obj[key] );
//
//     return result;
// }

// var list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// //printList(list);
// printReverseList(list);
// function printReverseList(list) {
//     var tmp= list;
//     var mass = [];
//     while(tmp) {
//         mass.push(tmp.value);
//         tmp = tmp.next;
//     }
//     for (var i = mass.length - 1; i >= 0; i--) {
//         console.log ( mass[i] );
//     }
// }
// // function printReverseList(list) {
// //     if(list.next) {
// //         printReverseList(list.next);
// //     }
// //     console.log(list.value);
// // }
// // function printList(list) {
// //     console.log(list.value);
// //     if(list.next) {
// //         printList(list.next);
// //     }
// // }
// // function printList(list) {
// //     var tmp = list;
// //
// //     while(tmp) {
// //         console.log(tmp.value);
// //         tmp = tmp.next;
// //     }
// // }

// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };
//
// var people = [ vasya , masha , vovochka ];
//
// function sortAge(a, b) {
//     return a.age > b.age;
// }
//
// people.sort(sortAge);
//
// // теперь people: [vovochka, masha, vasya]
// alert(people[0].age) // 6

// var arr = [1, 2, 3, 4, 5];
//
// arr.sort(compareRandom);
//
// function compareRandom(a, b) {
//     return Math.random() - 0.5;
// }
//
// alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]

// var arr = ["HTML", "JavaScript", "CSS"];
//
// var arrSorted = arr.slice().sort();
//
// alert( arrSorted );
// alert( arr );

// function filterRangeInPlace(arr, a, b) {
//     for( var i = 0; i < arr.length; i++) {
//         if ( a <= arr[i] && b <= arr[i]) {
//             arr.splice(i, 1);
//         }
//     }
// }
//
// var arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4);
//
// console.log( arr ); // массив изменился: остались [3, 1]

// function camelize(str) {
//     var arr;
//
//     if(!str) return str;
//
//     arr = str.split('-');
//     //console.log(arr);
//
//     for (var i = 1; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//         console.log(arr[i]);
//     }
//
//     return arr.join('');
// }

// var obj = {
//     className: 'open menu'
// }
// function addClass(obj, cls) {
//     if( !~obj.className.indexOf(cls)) {
//         obj.className = obj.className + " " + cls;
//         obj.className = obj.className.trim();
//     }
// }
// addClass(obj, 'open');
// function addClass(obj, cls) {
//     var classes = obj.className ? obj.className.split(' ') : [];
//
//     for(var i = 0; i < classes.length; i++) {
//         if(classes[i] === cls) return;
//     }
//
//     classes.push(cls);
//
//     obj.className = classes.join(' ');
// }

// var user = {
//     name: "Петя",
//     age: 30
// }
//
// var keys = Object.keys(user);
//
// console.log( keys ); // name, age

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
// }
// var arr = [ 3, 4, 1, 2, 5, 8, 13, 12, 14, 15 ];
// arr.sort(compareNumeric);
// console.log(arr);

// arr.split(, ); - Разбить строку
// arr.split(', ', 2);
// arr.split('');
// arr.join(', '); - склеивать в с троку
// delete arr[0] - удаление с дыркой

// function getMaxSubSum(arr) {
//     var sumPrev = 0;
//     var sumCurrent = 0;
//     var sumMax = 0;
//     var i;
//
//     for(i = 0; i < arr.length; i++) {
//         sumCurrent += arr[i];
//         if (sumCurrent < 0) {
//             sumCurrent = 0;
//             if (sumPrev > sumMax) {
//                 sumMax = sumPrev;
//             }
//         } else {
//             if (sumCurrent > sumMax) {
//                 sumMax = sumCurrent;
//             }
//             sumPrev = sumCurrent;
//         }
//     }
//
//     return sumMax;
//
// }

// var arr = [];
//
// for (var i = 0; i < 99; i++) arr.push(2 + i);
// //console.log(arr);
//
// var p = 2;
// var multy = 2;
//
// while(true) {
//
//     for( var i = 0; i < arr.length; i++ ) {
//         if( arr.indexOf( multy * p ) !== -1  ) {
//             arr[arr.indexOf( multy * p )] = "";
//         }
//         if ( p < 100 ) p++;
//     }
//
//     if (multy < 100) {
//         multy++;
//         p = 2;
//     } else {
//          break;
//     }
// }
//
// console.log(arr);
// var sum = 0;
//
// for (var i = 0; i < arr.length; i++) {
//     if ( arr[i] !== "") {
//         sum += +arr[i];
//     }
// }
//
// console.log(sum);

// function filterRange(arr, a, b) {
//     var key;
//     var mass = [];
//     for (key = 0; key < arr.length; key++) {
//         if(a <= arr[key] && arr[key] <= b) {
//             mass.push( arr[key] );
//         }
//     }
//     console.log(mass);
//     return mass;
// }
//
// var arr = [5, 4, 3, 8, 0];
//
// var filtered = filterRange(arr, 3, 5);
// // теперь filtered = [5, 4, 3]
// // arr не изменился

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