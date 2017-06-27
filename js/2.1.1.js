
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
x = 10;
x != x;

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

console.log("boolean: " + a[1] === b[1])