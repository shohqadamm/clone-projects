const menuBtn = document.getElementById('menu-btn')

function navToggle(){
menuBtn.classList.toggle('open')
}

menuBtn.addEventListener('click', navToggle)