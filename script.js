// Получаем кнопку для переключения темы
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Проверяем сохраненную тему в localStorage
const savedTheme = localStorage.getItem('theme');

// Если сохранена светлая тема, то применяем её
if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    // Если тема не сохранена, по умолчанию ставим темную
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = "🌙";
}

// Обработчик для переключения темы
themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.replace('dark-mode', 'light-mode');
        themeToggleBtn.textContent = "🌞";
        localStorage.setItem('theme', 'light-mode');  // Сохраняем светлую тему
    } else {
        document.body.classList.replace('light-mode', 'dark-mode');
        themeToggleBtn.textContent = "🌙";
        localStorage.setItem('theme', 'dark-mode');  // Сохраняем темную тему
    }
});
