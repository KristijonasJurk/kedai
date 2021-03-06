const nikeSlidedata = [
    { title: 'Nike Air Max Triax 96', moto: 'Bring power to your steps', photo: "./img/shoes/more-shoes/25.png", background: 'linear-gradient(90deg, rgba(167,67,77,1) 26%, rgba(0,0,0,1) 99%)', button: '#A7434D' },
    { title: 'Nike Air Max 96', moto: 'Designed with perfection', photo: "./img/shoes/more-shoes/26.png", background: 'linear-gradient(90deg, rgba(223,171,33,1) 11%, rgba(44,55,85,1) 72%)', button: 'rgba(223,171,33,1)' },
    { title: 'Nike M2K Tekno Retro', moto: 'Comfort in every step', photo: "./img/shoes/more-shoes/23.png", background: 'linear-gradient(90deg, rgba(86,140,104,1) 41%, rgba(107,114,132,1) 78%)', button: '#568c68' }
];

function generateNikeSlide(data) {
    const slider = document.querySelector('.slider');
    for (i = 0; i < data.length; i++) {

        const sneakerContainer = document.createElement('div');
        sneakerContainer.setAttribute('class', 'sneakerContainer');
        const productBoxLink = document.createElement('a');
        productBoxLink.setAttribute('class', 'productBoxLink');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const sneaker = document.createElement('div');
        sneaker.setAttribute('class', 'sneaker');
        const circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        const img = document.createElement('img');
        const sneakerInfo = document.createElement('div');
        sneakerInfo.setAttribute('class', 'sneakerInfo');
        const sneakerTitle = document.createElement('h1');
        sneakerTitle.setAttribute('class', 'sneakerTitle');
        const h3 = document.createElement('h3');
        const sneakerSizes = document.createElement('div');
        sneakerSizes.setAttribute('class', 'sneakerSizes');
        const sneakerBuyNow = document.createElement('div');
        sneakerBuyNow.setAttribute('class', 'sneakerBuyNow');
        const buttonBuyNow = document.createElement('button');
        const buttonData = [38, 40, 42, 44];
        for (j = 0; j < buttonData.length; j++) {
            const button = document.createElement('button');
            const size = document.createTextNode(buttonData[j])
            button.appendChild(size);
            sneakerSizes.appendChild(button);
        }
        circle.style.background = `${data[i].background}`;
        img.src = data[i].photo;
        img.setAttribute('alt', 'sneaker');
        const sneakerTitleText = document.createTextNode(data[i].title);
        sneakerTitle.appendChild(sneakerTitleText);
        const h3Text = document.createTextNode(data[i].moto);
        h3.appendChild(h3Text);
        const buttonBuyNowText = document.createTextNode('BUY NOW');
        buttonBuyNow.appendChild(buttonBuyNowText);
        buttonBuyNow.style.background = `${data[i].button}`;

        slider.appendChild(sneakerContainer);
        sneakerContainer.appendChild(productBoxLink);
        productBoxLink.appendChild(card);
        card.appendChild(sneaker);
        card.appendChild(sneakerInfo);
        sneaker.appendChild(circle);
        sneaker.appendChild(img);
        sneakerInfo.appendChild(sneakerTitle);
        sneakerInfo.appendChild(h3);
        sneakerInfo.appendChild(sneakerSizes);
        sneakerInfo.appendChild(sneakerBuyNow);
        sneakerBuyNow.appendChild(buttonBuyNow);
    }
}
generateNikeSlide(nikeSlidedata)


// movement animation to happen
const card = document.querySelectorAll('.card');
const container = document.querySelectorAll('.sneakerContainer');
const title = document.querySelectorAll('.sneakerTitle');
const sneaker = document.querySelectorAll('.sneaker img');
const buyNow = document.querySelectorAll('.sneakerBuyNow button');
const description = document.querySelectorAll('.sneakerInfo h3');
const sizes = document.querySelectorAll('.sneakerSizes');

