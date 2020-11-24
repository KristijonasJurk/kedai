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
// zodziu reik keisti transform parametra priklausomai nuo window nes tas offsettop aukstis atsinaujin tik refreshinus psl
const heightToSneakers1 = mainbodyOffset + slide2Offset + sliderOffset + containerHeight1 + (containerHeight / 2);
const heightToSneakers2 = mainbodyOffset + slide2Offset + sliderOffset + containerHeight2 + (containerHeight / 2);
const heightToSneakers3 = mainbodyOffset + slide2Offset + sliderOffset + containerHeight3 + (containerHeight / 2);
// width of element
const container0Width = container[0].offsetLeft + 400;
const container1Width = container[1].offsetLeft + 200;
const container2Width = container[2].offsetLeft;
const containerWidth = container[0].offsetLeft;

container.forEach(function (elem) {
    elem.addEventListener('mousemove', (e) => {
        if (elem === container[0]) {
            let yAxis = (heightToSneakers1 - e.pageY) / 25;
            let xAxis0 = (container0Width + (containerWidth / 2) - e.pageX) / 25;
            card[0].style.transform = `rotateY(${xAxis0}deg) rotateX(${yAxis}deg)`;
        }
        if (elem === container[1]) {
            let yAxis = (heightToSneakers2 - e.pageY) / 25;
            let xAxis1 = (container1Width + (containerWidth / 2) - e.pageX) / 25;
            card[1].style.transform = `rotateY(${xAxis1}deg) rotateX(${yAxis}deg)`;
        }
        if (elem === container[2]) {
            let yAxis = (heightToSneakers3 - e.pageY) / 25;
            let xAxis2 = (container2Width + (containerWidth / 2) - e.pageX) / 25;
            card[2].style.transform = `rotateY(${xAxis2}deg) rotateX(${yAxis}deg)`;
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
activeClass()