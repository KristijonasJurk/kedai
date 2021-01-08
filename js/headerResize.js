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
const footer = document.querySelector('footer');
const data1 = [
    { h3: 'ABOUT KEDAI', a1: 'How we got started?', a2: 'Our partners', a3: 'Personnel' },
    { h3: 'ABOUT KEDAI', a1: 'Returns', a2: 'Shipping to non-EU countries', a3: 'Career' },
    { h3: 'ABOUT KEDAI', a1: 'Shops', a2: 'FAQ', a3: 'Tours' }
];
function generateFooter1(data1) {
    // first section
    const form1 = document.createElement('section');
    for (i = 0; i < data1.length; i++) {
        const aboutHelpContacts = document.createElement('div');
        const h3 = document.createElement('h3');
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const a3 = document.createElement('a');

        const h3text = document.createTextNode(data1[i].h3);
        const a1text = document.createTextNode(data1[i].a1);
        const a2text = document.createTextNode(data1[i].a2);
        const a3text = document.createTextNode(data1[i].a3);

        form1.setAttribute('class', 'form1');
        a1.setAttribute('class', 'hyperlink');
        a2.setAttribute('class', 'hyperlink');
        a3.setAttribute('class', 'hyperlink');
        if (i == 0) {
            aboutHelpContacts.setAttribute('class', 'about');
        } else if (i == 1) {
            aboutHelpContacts.setAttribute('class', 'help');
        } else if (i == 2) {
            aboutHelpContacts.setAttribute('class', 'contacts');
        }
        h3.appendChild(h3text);
        a1.appendChild(a1text);
        a2.appendChild(a2text);
        a3.appendChild(a3text);

        footer.appendChild(form1);
        form1.appendChild(aboutHelpContacts);
        aboutHelpContacts.appendChild(h3);
        aboutHelpContacts.appendChild(a1);
        aboutHelpContacts.appendChild(a2);
        aboutHelpContacts.appendChild(a3);
    }
    footer.appendChild(form1);
}
generateFooter1(data1);

const data2 = [
    { h3: 'PAYMENTS', a1: 'fa fa-cc-visa', a2: 'fa fa-cc-mastercard', a3: 'fa fa-paypal', a4: 'fa fa-btc', a5: 'fa fa-cc-amex' },
    { h3: 'SHIPPING', img1: './img/dhl-logo.png', img2: './img/ups-logo.png', img1class: 'dhl', img2class: 'ups' },
    { h3: 'FOLLOW US', s1: 'fa fa-facebook-square', s2: 'fa fa-instagram', s3: 'fa fa-github', s1link: 'https://www.facebook.com/kristijonas.jurksas', s2link: 'https://www.instagram.com/kristijonasjurk/', s3link: 'https://github.com/KristijonasJurk' }
];
function generateFooter2(data2) {
    // second section
    const form2 = document.createElement('section');
    for (i = 0; i < data2.length; i++) {
        if (i == 0) {
            const payment = document.createElement('div');
            const h3 = document.createElement('h3');
            const a1 = document.createElement('a');
            const a2 = document.createElement('a');
            const a3 = document.createElement('a');
            const a4 = document.createElement('a');
            const a5 = document.createElement('a');

            payment.setAttribute('class', 'payment');
            a1.setAttribute('class', `${data2[i].a1}`);
            a2.setAttribute('class', `${data2[i].a2}`);
            a3.setAttribute('class', `${data2[i].a3}`);
            a4.setAttribute('class', `${data2[i].a4}`);
            a5.setAttribute('class', `${data2[i].a5}`);

            const h3text = document.createTextNode(data2[i].h3);
            h3.appendChild(h3text);

            payment.appendChild(h3);
            payment.appendChild(a1);
            payment.appendChild(a2);
            payment.appendChild(a3);
            payment.appendChild(a4);
            payment.appendChild(a5);

            form2.appendChild(payment);
        } else if (i == 1) {
            const shipping = document.createElement('div');
            const h32 = document.createElement('h3');
            const a11 = document.createElement('a');
            const a22 = document.createElement('a');
            const img1 = document.createElement('img');
            const img2 = document.createElement('img');

            shipping.setAttribute('class', 'shipping');
            img1.setAttribute('class', `${data2[i].img1class}`);
            img2.setAttribute('class', `${data2[i].img2class}`);
            img1.src = data2[i].img1;
            img2.src = data2[i].img2;
            const h32t = document.createTextNode(data[i].h3);

            h32.appendChild(h32t);
            shipping.appendChild(h32);
            shipping.appendChild(a11);
            shipping.appendChild(a22);
            a11.appendChild(img1);
            a22.appendChild(img2);

            form2.appendChild(shipping);
        } else if (i == 2) {
            const socials = document.createElement('div');
            const h33 = document.createElement('h3');
            const a13 = document.createElement('a');
            const a23 = document.createElement('a');
            const a33 = document.createElement('a');

            const h33t = document.createTextNode(data[i].h3);
            a13.href = data2[i].s1link;
            a23.href = data2[i].s2link;
            a33.href = data2[i].s3link;
            a13.setAttribute('class', `${data2[i].s1}`);
            a23.setAttribute('class', `${data2[i].s2}`);
            a33.setAttribute('class', `${data2[i].s3}`);
            socials.setAttribute('class', `socials`);

            h33.appendChild(h33t);
            socials.appendChild(h33);
            socials.appendChild(a13);
            socials.appendChild(a23);
            socials.appendChild(a33);

            form2.appendChild(socials);
        }
    }
    footer.appendChild(form2);
}
generateFooter2(data2);

const data3 = ['NIKE', 'adidas', 'New Balance', 'Puma', 'Reebook', 'Jordan', 'Vans', 'Asics', 'Converse', 'Li-Ning', 'Sale', 'Accessories'];
function generateFooter3(data) {
    // thrid section
    const form3 = document.createElement('section');
    const brandlist = document.createElement('div');
    const h3 = document.createElement('h3');
    const brands = document.createElement('adiv');
    const h3text = document.createTextNode('BRANDS AND CATEGORIES');
    h3.appendChild(h3text);
    for (i = 0; i < data.length; i++) {
        const a = document.createElement('a');
        const atext = document.createTextNode(data[i]);
        a.setAttribute('class', 'hyperlink');
        a.href = "./pages/brands/brands.html";
        a.appendChild(atext);
        brands.appendChild(a);
    }
    form3.appendChild(brandlist);
    brandlist.appendChild(h3);
    brandlist.appendChild(brands);

    footer.appendChild(form3);
}
generateFooter3(data3);
