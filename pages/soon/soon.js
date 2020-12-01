const button = document.querySelector('.newsletterSubmit');
const input = document.querySelector('.emailInput');
const error = document.querySelector('.emailError');

button.addEventListener('click', function () {
    if (input.value.length < 8) {
        input.style.border = "1px solid red";
        input.classList.add('redPlaceHolder');
        error.innerHTML = 'The email must contain more than 8 symbols';
        clear()
    }
    if (input.value.includes('@') == false) {
        input.style.border = "1px solid red";
        input.classList.add('redPlaceHolder');
        error.innerHTML = 'The email must contain a @ symbol';
        clear()
    }
    else {
        window.alert('Thank you ♥')
        clear()
    }
});

function clear() {
    input.value = '';
}