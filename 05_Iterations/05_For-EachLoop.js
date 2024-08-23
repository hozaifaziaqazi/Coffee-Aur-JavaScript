console.log('For-Each Loop In JS');

/* ------------------ For-Each Loop ------------------ */

/* +++++++++++++++ For-Each Loop Start +++++++++++++++ */

const coding = ['js', 'python', 'java', 'cpp']

// coding.forEach(function (val) {console.log(val);})    
// coding.forEach( (val) => console.log(val) );

// function printMe(item) { console.log(item); }
// coding.forEach(printMe)

coding.forEach( (val,index, arr) => {
    // console.log(val, index, arr)
    // console.log(val);
    // console.log(index);
    // console.log(arr);
})


const myCode = [
    {
        LanguageName: "JavaScript",
        LanguageFileExtention: ".js"
    },
    {
        LanguageName: "Python",
        LanguageFileExtention: ".py"
    },
    {
        LanguageName: "Java",
        LanguageFileExtention: ".java"
    },
]

myCode.forEach( (value) => {
    console.log(value.LanguageName);
} );



/* ++++++++++++++++ For-Each Loop End +++++++++++++++ */ 