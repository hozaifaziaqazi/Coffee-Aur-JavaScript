console.log('Functions In JS');

/* +++++++++++++++++++ Functions +++++++++++++++++++ */


/* <------------ Basic Functions Start ------------> */

// function SayMyName() {
//     console.log('H');
//     console.log('O');
//     console.log('Z');
//     console.log('A');
//     console.log('I');
//     console.log('F');
//     console.log('A');
// } 

// SayMyName()

//            ⬇     ⬇ these two called parameters 
// function Sum(num1, num2) {
//     console.log(num1 + num2);
// }

// function AddTwoNumbers(num1, num2) {
//     // let adding =  num1 + num2
//     // return adding

//     return num1 + num2
// }

// Sum(10, 20)       // ⬅
// Sum(10, '20')    // ⬅ 
//                 // ⬅ and these called argument
// Sum(10, 'a')   // ⬅ 
// Sum(10, null) // ⬅

// const result = Sum(10, 20)
// console.log("Result: ",result)

// const resultOfAddition = AddTwoNumbers(10, 10)
// console.log("Result of Addition: ",resultOfAddition)


// function UserLogInMessage(username = "hozaifa") {
//     if(username === undefined) {
//         console.log('Please Enter a Username');
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(UserLogInMessage("hozaifa"));
// console.log(UserLogInMessage("") );
// console.log(UserLogInMessage());

/* <------------- Basic Functions End -------------> */






/* <--------- Functions And Objects Start ---------> */

// function Calculate_Cart_Price(...num1){
//     return num1
// }

// console.log(Calculate_Cart_Price(200, 400, 600, 800, 1000));


// function Cart_Price(val1, val2, val3, ...num1){
//     return num1
// }

// console.log(Cart_Price(200, 400, 600, 800, 1000));

// const user = {
//     username: "hozaifaziaqazi",
//     prices: 199
// }

// function Handle_Object(anyObject) {
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

// }

// Handle_Object(user)
// Handle_Object({
//     username: "Hozaifa Zia",
//     price: 16789,
// })



const func_Array = [100, 300, 500, 700, 900]

function Hadle_Array(getArray){
    return getArray[2]
}

console.log(Hadle_Array(func_Array));
console.log(Hadle_Array([1, 3, 5, 7, 9]));

/* <--------- Functions And Objects End -----------> */