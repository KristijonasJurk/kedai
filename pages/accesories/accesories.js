let countDownFromDate = new Date('Dec 18, 2021 12:00:00').toDateString();
let countDownDate = new Date('Dec 18, 2021 12:00:00').getTime();
let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('accesoriesTimer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('accesoriesTimer').innerHTML = '2 metukai'
    }
}, 1000)

const data = [
    { h3: 'Basketballs', photo: '../../img/accesories/basketball.jpg' },
    { h3: 'Retro film cameras', photo: '../../img/accesories/camera.jpeg' },
    { h3: 'Vintage bucket hats', photo: '../../img/accesories/hat.jpeg' }
]

function generateAccesories(data) {
    const div = document.querySelector('.accesoriesList');
    for (let i = 0; i < data.length; i++) {
        const accesories = document.createElement('div');
        const photo = document.createElement('img');
        const comingSoonBox = document.createElement('div');
        const h3 = document.createElement('h3');
        const h1 = document.createElement('h1');

        photo.src = data[i].photo;
        const text1 = document.createTextNode('COMING SOON');
        const text2 = document.createTextNode(data[i].h3);
        if (i == 0) {
            accesories.setAttribute('class', 'accesoriesBig');
        } else if (i == 1) {
            accesories.setAttribute('class', 'accesoriesSmall1');
        } else if (i == 2) {
            accesories.setAttribute('class', 'accesoriesSmall2');
        }
        comingSoonBox.setAttribute('class', 'comingSoonBox');
        h1.appendChild(text1);
        h3.appendChild(text2);

        div.appendChild(accesories);
        accesories.appendChild(photo);
        accesories.appendChild(comingSoonBox);
        comingSoonBox.appendChild(h3);
        comingSoonBox.appendChild(h1);
    }
}
generateAccesories(data);