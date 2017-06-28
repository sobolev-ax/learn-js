"use strict";
// Этот код будет работать по современному стандарту ES5


var a = +prompt('a:', "");

switch (a) {
    case 0:
        alert("0");
        break;
    case 1:
        alert("1");
        break;
    case 2:
    case 3:
        alert("2, 3")
        break;
}

var browser = "Safari";
if (browser === "IE") {
    alert("IE");
} else if ( browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert("Supported browser");
} else {
    alert("i dont't know  ")
}





//Вывести простые числа
var isSimple = false;
for(var i = 2; i <= 10; i++) {

    for( var j = 2; j < i ; j++) {
        if( i % j === 0) {
            isSimple = false;
            break;
        } else  {
            isSimple = true;
        }
    }


    if(isSimple) {
        console.log(i);
        isSimple != isSimple;
    }
}

//Напишите цикл, который предлагает prompt
//ввести число, большее 100. Если посетитель
//ввёл другое число – попросить ввести ещё раз, и так далее.
//Цикл должен спрашивать число пока либо посетитель не введёт
//число, большее 100, либо не нажмёт кнопку Cancel (ESC).
var numberValue;
while(true) {
    numberValue = prompt("Ввести число, большее 100", '');
    if(numberValue > 100 || numberValue === null) break;
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (var i = 0; i < 3; i++) {
    alert( "номер " + i + "!" );
}
var i = 0;
while(i < 3) {
    alert( "номер " + i + "!" );
    i++;
}

//При помощи цикла for выведите чётные числа от 2 до 10.
for(var i = 0; i <=10; i++) {
    if( i % 2 === 0 ) alert(i);
}






var sum = 0;

while (true) {

    var value = +prompt("Введите число", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Сумма: ' + sum );

console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); //1
console.log(6 / "3");   //2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45

console.log("4" - 2); // 2

console.log("4px" - 2); //NAN

console.log(7 / 0); //infinity

console.log("  -9\n" + 5); //-9 5
console.log("  -9\n" - 5); // -14
console.log(5 && 2); //2

console.log(2 && 5); //5

console.log(5 || 0); //5

console.log(0 || 5); //5
console.log(null + 1);  //1
console.log(undefined + 1); //NAN
console.log(null == "\n0\n"); //false
console.log(+null == +"\n0\n"); //true




var age = 34;

if( !(age >= 14) || !(age <= 90)) {
    console.log("Вы нам подходите")
}
if( age < 14 && age > 90) {
    console.log("Вы нам подходите")
}



alert( null || 2 || undefined);
alert( alert(1) || 2 || alert(3) );
alert( alert(1) && alert(2) );





/*
Перепишите 'if' в '?'
*/
var message, result, login;
result =  (a + b < 4) ? "Мало" : "Много";
message = (login === 'Вася')     ? 'Привет' :
          (login === 'Директор') ? 'Здравствуйте' :
          (login === '')         ? 'Нет логина' : '' ;







/*
Проверка логина
важность: 3
*/
var visitorName, visitorPassword;

visitorName = prompt( "Кто пришел?", "" );

if (visitorName === "Админ") {
    visitorPassword = prompt ("Пароль", "" );
    if (visitorPassword === "Черный Властелин") {
        alert("Добро пожаловать");
    } else if (visitorPassword === null || visitorPassword === "") {
        alert( "Вход отменён" );
    } else {
        alert("Пароль неверен");
    }
} else if (visitorName === null || visitorName === ""){
    alert( "Вход отменён" );
} else {
    alert( "Я вас не знаю!" );
}


var a = (5,6);
//alert(a);


var ourPlanetName, userName;
ourPlanetName = "Земля";
userName = "sobolev";

var admin = "sobolev";
var name;
name = admin;
//alert(name);
/*alert("Hello")*/
console.log("");
console.log('testing');
console.log("3.134");
console.log('name="sobolev.ax"');
console.log("Hello world");
console.log("В этом строковом литерале \n две строки");


var then = new Date(2010, 0, 1);
var later = new Date(2010, 0, 1, 17, 10, 30);
var now = new Date();
var elapsed = now - then;
console.log(then);
console.log(later);
console.log(now);
console.log(elapsed + " - интервал в милисикундах");
//
console.log(later.getFullYear());
console.log(later.getMonth());
console.log(later.getDate());
console.log(later.getDay());
console.log(later.getHours());
console.log(later.getUTCHours());
console.log(later.toString());
console.log(later.toUTCString());
console.log(later.toLocaleDateString());
console.log(later.toLocaleTimeString());
console.log(later.toISOString());
var x2 = 10;
x2 = x2 !== x2;

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(-Number.MIN_VALUE/2);

console.log(Math.pow(2,53));
console.log(Math.round(.6));
console.log(Math.ceil(.1));
console.log(Math.floor(.6));
console.log(Math.abs(-56));
console.log(Math.max(12,34,666));
console.log(Math.min(23.55,3456,3245));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(23));
console.log(Math.pow(3, 1/3));
console.log(Math.sin(0));
console.log(Math.log(10));
console.log(Math.log(100)/Math.LN10);
console.log(Math.log(512)/Math.LN2);
console.log(Math.exp(3));

/*
Переменные за пределами функции - глобальные.

Типы данных: простые и объекты. (+ null, undefined).
Объект - коллекция свойств имя: значение.
Объект специального типа - массив.
Специальный тип объекта - функция. Функция - это объект, с которым связан исполняемый код. (они явл настоящими значениями, можно манипулировать как обчными объектами).
Функции которые пишутся для инициализации вновь создаваемых объектов (с оператором new) называются конструкторами. Каждый коснтруктор определяет класс объектов - множество объектов, инициализируемых этим конструктором. Классы можно представлять как подтипы объектного типа
*/
// Идентификатор - это просто имя.
var obj = { x:1, y:2 };
var mas = [1,2,3,4.5];
// // Литерал - значение указанное в программе

//  * Многострочные
//  * комментарии
 
console.log("\u00e9\u00e9\u00e9\u00e9\u00e9\u00e9");
// Суррогатная пара - символ юникода, пункты которого не умещаются в 16 бит - кодируются как последовательности из двух значений
// Различные строковые методы манипулируют 16-битными значениями
 var msg1 = "Hello js";
 console.log(msg1.length);
 console.log(msg1.charAt(0));
 console.log(msg1.charAt(msg1.length - 1));
 console.log(msg1.substring(1, 4));
 console.log(msg1.slice(1, 4));
 console.log(msg1.slice(-3));
 console.log(msg1.indexOf("j"));
 console.log(msg1.indexOf("l", 1));
 console.log(msg1.toUpperCase());
 console.log(msg1.split(" "));
 console.log(msg1.replace("js", "world"));

/^HTML/ // в начале строки
;/[1-9][0-9]*/
;/\bjs\b/;

var text = "testing: 1, 2, 3";
var pattern = /\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.replace(pattern, "#"));
console.log(text.split(/\D+/));

var a = ['a', 'b', 'c'];
var b = [];
for (var i=0; i < a.length; i++) {
	b[i] = a[i];
}

console.log("boolean: " + a[1] === b[1]);



function isInteger(num) {
 return num === (num ^ 0);
}

console.log(isInteger(125));
console.log(isInteger(-125));
console.log(isInteger(-125.454545));
console.log(isInteger(0.4));
var result;
result = prompt("Имя:", "");
alert(result);

alert( prompt('what is your name?','') );
var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

if (year != 2011) alert( 'А вот и неправильно!' );

var age = prompt('age', 18);

alert(age<3 ? 'Здравствуй малыш' : age<18 ? 'Привет' : age<100 ? 'Зравствуйте' : 'Какой необычный возраст....');

var answer = prompt("Каково \"оффициальное\" название Javascript?", "");
if (answer === "ECMAScript") {
 alert("Верно!");
} else {
 alert("Не знаете? \n \"ECMAScript\"!")
}

var answer = prompt("Число: ", "");
if (+answer > 0) {
 alert("1");
} else if (+answer < 0) {
 alert("-1");
} else if (+answer === 0) {
 alert("0");
 }