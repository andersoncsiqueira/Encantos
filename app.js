
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



// Popup doação 

const wrapper = document.querySelector('.wrapper')
const buttonDoacao = document.querySelector('#button__doacao')
const closeX = document.querySelector('.closeX')

buttonDoacao.addEventListener('click', ()=> {
    wrapper.style.display = 'flex'
})

closeX.addEventListener('click', ()=> {
    wrapper.style.display = 'none'
})