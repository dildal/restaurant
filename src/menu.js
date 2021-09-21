import LemonMeringue from './menu-pics/lemon-meringue.jpg';
import Tiramisu from './menu-pics/tiramisu.jpeg'
const menuItems = [
	{
		name: 'Lemon Meringue Tarts',
		img: LemonMeringue,
		desc: 'Honey sweetened lemon tart with a coconut milk meringue on top of a baked-in-house tart.'
	},
	{
		name: 'Tiramisu',
		img: Tiramisu,
		desc: 'Housemade cashew tofu creme on top of a light simple cake.  Soaked in espresso sourced from Black Brewty'
	},
	{
		name: 'Tiramisu',
		img: Tiramisu,
		desc: 'Housemade cashew tofu creme on top of a light simple cake.  Soaked in espresso sourced from Black Brewty'
	}
]

const menu = () => {
	const menu = document.createElement('div');
	menu.classList.add('menu');
	menuItems.forEach(dessert => {
		let dessertCard = document.createElement('div');
		let dessertName = document.createElement('div');
		let dessertImage = document.createElement('img');
		let dessertDescription = document.createElement('div');

		dessertCard.classList.add('menu-card');
		dessertName.textContent = dessert.name;
		dessertImage.classList.add('menu-img');
		dessertImage.src = dessert.img;
		dessertDescription.textContent = dessert.desc;

		dessertCard.appendChild(dessertName);
		dessertCard.appendChild(dessertImage);
		dessertCard.appendChild(dessertDescription);

		menu.appendChild(dessertCard);
	})

	return menu;
}

export default menu;