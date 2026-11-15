// Находим все кнопки на сайте
const buttons = document.querySelectorAll('button');

// Для каждой кнопки добавляем действие при клике
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Находим название машины внутри той же карточки
        const carName = this.parentElement.querySelector('h2').innerText;
        alert('Вы нажали "Купить" на ' + carName + '. Отличный выбор!');
    });
});
