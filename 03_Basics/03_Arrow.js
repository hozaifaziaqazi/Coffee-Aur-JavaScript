console.log('Topic: Arrow Functions');

/* ++++++++++++++++ Arrow Functions ++++++++++++++++ */

/* <------------ Arrow Functions Start ------------> */

// const user = {
//     username: "hozaifaziaqazi",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username} , Welcome To My Site`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "tabbasumqazi"
// user.welcomeMessage()
// console.log(this);

function coffee(){
    let username = "salman"
    // console.log(this.username);
}

// coffee()

// you can't use "this" in func but you can use in obj


// these method will not ↓↓

// const chai = function(){
//     let username = "faisal"
//     console.log(this.username);
// }
// chai()

// this is arrow function ↓↓
const greentea = () => {
    let username = "salman"
    console.log(this.username);
}
    
// greentea()
    
// these method will not ↑↑

const addtwo = (num1, num2) => {
    // console.log(num1 + num2);
    return num1 + num2
}
// addtwo(5, 6)
// console.log(addtwo(5, 6));

// if you write with curly braces you have to write "return" ↑↑
// but if you write with parenthesis you don't have to write "return" ↓↓

/* ################ implesit return ################*/
const addthree = (num1, num2) => num1 + num2
// console.log(addthree(3, 5));
// you can do this also
const addfour = (num1, num2) => (num1 + num2)
console.log(addfour(4, 7));

// this will not return because it is not wraped in parenthesis
const addfive = () => {username: "fahad"}
console.log(addfive());

// this will return because it is wraped in parenthesis
const addsix = () => ({username: "hamza"})
console.log(addsix());

/* <------------ Arrow Functions End ------------> */