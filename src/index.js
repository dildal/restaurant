import './style.css';
import about from './about.js';
import menu from './menu.js';
import contact from './contact';


const container = document.querySelector('#content');
const aboutEl = about();
const menuEl = menu()
const contactEl = contact();
let current = contactEl;
container.appendChild(contactEl);

const navButtons = document.querySelectorAll('li')

navButtons.forEach(button => {
	button.addEventListener('click', handleClick)
})

function handleClick(e) {
	console.log(e.target.textContent)
	container.removeChild(current);
	if(e.target.textContent === 'About'){
		current = aboutEl;
		container.appendChild(current);
	}
	else if(e.target.textContent === 'Menu') {
		current = menuEl;
		container.appendChild(current);
	} else {
		current = contactEl;
		container.appendChild(current);
	}
}
