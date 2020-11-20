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
var myIndex = 0;
carousel();
function carousel() {
    var i;
    // var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slides1.length) { myIndex = 1 }
    slides1[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3500); // Change image every 3.5 seconds
}

// slide 2 automatic slide

// var myIndex = 0;
// carousel2();
// function carousel2() {
//     var i;
//     var x = document.getElementsByClassName("smallSlide");
//     for (let i = 0; i < x.length; i++) {
//         const widthItem = (document.querySelectorAll('.smallSlide')[0].offsetWidth) * i;
//         document.querySelector('.slide2area').style.marginLeft = `-${widthItem}px`;
//         myIndex++;
//         return;
//     }
//     setTimeout(carousel2, 1000); // Change image every 3.5 seconds
// }