// height of elements
const mainbodyOffset = document.querySelector('.mainbody').offsetTop;
const slide2Offset = document.querySelector('.slide2').offsetTop;
const sliderOffset = document.querySelector('.nikeSlide .slider').offsetTop;
const containerHeight = container[0].offsetHeight;
const containerHeight1 = container[0].offsetTop;
const containerHeight2 = container[1].offsetTop;
const containerHeight3 = container[2].offsetTop;
// offset
const heightToSneakers1 = mainbodyOffset - 800 + slide2Offset + sliderOffset + containerHeight1 + (containerHeight / 2);
const heightToSneakers2 = mainbodyOffset - 800 + slide2Offset + sliderOffset + containerHeight2 + (containerHeight / 2);
const heightToSneakers3 = mainbodyOffset - 800 + slide2Offset + sliderOffset + containerHeight3 + (containerHeight / 2);
// width of element
const container0Width = container[0].offsetLeft + 400;
const container1Width = container[1].offsetLeft + 200;
const container2Width = container[2].offsetLeft;
const containerWidth = container[0].offsetLeft;
// centering the width and height in the center of the card
container.forEach(function (elem) {
    elem.addEventListener('mousemove', (e) => {
        if (elem === container[0]) {
            const yAngle = heightToSneakers1 + 100 - e.pageY
            const xAngle = container0Width + (containerWidth / 2) - e.pageX;
            let yAxis = yAngle / 25;
            let xAxis0 = xAngle / 25;
            card[0].style.transform = `rotateY(${xAxis0}deg) rotateX(${yAxis}deg)`;
            if (window.innerWidth < 900 && window.innerWidth > 600) {
                let yAxis = (yAngle + 300) / 25;
                let xAxis0 = (xAngle - 200) / 25;
                card[0].style.transform = `rotateY(${xAxis0}deg) rotateX(${yAxis}deg)`;
            } if (window.innerWidth < 600) {
                let yAxis = (yAngle + 100) / 25;
                let xAxis0 = (xAngle - 300) / 25;
                card[0].style.transform = `rotateY(${xAxis0}deg) rotateX(${yAxis}deg)`;
            }
        }
        if (elem === container[1]) {
            const yAngle = heightToSneakers2 + 100 - e.pageY
            const xAngle = container1Width + (containerWidth / 2) - e.pageX;
            let yAxis = yAngle / 25;
            let xAxis1 = xAngle / 25;
            card[1].style.transform = `rotateY(${xAxis1}deg) rotateX(${yAxis}deg)`;
            if (window.innerWidth < 900 && window.innerWidth > 600) {
                let yAxis = (yAngle + 300) / 25;
                card[1].style.transform = `rotateY(${xAxis1}deg) rotateX(${yAxis}deg)`;
            } if (window.innerWidth < 600) {
                let yAxis = (yAngle + 500) / 25;
                card[1].style.transform = `rotateY(${xAxis1}deg) rotateX(${yAxis}deg)`;
            }
        }
        if (elem === container[2]) {
            const yAngle = heightToSneakers3 - e.pageY;
            const xAngle = container2Width + (containerWidth / 2) - e.pageX;
            let yAxis = (yAngle + 100) / 25;
            let xAxis2 = xAngle / 25;
            card[2].style.transform = `rotateY(${xAxis2}deg) rotateX(${yAxis}deg)`;
            if (window.innerWidth < 900 && window.innerWidth > 600) {
                let yAxis = (yAngle + 620) / 25;
                let xAxis2 = (xAngle + 200) / 25;
                card[2].style.transform = `rotateY(${xAxis2}deg) rotateX(${yAxis}deg)`;
            } if (window.innerWidth < 600) {
                let yAxis = (yAngle + 900) / 25;
                let xAxis2 = (xAngle + 150) / 25;
                card[2].style.transform = `rotateY(${xAxis2}deg) rotateX(${yAxis}deg)`;
            }
        }
    });
});
//animate in
container.forEach(function (elem2) {
    elem2.addEventListener('mouseenter', (e) => {
        if (elem2 === container[0]) {
            card[0].style.transition = 'none';
            //popout effect
            title[0].style.transform = 'translateZ(135px)';
            sneaker[0].style.transform = 'translateZ(175px) rotateZ(25deg)';
            description[0].style.transform = 'translateZ(110px)';
            sizes[0].style.transform = 'translateZ(65px)';
            buyNow[0].style.transform = 'translateZ(60px)';
        } if (elem2 === container[1]) {
            card[1].style.transition = 'none';
            //popout effect
            title[1].style.transform = 'translateZ(135px)';
            sneaker[1].style.transform = 'translateZ(175px) rotateZ(25deg)';
            description[1].style.transform = 'translateZ(110px)';
            sizes[1].style.transform = 'translateZ(90px)';
            buyNow[1].style.transform = 'translateZ(70px)';
        } if (elem2 === container[2]) {
            card[2].style.transition = 'none';
            //popout effect
            title[2].style.transform = 'translateZ(135px)';
            sneaker[2].style.transform = 'translateZ(175px) rotateZ(25deg)';
            description[2].style.transform = 'translateZ(110px)';
            sizes[2].style.transform = 'translateZ(90px)';
            buyNow[2].style.transform = 'translateZ(70px)';
        }
    });
});
// animate out
container.forEach(function (elem3) {
    elem3.addEventListener('mouseleave', e => {
        if (elem3 === container[0]) {
            card[0].style.transition = 'all 0.5s ease';
            card[0].style.transform = 'rotateY(0deg) rotateX(0deg)';
            // popback
            title[0].style.transform = 'translateZ(0px)';
            sneaker[0].style.transform = 'translateZ(0px) rotateZ(0deg)';
            description[0].style.transform = 'translateZ(0px)';
            sizes[0].style.transform = 'translateZ(0px)';
            buyNow[0].style.transform = 'translateZ(0px)';
        } if (elem3 === container[1]) {
            card[1].style.transition = 'all 0.5s ease';
            card[1].style.transform = 'rotateY(0deg) rotateX(0deg)';
            // popback
            title[1].style.transform = 'translateZ(0px)';
            sneaker[1].style.transform = 'translateZ(0px) rotateZ(0deg)';
            description[1].style.transform = 'translateZ(0px)';
            sizes[1].style.transform = 'translateZ(0px)';
            buyNow[1].style.transform = 'translateZ(0px)';
        } if (elem3 === container[2]) {
            card[2].style.transition = 'all 0.5s ease';
            card[2].style.transform = 'rotateY(0deg) rotateX(0deg)';
            // popback
            title[2].style.transform = 'translateZ(0px)';
            sneaker[2].style.transform = 'translateZ(0px) rotateZ(0deg)';
            description[2].style.transform = 'translateZ(0px)';
            sizes[2].style.transform = 'translateZ(0px)';
            buyNow[2].style.transform = 'translateZ(0px)';
        }
    });
});
const sizesBtn = document.querySelectorAll('.sneakerSizes button');
// remove and add active class to size buttons
function activeClass() {
    sizesBtn.forEach(function (count) {
        count.addEventListener('click', function () {
            removeClass()
            count.classList.add('active');
        });
    });
    function removeClass() {
        const sizesBtn2 = document.querySelectorAll('.sneakerSizes button');
        sizesBtn2.forEach(function (el) {
            el.classList.remove('active');
        })
    }
}
// TODO gal kazkaip eitu kad atsinaujintu vis ta funkcija ir atsinaujintu ir window.innerwidth
activeClass()
const slide3data = [
    { photo: "./img/clothes/sweater1.jpg", h2: 'Noma T.D.' },
    { photo: "./img/clothes/sweater2.jpg", h2: 'Kapital' }
];
function generateSlide3(data) {
    const div = document.querySelector('.slide3');
    for (i = 0; i < data.length; i++) {
        const slide3slide = document.createElement('div');
        const slide3slideLink = document.createElement('a');
        const slide3left = document.createElement('div');
        const slide3photoLink = document.createElement('a');
        const slide3photo = document.createElement('img');
        const slide3nav = document.createElement('div');
        const slide3nav1 = document.createElement('div');
        const slide3bar = document.createElement('div');
        const slide3bar1 = document.createElement('div');
        const slide3right = document.createElement('div');
        const slide3tag = document.createElement('p');
        const slide3name = document.createElement('h2');
        const shopNow = document.createElement('button');

        const slide3nameText = document.createTextNode(data[i].h2);
        const slide3tagText = document.createTextNode('COLLECTIONS');
        const shopNowText = document.createTextNode('SHOP NOW');
        slide3photo.src = data[i].photo;
        slide3slideLink.href = '../pages/blog/blog.html';
        slide3name.appendChild(slide3nameText);
        slide3tag.appendChild(slide3tagText);
        shopNow.appendChild(shopNowText);

        slide3slideLink.setAttribute('class', 'productBoxLink');
        slide3slide.setAttribute('class', 'slide3slide');
        slide3left.setAttribute('class', 'slide3left');
        slide3photoLink.setAttribute('class', 'slide3photoLink');
        slide3photo.setAttribute('class', 'slide3photo');
        slide3nav.setAttribute('class', 'slide3nav');
        slide3nav1.setAttribute('class', 'slide3nav');
        slide3bar.setAttribute('class', 'slide3bar');
        slide3bar1.setAttribute('class', 'slide3bar');
        slide3right.setAttribute('class', 'slide3right');
        slide3tag.setAttribute('class', 'slide3tag');
        slide3name.setAttribute('class', 'slide3name');
        shopNow.setAttribute('class', 'shopNow');

        slide3slideLink.appendChild(slide3slide);
        div.appendChild(slide3slideLink);
        slide3slide.appendChild(slide3left);
        slide3slide.appendChild(slide3right);
        slide3left.appendChild(slide3photoLink);
        slide3right.appendChild(slide3tag);
        slide3right.appendChild(slide3name);
        slide3right.appendChild(shopNow);
        slide3photoLink.appendChild(slide3photo);
        slide3photoLink.appendChild(slide3nav);
        slide3photoLink.appendChild(slide3nav1);
        slide3nav.appendChild(slide3bar);
        slide3nav1.appendChild(slide3bar1);
    }
}
generateSlide3(slide3data)

