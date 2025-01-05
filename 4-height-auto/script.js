document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const box = document.querySelector('.box');
    button.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});
