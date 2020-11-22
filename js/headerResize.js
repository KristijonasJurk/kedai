window.onscroll = function () { myFunction() };

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        document.querySelector(".rightside input").style.display = "none";
        document.querySelector(".rightside a").style.display = "none";
        document.querySelector(".rightside").style.width = "110px";
        document.querySelector(".rightside").style.margin = "10px 0px 0px 0px";
    } else {
        header.classList.remove("sticky");
        document.querySelector(".rightside input").style.display = "inline-block";
        document.querySelector(".rightside a").style.display = "inline-block";
        document.querySelector(".rightside").style.width = "23%";
        document.querySelector(".rightside").style.margin = "5px 0px 0px 0px";
    }
}