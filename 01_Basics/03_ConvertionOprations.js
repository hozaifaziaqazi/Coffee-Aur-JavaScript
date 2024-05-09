console.log("Convertion Oprations");


let score = undefined

// you can print the typeof from both ways
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);

// what if we try to convert diffrent data types in Numbers

// 33 => 33
// "33" => 33
// "33abc" => Nan
// true => 1
// false => 0
// null => 0
// undefined => NaN






let grade = undefined

let valueInBoolean = Boolean(grade)
// console.log(typeof valueInBoolean);
// console.log(valueInBoolean);

// what if we try to convert diffrent data types in Booleans

// 0 => false
// 1 => true
// 33 => 33 if you give number more then 1 like 2, 3, 4, 5 or 45, 66 it will always print true
// "33" => 33 in string it will always print true
// null => false
// undefined => false





let point = true
let valueInString = String(point)
// console.log(typeof valueInString);
// console.log(valueInString);

// what if we try to convert diffrent data types in Strings

// 33 => 33
// "33" => 33 
// true => true
// false => false
// null => null
// undefined => undefined

// ************** Oprations ************** \\

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hozaifa"

let str3 = str1 + str2;
// console.log(str3);

// don't do this tyoe of code because it is hard read

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3);

// console.log(+true);
// console.log(+"");

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

// This is Increment and Decrement
console.log("Increment ++");
let a = 100
console.log("Value of 'a' is", a);
console.log("a++", a++)
console.log(a);
console.log("++a", ++a)
console.log(a);

console.log("Decriment --");
let b = 100
console.log("Value of 'b' is", b);
console.log("b--", b--)
console.log(b);
console.log("--b", --b)
console.log(b);