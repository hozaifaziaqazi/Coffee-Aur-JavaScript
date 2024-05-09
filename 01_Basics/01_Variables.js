console.log("Topic: Variables");

const accountId = 144553
let accountEmail = "hozaifaziaqazi@gmail.com"
var accountPassword = "12345"
accountCity = "Bahawalpur"
let accountState

// accountId = 2 // not allowed


accountEmail = "ho@ho.com"
accountPassword = "21212121"
accountCity = "Karachi"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity,accountState])