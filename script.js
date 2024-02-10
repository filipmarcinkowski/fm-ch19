'use strict';

const btn = document.querySelector('.input__btn');
const inputField = document.querySelector('.input__input');
const errorMsg = document.querySelector('.input__error');

const checkAdress = function (e) {
  e.preventDefault();

  const input = inputField.value;

  const a = input.slice(0, input.indexOf('@')).length;
  const b = input.slice(input.indexOf('@'), input.indexOf('.')).length;
  const c = input.slice(input.indexOf('.'), input.length).length;

  const correctOrder = a >= 1 && b >= 3 && c >= 3 && input.includes('@', '.');

  if (input === '') {
    errorMsg.classList.remove('hidden');
    inputField.classList.add('error');
  } else if (input !== '' && !correctOrder) {
    errorMsg.classList.remove('hidden');
    inputField.classList.add('error');
  } else {
    errorMsg.classList.add('hidden');
    inputField.classList.remove('error');
    inputField.value = '';
  }
};

btn.addEventListener('click', checkAdress);
