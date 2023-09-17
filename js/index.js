const slider = document.querySelector('.slider');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

const mainCrousel = document.getElementById('mainCrousel');
const mainCrousel2 = document.getElementById('mainCrousel2');

let direction;

prev.addEventListener("click", function () {
    if (direction == -1 || direction != 1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = "translateX(50%)";
    if (mainCrousel.classList.contains("display-none")) {
        mainCrousel2.classList.toggle("display-none");
        setTimeout(() => {
            mainCrousel.classList.toggle("display-none");
        }, 500);
    }
    else{
        mainCrousel.classList.toggle("display-none");
        setTimeout(() => {
            mainCrousel2.classList.toggle("display-none");
        }, 400);
    }
})
next.addEventListener("click", function () {
    if (direction == 1) {
        slider.prepend(slider.lastElementChild);
        direction = -1;
    }
    else if (direction != -1) {
        direction = -1;
    }
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = "translateX(-50%)";
    if (mainCrousel.classList.contains("display-none")) {
        mainCrousel2.classList.toggle("display-none");
        setTimeout(() => {
            mainCrousel.classList.toggle("display-none");
        }, 500);
    }
    else{
        mainCrousel.classList.toggle("display-none");
        setTimeout(() => {
            mainCrousel2.classList.toggle("display-none");
        }, 400);
    }
})

slider.addEventListener("transitionend", function () {
    if (direction == -1) {
        slider.appendChild(slider.firstElementChild);
    }
    else if (direction == 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.7s';
    });
})

// dropVisible

const showdrop = document.getElementById('showDrop');
const drop = document.getElementById('drop');

const showDrop = () => {
    showdrop.classList.toggle('dropVisible');
    if (showdrop.classList.contains('dropVisible')) {
        drop.style.backgroundColor = "#f2f2f2";
    }
    else {
        drop.style.backgroundColor = "";
    }
}