const clothesdata = [
    { h21: 'Noma T.D.', h22: 'Silk Checker Shirt' },
    { h21: 'KAPITAL', h22: '12oz Feather Denim 3rd Jacket' }
];
function generateClothes(data) {
    const div = document.querySelector('.chooseClothes');

    const chooseClothesRight = document.createElement('section');
    const figure = document.createElement('figure');
    const chooseClothesPhoto = document.createElement('img');
    const chooseClothesPhotoLink = document.createElement('a');
    const chooseClothesPhotoLink1 = document.createElement('a');

    const chooseClothesLeft = document.createElement('section');
    const chooseClothesPhotoLinkText = document.createTextNode('1');
    const chooseClothesPhotoLinkText1 = document.createTextNode('2');
    chooseClothesPhotoLink.appendChild(chooseClothesPhotoLinkText);
    chooseClothesPhotoLink1.appendChild(chooseClothesPhotoLinkText1);

    chooseClothesRight.setAttribute('class', 'chooseClothesRight');
    chooseClothesPhoto.setAttribute('class', 'chooseClothesPhoto');
    chooseClothesPhotoLink.setAttribute('class', 'chooseClothesPhotoLink');
    chooseClothesPhotoLink1.setAttribute('class', 'chooseClothesPhotoLink');

    const chooseClothesNumber = document.createElement('span');
    const chooseClothesNumber1 = document.createElement('span');
    const chooseClothesNumberText = document.createTextNode('1');
    const chooseClothesNumberText1 = document.createTextNode('2');

    chooseClothesNumber.appendChild(chooseClothesNumberText);
    chooseClothesNumber1.appendChild(chooseClothesNumberText1);
    for (i = 0; i < data.length; i++) {
        const chooseClothesProduct = document.createElement('div');
        const chooseClothesLink = document.createElement('a');
        const chooseClothesName = document.createElement('h2');
        const br = document.createElement('br');

        const chooseClothesNameText1 = document.createTextNode(data[i].h21);
        const chooseClothesNameText = document.createTextNode(data[i].h22);
        chooseClothesPhoto.src = "./img/clothes/sweater3.jpg";
        chooseClothesName.appendChild(chooseClothesNameText1);
        chooseClothesName.appendChild(br);
        chooseClothesName.appendChild(chooseClothesNameText);

        chooseClothesLeft.setAttribute('class', 'chooseClothesLeft');
        chooseClothesProduct.setAttribute('class', 'chooseClothesProduct');
        chooseClothesNumber.setAttribute('class', 'chooseClothesNumber');
        chooseClothesNumber1.setAttribute('class', 'chooseClothesNumber');
        chooseClothesLink.setAttribute('class', 'chooseClothesLink');
        chooseClothesName.setAttribute('class', 'chooseClothesName');

        chooseClothesLink.href = '../pages/soon/soon.html';
        div.appendChild(chooseClothesLeft);
        chooseClothesLeft.appendChild(chooseClothesProduct);
        if (i == 0) {
            chooseClothesProduct.appendChild(chooseClothesNumber);
        } if (i == 1) {
            chooseClothesProduct.appendChild(chooseClothesNumber1);
        }
        chooseClothesProduct.appendChild(chooseClothesLink);
        chooseClothesLink.appendChild(chooseClothesName);
    }
    div.appendChild(chooseClothesRight);
    chooseClothesRight.appendChild(figure);
    figure.appendChild(chooseClothesPhoto);
    figure.appendChild(chooseClothesPhotoLink);
    figure.appendChild(chooseClothesPhotoLink1);
}
generateClothes(clothesdata)


