const modal = document.getElementById('carModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.getElementById('closeModal');
const carCards = document.querySelectorAll('.car-card');

// Открытие окна при клике на карточку
carCards.forEach(card => {
    card.addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') return;

        const imgSrc = this.querySelector('img').src;
        const title = this.querySelector('h3').innerText;
        const price = this.querySelector('.price').innerText;

        modalImg.src = imgSrc;
        modalTitle.innerText = title;
        modalPrice.innerText = price;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Закрытие окна
closeModal.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Кнопки "Купить"
const buyButtons = document.querySelectorAll('.car-card button');
buyButtons.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); 
        const carName = this.parentElement.querySelector('h3').innerText;
        this.innerText = 'Оформляем...';
        this.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            alert('Заявка на ' + carName + ' успешно отправлена!');
            this.innerText = 'Купить';
            this.style.backgroundColor = ''; 
        }, 1000);
    });
});

// Кнопка в модалке
document.getElementById('buyModalBtn').addEventListener('click', function() {
    const carName = modalTitle.innerText;
    this.innerText = 'Отправка...';
    this.style.backgroundColor = '#28a745';

    setTimeout(() => {
        alert('Вы оформили заявку на ' + carName + '!');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.innerText = 'Оформить заявку';
        this.style.backgroundColor = '';
    }, 1000);
});
