import deleteElement from './deleteElement';
import addHobby from './addHobby';
import checkedHobby from './checkedHobby';
import hideControl from './hideControl';
import showWarningForm from './showWarningForm';
import hideWarningForm from './hideWarningForm';

const userList = document.querySelector('.js-user-items');
const otherList = document.querySelector('.js-items');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');

function setHobby(event) {
  event.keyCode === 13 && addHobby(event.target, userList);
}

function handlers(event) {
  const elementParent = event.target.parentNode;

  if (event.target.classList.contains('js-warning')) {
    showWarningForm(form);
  }

  if (event.target.classList.contains('js-control-plus')) {
    hideControl(elementParent.parentNode);
    addHobby(elementParent, userList);
    checkedHobby(elementParent.parentNode);
  }
}

userList.addEventListener('click', deleteElement);
otherList.addEventListener('click', handlers);
form.addEventListener('click', hideWarningForm);
input.addEventListener('keyup', setHobby);
