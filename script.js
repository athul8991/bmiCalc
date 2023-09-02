

const submit = document.querySelector('#check');

const result = document.querySelector('#result');
// #result-text
const resultText = document.querySelector('#result-text');

submit.onclick = ()=>{

    let height = document.querySelector('#height');
    const weight =document.querySelector('#weight');
    const selMin = document.querySelector('.min');
    const selMax = document.querySelector('.max');
    if(height.value && weight.value){

    height =height.value/100;
    let bmi = weight.value/(height**2);
    bmi = +bmi.toFixed(2);
    const [minW,maxW]=findMinMax(weight.value,height);

    selMin.textContent = minW;
    selMax.textContent = maxW;

    switch(true){
        case bmi<18.5 :
            resultText.textContent = "Underweight";
            resultText.style.color ='blue';
            break;
        case bmi>=18.5 && bmi<=24.9 :
            resultText.textContent ="Normal";
            resultText.style.color ='yellowgreen';
            break;
        case bmi>=25 && bmi <= 29.9 :
            resultText.textContent = "Overweight";
            resultText.style.color ='rgb(235,174,12)';
            break;
        case bmi >= 30 :
            resultText.textContent = "Obese";
            resultText.style.color ='rgb(255,0,0)';
    }

    result.textContent = bmi;
    }


}

function findMinMax(w,h){

    const minweight =  (18.5*(h**2)).toFixed(2);
    const maxweight =(24.9*(h**2)).toFixed(2);
    console.log(+minweight,+maxweight);

    return [minweight,maxweight];

}