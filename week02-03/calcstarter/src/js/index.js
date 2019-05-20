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