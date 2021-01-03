setTimeout(openAd1, 5000);
function openAd1() {
    const ad1 = document.querySelector('.adContainer');
    if (window.innerWidth > 1200) {
        ad1.style.width = '55%';
        ad1.style.transition = '2s';
        setTimeout(fadeAdText, 1000);
    } if (window.innerWidth > 900 && window.innerWidth < 1200) {
        ad1.style.width = '55%';
        ad1.style.transition = '2s';
        ad1.style.height = '60px';
        setTimeout(fadeAdText, 1000);
        setTimeout(ad1minWidth, 2000);
    } if (window.innerWidth > 770 && window.innerWidth < 900) {
        ad1.style.width = '55%';
        ad1.style.transition = '2s';
        ad1.style.height = '50px';
        setTimeout(fadeAdText, 1000);
        setTimeout(ad1minWidth, 2000);
    } if (window.innerWidth < 770 && window.innerWidth > 600) {
        ad1.style.width = '80%';
        ad1.style.transition = '2s';
        ad1.style.height = '70px';
        setTimeout(fadeAdText, 1000);
        setTimeout(ad1minWidth, 2000);
    } if (window.innerWidth < 600) {
        ad1.style.width = '80%';
        ad1.style.transition = '2s';
        ad1.style.height = '100px';
        setTimeout(fadeAdText, 1000);
        setTimeout(ad1minWidth, 2000);
    }
}
function fadeAdText() {
    const ad1Text = document.querySelectorAll('.adMessageContainer p');
    for (let i = 0; i < ad1Text.length; i++) {
        ad1Text[i].style.transition = '2s';
        ad1Text[i].style.color = 'white';
    }
}
function ad1minWidth() {
    const ad1 = document.querySelector('.adContainer');
    ad1.style.minWidth = '500px';
    if (window.innerWidth > 770 && window.innerWidth < 900) {
        ad1.style.minWidth = '490px';
    } if (window.innerWidth < 770 && window.innerWidth > 600) {
        ad1.style.minWidth = '475px';
    } if (window.innerWidth < 600) {
        ad1.style.minWidth = '300px';
    }
}

function closeAd1() {
    const ad1 = document.querySelector('.adContainer');
    // ad1.style.width = '0%';
    ad1.style.transform = 'translateX(-1000px)';
    ad1.style.transition = '2s';
    const ad1Text = document.querySelectorAll('.adMessageContainer p');
    for (let i = 0; i < ad1Text.length; i++) {
        ad1Text[i].style.color = 'transparent';
        ad1Text[i].style.transition = '0.1s';
    }
    setTimeout(removeAd1, 2000);
}
function removeAd1() {
    document.querySelector('.adContainer').style.display = 'none';
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
