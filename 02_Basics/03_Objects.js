console.log('Objects In JS');

/* ++++++++++++++++++++ Objects ++++++++++++++++++++ */

/* <---------------- Objects Start ----------------> */

// Single Ton Object
// Object.create

/* ################# Object Literal ################# */

let MySymbol = Symbol("Key1")

const User = {
    "name": "Hozaifa Zia",
    "username": "hozaifaziaqazi",
    [MySymbol]: "hozai",
    age: 15,
    email: "hozaifaziaqazi@gmail",
    city: "Bahawalpur",
    state: "Punjab",
    country: "Pakistan",
    isLoggeIn: false,
    lastLogInDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(User);
// console.log(User.name);
// console.log(User["username"]); 
// console.log(User[MySymbol]); 
// console.log(typeof User[MySymbol]); 

User.isLoggeIn = true;
// console.log(User);
// Object.freeze(User)
User.lastLogInDays.push("Thursday") // it will overruled by Object.freeze()
User.email = "hozaifa@outlook"
// console.log(User);

User.greeting = function () {
    console.log("Hello");
}
User.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
}
// console.log(User.greeting());
// console.log(User.greetingTwo());






/* <----------------- Objects End -----------------> */