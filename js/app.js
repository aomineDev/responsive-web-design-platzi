const hamburgerBox = document.querySelector('.hamburger-box'),
sidenavOverlay = document.querySelector('.sidenav-overlay'),
links = document.querySelectorAll('.link'),
ipad = window.matchMedia('screen and (max-width: 767.8px)');

function validation(e) {  //const validation = e => {
	if (e.matches) {
		hamburgerBox.addEventListener('click', addActive);
		sidenavOverlay.addEventListener('click',remove);
		for(let i of links){
			i.addEventListener('click',remove);
		}
	}else{
		hamburgerBox.removeEventListener('click', addActive);
		sidenavOverlay.removeEventListener('click',remove);
		for(let i of links){
			i.removeEventListener('click',remove);
		}
	}
}

ipad.addListener(validation);
validation(ipad);

function addActive(){
	this.classList.toggle('active');
	document.body.classList.toggle('body-hidden');
}
function remove(){
	hamburgerBox.classList.remove('active');
	document.body.classList.remove('body-hideen');
}