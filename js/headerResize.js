document.querySelector('.linksButton').addEventListener("click", function () {
    const menu = document.querySelector("nav").style.left;

    if (menu === '0px') {
        document.querySelector("nav").style.left = `-500px`;
    } else {
        document.querySelector("nav").style.left = `0px`;
    }
});

window.onscroll = function () { myFunction() };

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        if (window.innerWidth < 1200 || sticky + 1 > window.pageYOffset) {
            header.classList.remove("sticky");
        }
    }
}

const shoes = document.querySelector('.links a:nth-of-type(3)');
shoes.addEventListener('mouseover', function () {

})

function generateFooter() {
    const h1 = document.createElement('h1');
}
generateFooter();


