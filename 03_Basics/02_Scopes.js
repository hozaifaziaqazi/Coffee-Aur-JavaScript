console.log('Topic: Scopes');

/* ++++++++++++++++++++ Scopes ++++++++++++++++++++ */

/* <-------------- Basic Scopes Start ------------> */ 

let a = 300  // this is global scope
var c = 300  // this is global scope
if (true) {         // ⬅ this 'if' is an block scope
    let a = 10     
    const b = 20  
    var c = 30   
    console.log("Inside: ", a );  
}              

// block scope start with an curly brackets {}
// on every curly brackets {{{{}}}} an new scope will created
//  you con use global scope in block scope
//  you can not use block scope in global scope
// but var is an exception this rule is not aply on var

console.log(a);
// console.log(b);
// console.log(c);













/* <-------------- Basic Scopes End --------------> */