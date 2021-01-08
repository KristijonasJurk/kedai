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
const data1 = [
    { h3: 'ABOUT KEDAI', a1: 'How we got started?', a2: 'Our partners', a3: 'Personnel' },
    { h3: 'ABOUT KEDAI', a1: 'Returns', a2: 'Shipping to non-EU countries', a3: 'Career' },
    { h3: 'ABOUT KEDAI', a1: 'Shops', a2: 'FAQ', a3: 'Tours' }
];

function generateFooter(data1) {
    // first section
    for (i = 0; i < data1.length; i++) {
        const form1 = document.createElement('section');
        const aboutHelpContacts = document.createElement('div');
        const h3 = document.createElement('h3');
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const a3 = document.createElement('a');

        const h3text = document.createTextNode(data[i].h3);
        const a1text = document.createTextNode(data[i].a1);
        const a2text = document.createTextNode(data[i].a2);
        const a3text = document.createTextNode(data[i].a3);

        form1.setAttribute('class', 'form1');
        a1.setAttribute('class', 'hyperlink');
        a2.setAttribute('class', 'hyperlink');
        a3.setAttribute('class', 'hyperlink');


    }






}
generateFooter(data1);


