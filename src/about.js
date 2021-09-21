const about = () => {
	const about = document.createElement('div');
	about.classList.add('content');
	about.textContent = 
		`
			Ooh Baby we like it raw!! Ooh Baby's is a
			fully vegan raw desserts bar that uses only locally
			sourced ingredients.  At Ooh Baby's we put the Ooh
			in Ooh Baby. 

		`
	return about;
}

export default about