const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('menu')

function navToggle(){
menuBtn.classList.toggle('open')
mobileMenu.classList.toggle('hidden')
document.body.classList.toggle('no-scroll')
}

menuBtn.addEventListener('click', navToggle)