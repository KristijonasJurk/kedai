const slides1 = document.querySelectorAll('.bigSlide');
const left1 = document.querySelector('.fa-angle-left');
const right1 = document.querySelector('.fa-angle-right');
let index = 1;

function plusSlides1(n) {
    showSlides(index += n);
}

function showSlides(n) {
    if (n > slides1.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides1.length;
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slides1[index - 1].style.display = "block";
}
