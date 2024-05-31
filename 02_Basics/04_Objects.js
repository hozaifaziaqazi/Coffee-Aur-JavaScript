console.log('Objects In JS');

/* ++++++++++++++++++++ Objects ++++++++++++++++++++ */



/* <---------- Constructer Objects Start ----------> */

// console.log('Constructer Objects In JS');

/* ############### SingleTon Objects ############### */
const User = new Object();
User.id = "31101";
User.name = "Hozaifa Zia";
User.username = "hozaifaziaqazi";
User.email = "hozaifaziaqazi@gmail.com";
User.age = 15;
User.city = "Bahawalpur";
User.state = "Punjab";
User.country = "Pakistan";
User.isLoggeIn = true;
User.lastLogInDays = ["Monday", "Tuesday", "Wednesday"];

// console.log(User);

const UserOne = {
    id: "31101",
    fullname: {
        fullusername: {
            username: "hozaifaziaqazi",
        },
        firstname: "Hozaifa",
        lastname: "Zia",
    },
    age: 15,
}

// console.log(UserOne.fullname.fullusername.username);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj3 = {7: "g", 8: "h", 9: "i"}

const obj4 = Object.assign(obj1, obj2, obj3);
// console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);

/* <----------- Constructer Objects End -----------> */





/* ------------- Objects In Array Start ------------- */

// console.log('Objects In Array In JS');

const arr_obj = [
    {
        id: "01",
        email: "S@gmail.com",
    },
    {
        firstname: "Sam",
        lastname: "Biden",
    },
    {
        num: "+11 000 00000000",
        country: "UK",
    },
]
// console.log(arr_obj[0].id);
// console.log(arr_obj[1].firstname);
// console.log(arr_obj[2].num);

// console.log(Object.keys(UserOne));
// console.log(Object.values(UserOne));
// console.log(Object.keys(arr_obj[0]));
// console.log(Object.values(arr_obj[0]));
// console.log(Object.keys(arr_obj[1]));
// console.log(Object.values(arr_obj[1]));
// console.log(Object.keys(arr_obj[2]));
// console.log(Object.values(arr_obj[2]));


// console.log(Object.entries(User));
// console.log(arr_obj[0].hasOwnProperty("id"));

/* -------------- Objects In Array End -------------- */





/* <---------- Objects De-Stucture Start ----------> */

console.log('Objects De-Stucture In JS');

const Course = {
    coursename: "JavaScript In Urdu",
    price: 1000,
    isFree: false,
    courseInstructer: "Hozaifa Zia",
}

// console.log(Course.courseInstructer);

const {courseInstructer: author} = Course
console.log(author);

/* <----------- Objects De-Stucture End -----------> */