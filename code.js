//звездочки
const ratingStars = document.querySelectorAll('.rating-stars input[type="radio"]');
const submitBtn = document.querySelector('.submit-rating-btn');

let selectedRating = 0;

ratingStars.forEach((star, index) => {
    star.addEventListener('click', () => {
        selectedRating = index + 1;
        for (let i = 0; i < index + 1; i++) {
            ratingStars[i].nextElementSibling.style.color = '#ffcc00';
        }
        for (let i = index + 1; i < ratingStars.length; i++) {
            ratingStars[i].nextElementSibling.style.color = '#ccc';
        }
    });
});

submitBtn.addEventListener('click', () => {
    if (selectedRating > 0) {
        // Отправка рейтинга на сервер
        console.log('Рейтинг отправлен: ' + selectedRating);

        // Сброс выделения звезд
        for (let i = 0; i < ratingStars.length; i++) {
            ratingStars[i].nextElementSibling.style.color = '#ccc';
        }
    } else {
        alert('Пожалуйста, выберите рейтинг');
    }
});


//создание диаграммы
const satisfactionChart = new Chart(document.getElementById('satisfactionChart'), {
    type: 'bar',
    data: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        datasets: [{
            label: 'Уровень удовлетворенности',
            data: [4.5, 4.3, 4.7, 4.2, 4.6, 4.4, 4.5, 4.3, 4.6, 4.2, 4.4, 4.5], // Примерные данные
            backgroundColor: 'hotpink',
            borderColor: 'hotpink',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
                ticks: {
                    stepSize: 1
                },
                title: {
                    font: {
                        size: 40
                    }
                }
            },
            x: {
                title: {
                    font: {
                        size: 40
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

//форма
document.getElementById('telephone').addEventListener('input', function (e) {
    this.value = this.value
        .replace(/\D/g, '') // Удаляем все нецифровые символы
        .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g, '$1 $2 $3 $4 $5') // Разделяем цифры пробелами по схеме 1-3-3-2-2
        .trim(); // Удаляем лишние пробелы в начале и конце
});

document.getElementById('number').addEventListener('input', function (e) {
    this.value = this.value
        .replace(/\D/g, '') // Удаляем все нецифровые символы
        .replace(/(\d{4})(?=\d)/g, '$1 ') // Разделяем цифры пробелами по 4 штуки
        .trim(); // Удаляем лишние пробелы в начале и конце
});

//анимация
const selectBtns = document.querySelectorAll('.btn');
const handshakeImg = document.querySelector('.handshake-img');

selectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        handshakeImg.classList.add('show');
        setTimeout(() => {
            handshakeImg.classList.remove('show');
        }, 2000);
    });
});




