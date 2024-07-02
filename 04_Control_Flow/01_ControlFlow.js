// const isUserLoggedIn = true
// const temperature = "41"

// if (temperature === 41) {
//     console.log('Its 40 degrees');
// } 

// else {
//     console.log('Its not 40 degrees');
// }


// console.log('Execute');

// <, >, <=, >=, ==, ===, !=, !==



// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);



// const balance = 1000

// if (balance > 500) console.log('Test'), console.log('test2');



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

// Logical Operators

// And Operator (&&)
if (userLoggedIn && debitCard && 2==2) {
    console.log('Allow to buy course');
}

// OR Operator (||)
if (loggedInFromGoogle || loggedInFromEmail) {
    if (loggedInFromGoogle == true) {
        console.log('Logged In From Google');
    }
    if (loggedInFromEmail == true) {
        console.log('Logged In From Email');
    }
} else {
    console.log('Logged In From Google Or Email');
}

// Nullish Coalescing Assignment Operator

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 20
// val1 = null ?? 15 ?? 30
// val1 = null ?? undefined
// val1 = undefined ?? null
// val1 = null ?? undefined ?? 25
// val1 = undefined ?? null ?? 5

// console.log(val1);



// Terniary Operator

// Variable Operator ? true : false

const IceTeaPrice = 120
IceTeaPrice >= 100 ? console.log('More Then 100') : console.log('Less Then 100');

