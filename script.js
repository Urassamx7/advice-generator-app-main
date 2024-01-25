//"https://api.adviceslip.com/advice"  API

const textField = document.querySelector('h1');
const idSpace = document.querySelector('span');
const button = document.querySelector('button');
console.log('Hi, Dev!')

const getAdvice =  () => {
  
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
    return response.json();
    })
    .then(data => {
        idSpace.textContent = data.slip.id
        textField.textContent = data.slip.advice
    })
    
}
const adviceSetter = () =>{
getAdvice();  
}
button.addEventListener('click', adviceSetter);