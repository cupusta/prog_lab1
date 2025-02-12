//Задание 1

console.log('Я Русский ✨')

let buffer;
let num = 0;
let string = "hello";
let boolean = true;
let object = {name: "Gleb", age: 5};

console.log("Пременная намбер:", typeof(num));
console.log("Переменная стринг:", typeof(string));
console.log("Переменная булин:", typeof(boolean));
console.log("Переменная объект:", typeof(object));

//Задание 2

let a = 10;
let b = 20;

console.log("a = b", a == b);
console.log("a < b", a < b);
console.log("a <= b", a <= b);
console.log("a > b", a > b);

//Задание 3

let c = false;
let d = null;
let e;

console.log("Значение переменной c:", c);
console.log("Значение переменной d:", d);
console.log("Значение переменной e:", e);

//Задание 4

console.log("1" + 2 + 3); //происходит конкатенация строк. "1" + 2 = "12", а затем "12" + 3 = "123"
console.log(1 + 2 + "3"); //сначала выполняется сложение чисел: 1 + 2 = 3, а затем 3 + "3" = "33"
console.log("1" - 2); //пытается преобразовать строку в число. "1" → 1, 1 - 2 = -1
console.log("1" +- 2); //это то же самое, что и "1" - 2, тк + и - имеют одинаковый приоритет и выполняются слева направо
console.log("1" + "1" - "1"); //сначала "1" и "1" складываются как строки, затем из них вычитается 1
console.log("foo" +- "bar"); //не может преобразовать foo и bar в числа, но не может
console.log(0 == "0");//строка "0" преобразуется в число 0
console.log(0.5 + 0.1 == 0.6);  // 0.5 + 0.1 = 0.6, результат true
console.log(0.1 + 0.2 == 0.3);  // 0.1 + 0.2 = 0.30000000000000004, не равно 0.3, результат false
console.log(true + true + true == 3);  // true + true + true = 1 + 1 + 1 = 3, результат true
console.log(true == 1);  // true превращается в 1, 1 == 1 → true
console.log(true === 1);  // Типы разные (boolean и number), результат false
console.log(1 < 2 < 3);  // 1 < 2 → true, true < 3 → true
console.log(3 > 2 > 1);  // 3 > 2 → true, true > 1 → false
console.log(9007199254740991 + 1 == 9007199254740991 + 2);  // Проблемы с точностью, результат true
console.log(Math.sqrt(-1) == Math.sqrt(-1));  // Math.sqrt(-1) = NaN, NaN == NaN → false

//Задание 5

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation;

concatenation = str1 + str2 + str3;
console.log(concatenation);

//Задание 6

let str = 20;
let x = 5;

console.log(str + x);
console.log(str - x);
console.log(str * "2");
console.log(str / 2);

//Задание 7

console.log("Task 7")

let a2 = "12"
let b2 = "7.15"
a2 = Number(a2)
b2 = Number(b2)
console.log(Math.round(a2 % b2))

//Задание 8

console.log("Task 8")

let x = 2
if (x !== 2 && x !== 6){
    console.log((x * x - 7 * x + 10) / (x * x - 8 * x + 12))
}
else{
    console.log("На 0 делить нельзя")
}

