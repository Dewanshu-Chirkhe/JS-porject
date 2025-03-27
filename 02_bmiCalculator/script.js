const form = document.querySelector('form')

// console.log(form);

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height < 0 || isNaN(height)){
        result.innerHTML = "Please give a vaild height"
        return;
    }
    else if (weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a vaild weight";
        return;
    }
    result.innerHTML = `Height : ${height} m`
    result.innerHTML = `Weight : ${weight} kg`;
    const heightM = height / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
})