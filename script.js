// Функция для добавления эффекта "свечения" для каждой кнопки
function addGlowingEffect(buttonId) {
    const button = document.getElementById(buttonId);

    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.7)';
    });

    button.addEventListener('mouseout', () => {
        button.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    });
}

// Инициализация эффекта свечения для всех кнопок
addGlowingEffect('instagram-button');
addGlowingEffect('whatsapp-button');
addGlowingEffect('telegram-button');
addGlowingEffect('youtube-button');
