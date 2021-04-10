const navItems = document.querySelector('#navbar-items')
const burgerMenu = document.querySelector('#burger-menu')

burgerMenu.addEventListener('click', function () {
	navItems.classList.toggle('is-active')
})
