import {Loader} from '@googlemaps/js-api-loader'

const loader = new Loader({
	apiKey: 'AIzaSyAeA5OittZ6Xu1cGMOZ5UMAm35Bni4OjnM',
	version: 'weekly',
})

const contact = () => {
	const contact = document.createElement('div');
	contact.classList.add('contact')
	
	const contactHeader = document.createElement('div');
	contactHeader.classList.add('contact-header');

	const contactBlurb = document.createElement('div');
	contactBlurb.classList.add('contact-blurb');
	contactBlurb.textContent = 'Come visit our store in Sparkle City now! The store is open until we run out of desserts!'
	contactHeader.appendChild(contactBlurb);

	const contactInfo = document.createElement('div');
	contactInfo.classList.add('contact-info');
	contactInfo.textContent = `Ooh Baby \n (894) 555-7667 \n 474 Hampton Dr. \n Spartanburg, SC 29304`
	contactHeader.appendChild(contactInfo);

	const mapContainer = document.createElement('div');
	mapContainer.classList.add('map');

	contact.appendChild(contactHeader)
	contact.appendChild(mapContainer);



	return contact
}

loader.load().then(() => {
	const map = new google.maps.Map(document.querySelector('.map'), {
		center: {lat: 34.94002338025735, lng: -81.93077237340827},
		zoom: 15,
	})
})


export default contact;