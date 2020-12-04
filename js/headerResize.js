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

// const search = document.querySelector(".fa-search");
// let searchIndex = 0;
// search.addEventListener('click', function () {
//     searchIndex++;
//     if (searchIndex % 2 == 0) {
//         document.querySelector(".rightside input").style.display = "inline-block";
//         document.querySelector(".rightside").style.width = "200px";
//     } else {
//         document.querySelector(".rightside input").style.display = "none";
//         // document.querySelector(".rightside").style.width = "auto";
//     }
// })



