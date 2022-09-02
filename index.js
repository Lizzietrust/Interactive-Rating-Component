const main = document.querySelector('.container');
const thank = document.querySelector('.thank');
const submit = document.querySelector('#button-sub');
const result = document.querySelector('#result');
const values = document.querySelectorAll('.btn-num');

submit.addEventListener('click', () => {
    thank.classList.remove('hidden')
    main.style.display = 'none'
})

values.forEach((value) => {
    value.addEventListener('click', () => {
        result.innerHTML = value.innerHTML
    })
})

