const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navMobile = document.getElementById('nav-mobile');
    navMobile.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);



function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'O título da sua página',
			text: 'Um texto de resumo',
			url: 'https://seusite.com/sua_url',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}

