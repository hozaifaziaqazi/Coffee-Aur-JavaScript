console.log('Topic: Scopes');

/* ++++++++++++++++++++ Scopes ++++++++++++++++++++ */

/* <-------------- Basic Scopes Start ------------> */ 

// let a = 300  // this is global scope
// var c = 300  // this is global scope
// if (true) {         // ⬅ this 'if' is an block scope
//     let a = 10     
//     const b = 20  
//     var c = 30   
    // console.log("Inside: ", a );  
// }              

// block scope start with an curly brackets {}
// on every curly brackets {{{{}}}} an new scope will created
//  you con use global scope in block scope
//  you can not use block scope in global scope
// but var is an exception this rule is not aply on var

// console.log(a);
// console.log(b);
// console.log(c);

/* <-------------- Basic Scopes End --------------> */





/* <------------- Advance Scope Start -------------> */

function one(){
    const username = "hozaifaziaqazi"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

// func 'two' is inner block scope 
// func 'one' is outer block scope
// you can not use inner block scope in outer block scope
// but you can use outer block scope in inner block scope

/* 
elders can't take ice cream from little ones 
But the younger can steal the ice cream from the elders
*/


if (true) {
    const username = "hozaifazia"
    if (username === "hozaifazia") {    
        const website = "youtube"
        // console.log(username + " " + website); 
    }
    // console.log(website);
}

// console.log(username);


/* ################### Intresting ################### */

console.log(addone(5));
function addone(num){
    return num + 1
}

addtwo(5)

const addtwo = function(num){
    return num + 2
}

/* <------------- Advance Scope End -------------> */