const dataABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Z'];

function generateABC(dataABC) {
    for (let i = 0; i < dataABC.length; i++) {
        const div = document.createElement('div');
        const letter = document.createTextNode(dataABC[i]);
        div.setAttribute('class', 'letter');
        div.appendChild(letter);
        document.querySelector('.brandsABClist').appendChild(div);
    }
}
generateABC(dataABC);


const dataBrands = [
    {
        photo: '/img/brands/1.png',
        name: 'Adidas'
    },
    {
        photo: '/img/brands/2.png',
        name: 'Nike'
    },
    {
        photo: '/img/brands/3.png',
        name: 'Asics'
    },
    {
        photo: '/img/brands/4.png',
        name: 'Puma'
    },
    {
        photo: '/img/brands/5.png',
        name: 'New Balance'
    },
    {
        photo: '/img/brands/6.png',
        name: 'Jordan'
    },
    {
        photo: '/img/brands/7.png',
        name: 'Vans'
    },
    {
        photo: '/img/brands/8.png',
        name: 'Converse'
    }
];

function generateBrands(dataBrands) {
    for (let i = 0; i < dataBrands.length; i++) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        const text = document.createTextNode(dataBrands[i].name);
        div.setAttribute('class', 'brandBox');
        h4.appendChild(text);
        img.src = dataBrands[i].photo;
        div.appendChild(img);
        div.appendChild(h4);
        document.querySelector('.brandsList').appendChild(div);
    }
}
generateBrands(dataBrands);