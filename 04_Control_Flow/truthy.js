const userEmail = "hozaifa@outlook.in"

if (userEmail) {
    console.log('Got User Email');
} else {
    console.log("Dont't have User Email");
}



const EmptyArray = []
const EmptyObject = {}

if (EmptyArray.length === 0) {
    console.log('Array Is Empty');
}
if (Object.keys(EmptyObject).length === 0) {
    console.log('Object Is Empty');
}


// Falsy Values
// false, 0, -0, 0n, "", null, undefined, NaN


// Truthy Values
// true, {}, [], 42, "0", "false", " ", function(){}, new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity



// Link: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// Link: https://developer.mozilla.org/en-US/docs/Glossary/Truthy