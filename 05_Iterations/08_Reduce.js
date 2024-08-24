console.log('Reduce In JS');

/* <--------------------- Reduce --------------------> */

/* ++++++++++++++++++ Reduce Start +++++++++++++++++++ */

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curr) {
//     console.log(`acc: ${acc} curr: ${curr}`);
//     return acc + curr
// },0 )

// console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc + curr,0 )

// console.log(myTotal);


const ShopingCart = [
    {
        CourseName: 'JavaScript',
        price: 12999
    },
    {
        CourseName: 'Python',
        price: 14999
    },
    {
        CourseName: 'AI,Ml',
        price: 18999
    },
    {
        CourseName: 'Data Science',
        price: 19999
    },
]

const priceToPay = ShopingCart.reduce( (acc, item) => acc + item.price ,0 )
console.log(priceToPay);



/* +++++++++++++++++++ Reduce End ++++++++++++++++++++ */