const containActives = document.querySelector('[data-js="containActive"]')
console.log(containActives)
containActives.addEventListener('click', e => {
    console.log(e.target.nextElementSibling)


    e.target.nextElementSibling.classList.toggle('off')


})