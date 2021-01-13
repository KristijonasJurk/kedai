const slide1data = [1, 3, 9, 5, 6, 4, 8, 7];
function generateSlide1(data) {
    const slide1 = document.querySelector('.slide1');
    for (let i = 0; i < data.length; i++) {
        const bigSlideLink = document.createElement('a');
        const bigSlide = document.createElement('div');
        bigSlide.setAttribute('class', 'bigSlide');

        const bigPhoto = document.createElement('img');
        bigSlide.setAttribute('alt', 'big shoe photo');
        bigPhoto.setAttribute('class', 'bigPhoto');
        bigPhoto.src = `./img/shoes/${data[i]}.png`;
        bigSlideLink.href = '../pages/shoes/shoes.html'

        bigSlideLink.appendChild(bigSlide);
        bigSlide.appendChild(bigPhoto);

        slide1.appendChild(bigSlideLink);
    }
}
generateSlide1(slide1data);

const slides1 = document.querySelectorAll('.bigSlide');
const left1 = document.querySelector('.fa-angle-left');
const right1 = document.querySelector('.fa-angle-right');
let index = 1;

// automatic slide
var myIndex = 0;
var timeOut;
carousel();
function carousel() {
    let i;
    // var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slides1.length) { myIndex = 1 }
    slides1[myIndex - 1].style.display = "block";
    timeOut = setTimeout(carousel, 6000); // Change image every 6 seconds
}

// left and right arrow key buttons
function plusSlides1(n) {
    clearTimeout(timeOut); // offset the carousel
    carousel();  // start the carousel again from 0 sec, to avoid slide skiping
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


// slide buttons

function slide1() {
    let totalItems = slides1.length;
    for (let i = 0; i < totalItems; i++) {
        document.querySelector('.slide1nav').innerHTML += `<i class="fa fa-minus" aria-hidden="true"></i>`;
    }
    for (let i = 0; i < totalItems; i++) {
        document.querySelectorAll('.slide1nav .fa-minus')[i].addEventListener('click', function () {
            clearTimeout(timeOut); // offset the carousel
            carousel();  // start the carousel again from 0 sec, to avoid slide skiping
            for (let j = 0; i < totalItems; j++) {
                slides1[j].style.display = "none";
                slides1[i].style.display = "block";
            }
        });
    }
}
slide1();