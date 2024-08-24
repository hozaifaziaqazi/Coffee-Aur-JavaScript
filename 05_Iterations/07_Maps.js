console.log('Maps In Js');

/* ---------------------- Maps ----------------------- */

/* ++++++++++++++++++++ Maps Start +++++++++++++++++++ */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {return num + 10} )
const newNums = myNumbers

.map( (num) => num * 10 )
.map( (num) => num + 1)
// .map( (num) => num - 1)
// .map( (num) => num / 10)
.filter( (num) => num >= 40 )
console.log(newNums);

/* +++++++++++++++++++++ Maps End ++++++++++++++++++++ */