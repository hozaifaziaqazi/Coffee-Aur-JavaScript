console.log('Promises In JS');


// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, cryptograpy, network call
//     setTimeout(() => {
//         console.log('Async Task is Complete');
//         resolve();
//     } ,1000)
// })



// promiseOne.then(() => {
//     console.log('Promise Consumed');
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async Task2 is Complete');
//         resolve();
//     } ,1000)
// }).then(() => {
//     console.log('Promise Consumed 2nd Time');
// })



// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             username: 'hozaifaziaqazi',
//             email: 'hozaifaziaqazi@gmail',
//             Course: 'Chai Aur JavaScript',
//             Channel: 'Chai aur Code',
//             Instructor: 'Hitesh Choudhary',
//         });
//     } ,1000)
// })

// promiseThree.then((data) => {
//     console.log(data);
//     console.log(data.Course);
// })



// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({
//                 username: 'hozaifaziaqazi',
//                 password: '12345678'
//             })
//         } else{
//             reject('ERROR: Something Went Wrong');
//         }
//     },1000)
// });

// // you can use diffrent syntax like given below
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// // this is called chainnig eg. | .then().then().then()
// .then((data) => {
//     console.log(data);
// })
// // .ctach handles error
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => console.log('The Promise is Either Resolved or Rejected'));



// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({
//                 username: "javascript",
//                 password: "123456768"
//             })
//         } else {
//             reject("ERROR: Something went wrong in JS");
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()





// Fetch

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(`E: ${error}`);
//     }
// }

// getAllUsers()





fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(`E: ${error}`))