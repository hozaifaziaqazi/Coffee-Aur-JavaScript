console.log('IIFE In JS');

/* ++++++++++++++++++++ IIFE ++++++++++++++++++++ */

/* <------------------ IIFE Start ------------------> */

// Immediately Invoked Function Expression 

(function elachi(){
    console.log('DB CONNECTED SUCCESSFULLY');
}) ();

// new method to call func immediately ↑↑
// first we wrap func in parenthesis
// then we write this for "()" execution of func
// like before we execute func like this "elachi()"
// that last parenthesis is to execute func
// you have to write ";" at the end of func
// because IIFE dont know where to end the Context

// This is an Named IIFE ↓↓
(function lemon () {
    console.log('DB CONNECTED SUCCESSFULLY LEMON');
}) ();

// IIFE With Arrow Function ↓↓
// These Are Simple IFFE ↓↓
( () => {
    console.log('DB CONNECTED SUCCESSFULLY Arrow');
} ) ();

( (name) => {
    console.log(`DB CONNECTED SUCCESSFULLY ${name}`);
} ) ('SIR')







/* <------------------ IIFE End ------------------> */