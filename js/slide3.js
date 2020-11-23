// movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.sneakerContainer');
const title = document.querySelector('.sneakerTitle');
const sneaker = document.querySelector('.sneaker img');
const buyNow = document.querySelector('.sneakerBuyNow button');
const description = document.querySelector('.sneakerInfo h3');
const sizes = document.querySelector('.sneakerSizes');

// height of elements
const containerHeight = container.offsetHeight;
const headerHeight = document.querySelector('header').offsetHeight;
const slide1Height = document.querySelector('.slide1').offsetHeight;
const slide2Height = document.querySelector('.slide2').offsetHeight;
const heightToSneakers = headerHeight + slide1Height + (slide2Height - (containerHeight / 2) - 100)

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (heightToSneakers - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})
//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //popout effect
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(25deg)';
    description.style.transform = 'translateZ(120px)';
    sizes.style.transform = 'translateZ(100px)';
    buyNow.style.transform = 'translateZ(75px)';
})
//animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    // popback
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    buyNow.style.transform = 'translateZ(0px)';
})

const sizesBtn = document.querySelectorAll('.sneakerSizes button');
function buts() {
    sizesBtn[0].addEventListener('click', function () {
        for (let i = 0; i < sizesBtn.length; i++) {
            sizesBtn[1].classList.remove('active');
            sizesBtn[2].classList.remove('active');
            sizesBtn[3].classList.remove('active');
            sizesBtn[0].classList.add('active')
        }
    })
    sizesBtn[1].addEventListener('click', function () {
        for (let i = 0; i < sizesBtn.length; i++) {
            sizesBtn[0].classList.remove('active');
            sizesBtn[2].classList.remove('active');
            sizesBtn[3].classList.remove('active');
            sizesBtn[1].classList.add('active')
        }
    })
    sizesBtn[2].addEventListener('click', function () {
        for (let i = 0; i < sizesBtn.length; i++) {
            sizesBtn[0].classList.remove('active');
            sizesBtn[1].classList.remove('active');
            sizesBtn[3].classList.remove('active');
            sizesBtn[2].classList.add('active')
        }
    })
    sizesBtn[3].addEventListener('click', function () {
        for (let i = 0; i < sizesBtn.length; i++) {
            sizesBtn[0].classList.remove('active');
            sizesBtn[1].classList.remove('active');
            sizesBtn[2].classList.remove('active');
            sizesBtn[3].classList.add('active')
        }
    })
}

buts()