const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
  
        i += 100;
        setTimeout(() => increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
    }
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count');

    increaseNumberAnimationStep(0, element, 5000);
}

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-contacts__group');
        formContainer.classList.add('form-contacts__other-input');

        const input = document.createElement('input');
        input.placeholder = "Введите ваш вариант";
        input.type = "text";
        input.classList = 'form-contacts__input';

        formContainer.appendChild(input);
        document.querySelector('.contacts form').insertBefore(formContainer, document.querySelector('.form-contacts__submit')); 
    }
   
    const otherInput = document.querySelector('.form-contacts__other-input');
    
    if (event.target.value !== 'other' && otherInput) { // Задание 5
        document.querySelector('.contacts form').removeChild(otherInput); // Задание 4
    }
});

function updateScroll() {
    if (window.scrollY > 0) {
        const header = document.querySelector('header');

        header.classList.add('header__scrolled');
    } else {
        const header = document.querySelector('header');

        header.classList.remove('header__scrolled');
    }

    // Запуск анимации увеличения числа
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;

    if (windowBottomPosition >= countElementPosition && !animationInited) {
        initIncreaseNumberAnimation();
        animationInited = true;
    }
}

window.addEventListener('scroll', updateScroll);

function addSmoothScroll(link) {
    link.addEventListener('click', onLinkClick);
}

function onLinkClick(event) {
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addSmoothScroll(anchor);
});
addSmoothScroll(document.querySelector('.about__more'));