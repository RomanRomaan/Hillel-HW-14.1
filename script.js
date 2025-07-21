const prevBtn = document.querySelector('.slider-btn.prev')
const nextBtn = document.querySelector('.slider-btn.next')
const sliderText = document.querySelector('.slider-text')
const SliderImg = document.querySelector('.slider-img')
const authorName = document.querySelector('.author-name')
const aurhoeRole = document.querySelector('.author-role')
const dots = document.querySelectorAll('.dot');


let currentImg = 1
let sliderTextActive = {
    1: {
        text: "Ми звикли брати на себе відповідальність та завжди гарантуємо чесну, вчасну допомогу, навіть у ситуаціях, коли більшість безсилі.",
        author: "Іван Петренко",
        position: "Керуючий партнер"

    },
    2: {
        text: "Вір у себе, навіть якщо ніхто інший не вірить.",
        author: "Антон Гриневич",
        position: "Помічник керівника"
    },
    3: {
        text: "Маленькі кроки сьогодні — великі перемоги завтра.",
        author: "Олег Соловей",
        position: "Менеджер"
    },
    4: {
        text: "Удосконалюй себе щодня і не зупиняйся на досягнутому.",
        author: "Василь Коваль",
        position: "CoFaunder"

    }
};

function updateSliderItems() {
    SliderImg.src = 'https://randomuser.me/api/portraits/men/' + currentImg + '.jpg'
    sliderText.textContent = sliderTextActive[currentImg].text
    authorName.textContent = sliderTextActive[currentImg].author
    aurhoeRole.textContent = sliderTextActive[currentImg].position
}
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentImg - 1].classList.add('active');
}
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        currentImg = idx + 1;
        updateSliderItems();
        updateDots();
    });
});

nextBtn.addEventListener('click', function () {
    currentImg++
    if (currentImg > 1) {
        prevBtn.classList.remove('disabled')
    }
    if (currentImg >= 4) {
        nextBtn.classList.toggle('disabled');
        ;
    }
    updateSliderItems()
    updateDots()

});

prevBtn.addEventListener('click', function () {
    currentImg--
    if (currentImg < 4) {
        nextBtn.classList.remove('disabled')
    }
    if (currentImg <= 1) {
        prevBtn.classList.toggle('disabled');
    }
    updateSliderItems()
    updateDots()

});