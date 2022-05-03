/* для зміни тіні під час вводу даних в інпут додаємо/видаляємо класс, який має певні властивості в CSS */

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

input.addEventListener('focus', function(){
    form.classList.add('form--active');
})

input.addEventListener('blur', function(){
form.classList.remove('form--active');
})