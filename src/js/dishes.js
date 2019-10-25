import dishesArr from './dishesArray.json';
import dish from '../templates/dish.hbs'
import { stringify } from 'querystring';


const markDishes = dish(dishesArr);
const menu = document.querySelector('#menu');
const body = document.querySelector('body');

const input = document.querySelector('.switch__input');
input.addEventListener('input', changeTheme);


let currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark-theme'){
  body.classList.add(currentTheme);
  input.checked=true;
}

function changeTheme() {
	if (input.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
	}
	else {
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menu.insertAdjacentHTML('afterbegin', markDishes);
console.log('markDishes :', markDishes);





