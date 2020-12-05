// document.querySelector('.linksButton').addEventListener("click", function () {
//     const menu = document.querySelector("nav").style.left;

//     if (menu === '0px') {
//         document.querySelector("nav").style.left = `-500px`;
//     } else {
//         document.querySelector("nav").style.left = `0px`;
//     }
// });

setTimeout(openAd1, 5000);
function openAd1() {
    const ad1 = document.querySelector('.adContainer');
    ad1.style.width = '55%';
    ad1.style.transition = '2s';
    setTimeout(fadeAdText, 1000);
}
function fadeAdText() {
    const ad1Text = document.querySelectorAll('.adMessageContainer p');
    for (let i = 0; i < ad1Text.length; i++) {
        ad1Text[i].style.transition = '2s';
        ad1Text[i].style.color = 'white';
    }
}

function closeAd1() {
    const ad1 = document.querySelector('.adContainer');
    ad1.style.width = '0%';
    ad1.style.transition = '2s';
    const ad1Text = document.querySelectorAll('.adMessageContainer p');
    for (let i = 0; i < ad1Text.length; i++) {
        ad1Text[i].style.color = 'transparent';
        ad1Text[i].style.transition = '0.1s';
    }
}


function adTimer() {
    // let countDownFromDate = new Date('Dec 18, 2021 12:00:00').toDateString();
    let countDownDate = new Date('Sep 30, 2021 12:00:00').getTime();
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const strong = document.querySelector('.countDownAd');
        strong.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('accesoriesTimer').innerHTML = 'Discount is over, sorry :('
        }
    }, 1000)
}
adTimer()
