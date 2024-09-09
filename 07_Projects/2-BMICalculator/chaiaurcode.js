const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    // if (height,weight === 0 || height, weight < 0 || isNaN(height,weight)) {
    //     results.innerHTML = `Please give a valid height and weight ${weight}`
    // } else
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height `
    } else if (weight === 0 || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight `
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            results.innerHTML = `<span> Under Weight  ${bmi} </span>`
            
        } else if (bmi <= 24.9) {
            results.innerHTML = `<span> Normal Weight  ${bmi} </span>`
            
        } else {
            results.innerHTML = `<span> Overweight  ${bmi} </span>`
            
        }
    }


    
})