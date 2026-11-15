// 1. Управление терминалом (Модалкой)
const modal = document.getElementById('terminalModal');
const demoBtn = document.getElementById('demoBtn');
const closeModal = document.getElementById('closeModal');
const terminalOutput = document.getElementById('terminalOutput');

demoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    terminalOutput.innerHTML = '<p>> Запуск теста безопасности...</p>';
    startHackingSequence();
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 2. Имитация взлома (вывод текста построчно)
function startHackingSequence() {
    const messages = [
        "> Подключение к ядру AEGIS...",
        "> Обход системы защиты... [OK]",
        "> Анализ трафика...",
        "> Поиск уязвимостей... [0 НАЙДЕНО]",
        "> Тест шифрования AES-256... [УСПЕШНО]",
        "> Запуск ИИ-сканера...",
        "> СИСТЕМА ПОЛНОСТЬЮ ЗАЩИЩЕНА.",
        "> СЕАНС ЗАВЕРШЕН."
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < messages.length) {
            const p = document.createElement('p');
            p.innerText = messages[i];
            terminalOutput.appendChild(p);
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // Автоскролл вниз
            i++;
        } else {
            clearInterval(interval);
        }
    }, 600); // Задержка между строками
}

// 3. 3D-эффект для радара при движении мыши
document.addEventListener('mousemove', (e) => {
    const radar = document.querySelector('.radar');
    if(!radar) return;
    
    // Вычисляем положение мыши относительно центра экрана
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    radar.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 4. Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
