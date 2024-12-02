const error = document.querySelector('#error-msg');
const submit = document.querySelector('.arrow');
const input = document.querySelector('#email');
const errorImage = document.querySelector('.error-img');

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

submit.addEventListener('click', () => {
    if (!validateEmail(input.value)) {
        error.innerHTML = "Please provide a valid email";
        errorImage.classList.remove('hide');
    } else {
        error.innerHTML = '';
        errorImage.classList.add('hide');
    }
})

