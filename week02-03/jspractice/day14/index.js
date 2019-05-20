// const simpleCalculator = () => {
//     let number1= parseInt(document.querySelector('#number1').value);
//     let number2= parseInt(document.querySelector('#number2').value);
//     document.querySelector('#number1').value = 0;
//     return document.querySelector('#number2').value = number1 + number2;
// };

//     Martin's Solution:
// 1. create a solution in very small pieces you use this to see if JS works
// 2. create your function and check to see if it works (a checking function)
// 3. what are you going to do? From the DOM select input element and save it to a                                         variable. Now you decide what variables will be called so select names. We have selected our variables and           assigned query selectors to input classes.
// 4. Now we have to produce a calculation right?


// 1. console.log('it works');
// 2. const simpleCalculator = () => { 
//     console.log('it works');

//   const simpleCalculator = () => {     
//     const inputElm = document.querySelector ('.calc__input');
//     const number = parseInt(inputElm.value);
    

//     result += number;
 
//     const resultElm = document.querySelector('calc__result');
//     resultElm.textContent = result;
// };


let result = 0;
let operation = null;

const updateResult = () => {
  const resultElm = document.querySelector('.calc__result');
  resultElm.textContent = result;
}

const clearInput = () => {
  const inputElm = document.querySelector('.calc__input');
  inputElm.value = '0';
}

const plus = () => {
  equals();
  operation = '+';
};

const clear = () => {
  result = 0;
  updateResult();
  clearInput();
};

const equals = () => {
  const inputElm = document.querySelector('.calc__input');
  const number = parseInt(inputElm.value);

  switch(operation) {
    case '+':
      result += number;
      break;
    default:
      result = number;
      break;
  }

  updateResult();
  clearInput();
  operation = null;
}

document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', plus);

  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener('click', clear);

  const btnEquals = document.querySelector('#btn-equals');
  btnEquals.addEventListener('click', equals);
});