function moveProgressBar(launch) {
    // let change = 0;
    // if (launch == 0) {
    // launch = 1;
    const elem1 = document.querySelectorAll(".slide3bar")[0];
    const elem2 = document.querySelectorAll(".slide3bar")[1];
    const elem3 = document.querySelectorAll(".slide3bar")[2];
    const elem4 = document.querySelectorAll(".slide3bar")[3];
    const slide = document.querySelectorAll('.slide3slide');
    let imgWidth = document.querySelector('.slide3photo').offsetWidth;
    let translate = (parseInt(imgWidth) * 2);
    let width = 0.1;
    const id = setInterval(frame, 6);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            if (launch == 0) {
                launch = 1;
                slide[0].style.transform = `translateX(-${translate}px)`;
                slide[1].style.transform = `translateX(-${translate}px)`;
            } else {
                launch = 0;
                elem2.style.width = 0 + "%";
                elem4.style.width = 0 + "%";
                slide[0].style.transform = 'translateX(0px)';
                slide[1].style.transform = 'translateX(0px)';
            }
            moveProgressBar(launch);
        } else {
            width += 0.1;
            if (launch == 0) {
                elem1.style.width = width + "%";
                elem3.style.width = width + "%";
            } else {
                elem2.style.width = width + "%";
                elem4.style.width = width + "%";
            }
        }
    }
}
moveProgressBar(0)

