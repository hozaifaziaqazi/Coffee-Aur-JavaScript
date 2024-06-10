console.log('Functions In JS');

/* +++++++++++++++++++ Functions +++++++++++++++++++ */

/* <--------------- Functions Start ---------------> */

function SayMyName() {
    console.log('H');
    console.log('O');
    console.log('Z');
    console.log('A');
    console.log('I');
    console.log('F');
    console.log('A');
} 

// SayMyName()

//            ⬇     ⬇ these two called parameters 
function Sum(num1, num2) {
    console.log(num1 + num2);
}

function AddTwoNumbers(num1, num2) {
    // let adding =  num1 + num2
    // return adding

    return num1 + num2
}

// Sum(10, 20)       // ⬅
// Sum(10, '20')    // ⬅ 
//                 // ⬅ and these called argument
// Sum(10, 'a')   // ⬅ 
// Sum(10, null) // ⬅

// const result = Sum(10, 20)
// console.log("Result: ",result)

// const resultOfAddition = AddTwoNumbers(10, 10)
// console.log("Result of Addition: ",resultOfAddition)


function UserLogInMessage(username = "hozaifa") {
    if(username === undefined) {
        console.log('Please Enter a Username');
        return
    }
    return `${username} just logged in`
}

// console.log(UserLogInMessage("hozaifa"));
// console.log(UserLogInMessage("") );
console.log(UserLogInMessage());









/* <---------------- Functions End ----------------> */