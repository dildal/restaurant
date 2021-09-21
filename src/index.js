import './style.css';
import about from './about.js'
import menu from './menu.js'

const container = document.querySelector('#content');
const aboutEl = about();
const menuEl = menu()
container.appendChild(menuEl);
