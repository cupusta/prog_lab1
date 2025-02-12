//Задание 1

console.log('Я Русский ✨')

let type1;
let num = 0;
let string = "hello";
let boolean = true;
let object = {name: "Gleb", age: 5};

console.log("Пременная намбер:", typeof(num));
console.log("Переменная стринг:", typeof(string));
console.log("Переменная булин:", typeof(boolean));
console.log("Переменная объект:", typeof(object));

//Задание 2
console.log("Task 2")

let a = 10;
let b = 20;

console.log("a = b", a === b);
console.log("a < b", a < b);
console.log("a <= b", a <= b);
console.log("a > b", a > b);

//Задание 3
console.log("Task 3")

let c = false;
let d = null;
let E;

console.log("Значение переменной c:", c);
console.log("Значение переменной d:", d);
console.log("Значение переменной e:", E);

//Задание 4
console.log("Task 4")

console.log("1" + 2 + 3); //происходит конкатенация строк. "1" + 2 = "12", а затем "12" + 3 = "123"
console.log(1 + 2 + "3"); //сначала выполняется сложение чисел: 1 + 2 = 3, а затем 3 + "3" = "33"
console.log("1" - 2); //пытается преобразовать строку в число. "1" → 1, 1 - 2 = -1
console.log("1" +- 2); //это то же самое, что и "1" - 2, тк + и - имеют одинаковый приоритет и выполняются слева направо
console.log("1" + "1" - "1"); //сначала "1" и "1" складываются как строки, затем из них вычитается 1
console.log("foo" +- "bar"); //не может преобразовать foo и bar в числа, но не может
console.log(0 === "0");//строка "0" преобразуется в число 0
console.log(0.5 + 0.1 === 0.6);  // 0.5 + 0.1 = 0.6, результат true
console.log(0.1 + 0.2 === 0.3);  // 0.1 + 0.2 = 0.30000000000000004, не равно 0.3, результат false
console.log(true + true + true === 3);  // true + true + true = 1 + 1 + 1 = 3, результат true
console.log(true === 1);  // true превращается в 1, 1 == 1 → true
console.log(true === 1);  // Типы разные (boolean и number), результат false
console.log(1 < 2 < 3);  // 1 < 2 → true, true < 3 → true
console.log(3 > 2 > 1);  // 3 > 2 → true, true > 1 → false
console.log(9007199254740991 + 1 === 9007199254740991 + 2);  // Проблемы с точностью, результат true
console.log(Math.sqrt(-1) === Math.sqrt(-1));  // Math.sqrt(-1) = NaN, NaN == NaN → false

//Задание 5
console.log("Task 5")

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation;

concatenation = str1 + str2 + str3;
console.log(concatenation);

//Задание 6
console.log("Task 6")

let str = 20;
let v = 5;

console.log(str + v);
console.log(str - v);
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

// 1
console.log("1");
let age = 25;

if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
} else {
    console.log("Для всех возрастов");
}

if (age >= 1 && age <= 17) {
    console.log("Для детей");
} else {
    console.log("Для всех возрастов");
}

// 2
console.log("2");
let p = 10, o = 20;
let max = (p > o) ? p : o;
console.log("Максимальное значение: " + max);

// 3
console.log("33");
let number = 5;

switch (number) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        console.log("На ветке сидит " + number + " вороны");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("На ветке сидит " + number + " ворон");
        break;
    default:
        console.log("Число слишком большое или некорректное");
}

// 4
console.log("4");
let i = 1;
while (i <= 50) {
    console.log(i);
    i += 2;
}

for (let j = 1; j <= 50; j += 2) {
    console.log(j);
}

// 5
console.log("5");
let sum = 0;
for (let k = 1; k <= 15; k++) {
    if (k === 5 || k === 7) {
        continue;
    }
    sum += k;
}
console.log("Сумма чисел от 1 до 15 без 5 и 7: " + sum);

// 6
console.log("6");

let l = 2, y = 5;
let result = 1;
let exp = y;

while (exp > 0) {
    result *= l;
    exp--;
}

console.log(x + " в степени " + y + " = " + result);
