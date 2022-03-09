
// menu responsivo 

const showMenuToggle = document.querySelector('.menu_toggle')
const onMenu = document.querySelector('#on_full_Menu')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')


    showMenuToggle.addEventListener('click', event => {
        onMenu.classList.toggle('showOff')
        one.classList.toggle('onOne')
        two.classList.toggle('onTwo')
        three.classList.toggle('onThree')
    })



console.log(two)