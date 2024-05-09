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
console.log(typeof valueInString);
console.log(valueInString);

// what if we try to convert diffrent data types in Strings

// 33 => 33
// "33" => 33 
// true => true
// false => false
// null => null
// undefined => undefined