function chooseClothes() {
    const spans = document.querySelectorAll('.chooseClothesNumber');
    const as = document.querySelectorAll('.chooseClothesPhotoLink');
    const h2s = document.querySelectorAll('.chooseClothesName');
    h2s.forEach(function (h2) {
        h2.addEventListener('mouseover', () => {
            changeColors(h2, as);
        })
        h2.addEventListener('mouseleave', () => {
            changeColorsBack(h2, as);
        })
    })
    as.forEach(function (a) {
        a.addEventListener('mouseover', () => {
            changeColors(a, spans);
        })
        a.addEventListener('mouseleave', () => {
            changeColorsBack(a, spans);
        })
    })
    spans.forEach(function (span) {
        span.addEventListener('mouseover', () => {
            changeColors(span, as);
        })
        span.addEventListener('mouseleave', () => {
            changeColorsBack(span, as);
        })
    })
}
chooseClothes();

function changeColors(one, two) {
    if (one.nodeName == 'H2') {
        const cousin = one.parentNode.previousElementSibling;
        cousin.style.backgroundColor = 'black';
        cousin.style.color = 'white';
        if (cousin.innerHTML == 1) {
            two[0].style.backgroundColor = 'black';
            two[0].style.color = 'white';
        } else if (cousin.innerHTML == 2) {
            two[1].style.backgroundColor = 'black';
            two[1].style.color = 'white';
        }
    }
    if (one.nodeName == 'A' || one.nodeName == 'SPAN') {
        if (one.innerHTML == 1) {
            two[0].style.backgroundColor = 'black';
            two[0].style.color = 'white';
            one.style.backgroundColor = 'black';
            one.style.color = 'white';
        } else if (one.innerHTML == 2) {
            two[1].style.backgroundColor = 'black';
            two[1].style.color = 'white';
            one.style.backgroundColor = 'black';
            one.style.color = 'white';
        }
    }
}
function changeColorsBack(one, two) {
    if (one.nodeName == 'H2') {
        const cousin = one.parentNode.previousElementSibling;
        cousin.style.backgroundColor = 'white';
        cousin.style.color = 'black';
        if (cousin.innerHTML == 1) {
            two[0].style.backgroundColor = 'white';
            two[0].style.color = 'black';
        } else if (cousin.innerHTML == 2) {
            two[1].style.backgroundColor = 'white';
            two[1].style.color = 'black';
        }
    }
    if (one.nodeName == 'A' || one.nodeName == 'SPAN') {
        if (one.innerHTML == 1) {
            two[0].style.backgroundColor = 'white';
            two[0].style.color = 'black';
            one.style.backgroundColor = 'white';
            one.style.color = 'black';
        } else if (one.innerHTML == 2) {
            two[1].style.backgroundColor = 'white';
            two[1].style.color = 'black';
            one.style.backgroundColor = 'white';
            one.style.color = 'black';
        }
    }
}


// TODO create a generate slide3 js
// TODO create a header generated by js