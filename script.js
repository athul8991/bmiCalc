

const submit = document.querySelector('#check');

const result = document.querySelector('#result');
// #result-text
const resultText = document.querySelector('#result-text');

submit.onclick = ()=>{

    let height = document.querySelector('#height');
    const weight =document.querySelector('#weight');

    height =height.value/100;
    let bmi = weight.value/(height**2);
    bmi = +bmi.toFixed(2);


    switch(true){
        case bmi<18.5 :
            resultText.textContent = "Underweight";
            break;
        case bmi>=18.5 && bmi<=24.9 :
            resultText.textContent ="Normal";
            break;
        case bmi>=25 && bmi <= 29.9 :
            resultText.textContent = "Overweight";
            break;
        case bmi >= 30 :
            resultText.textContent = "Obese";
    }

    result.textContent = bmi;



}