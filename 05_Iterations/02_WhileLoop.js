console.log('While Loops Is JS');

/* ------------------ While Loops ----------------- */

/* +++++++++++++++ While Loops Start ++++++++++++++ */

// let index = 0
// while (index <= 10) {
//     console.log(`Value Of Index Is ${index}`);
//     index = index +2
// }

// let myarray = ["Flash", "Batman", "Superman"]

// let arr = 0
// while (arr < myarray.length) {
//     console.log(`Value is ${myarray[arr]}`);
//     arr = arr + 1
// }

/* ############### Do While Loop ################  */

// let score = 1
// do {
//     console.log(`Score is ${score}`);
//     score ++
// } while (score <= 10);

// let score = 11
// do {
//     console.log(`Score is ${score}`);
//     score ++
// } while (score <= 10);

let School_Class = 0
do {
    School_Class ++
    if (School_Class < 5) {
        console.log(`Ibrahim Studied These Classes ${School_Class}`);
    }
    if (School_Class == 5) {
        console.log(`Ibrahim Study In Class ${School_Class}`);
        continue
    }
    if (School_Class > 5) {
        console.log(`Ibrahim Have To Study In These Classes ${School_Class}`);
        continue
    }
} while (School_Class < 10);

/* +++++++++++++++ While Loops End +++++++++++++++ */