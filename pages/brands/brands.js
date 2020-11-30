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
    { photo: '../../img/brands/1.png', name: 'Adidas' },
    { photo: '../../img/brands/2.png', name: 'Nike' },
    { photo: '../../img/brands/3.png', name: 'Asics' },
    { photo: '../../img/brands/4.png', name: 'Puma' },
    { photo: '../../img/brands/5.png', name: 'New Balance' },
    { photo: '../../img/brands/6.png', name: 'Jordan' },
    { photo: '../../img/brands/7.png', name: 'Vans' },
    { photo: '../../img/brands/8.png', name: 'Converse' },
    { photo: '../../img/brands/9.png', name: 'Yonex' },
    { photo: '../../img/brands/10.png', name: 'Le Coq Sportif' },
    { photo: '../../img/brands/11.png', name: 'Champion' },
    { photo: '../../img/brands/12.png', name: 'Timberland' },
    { photo: '../../img/brands/13.png', name: 'Brooks' }
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

function renderABC(dataABC, dataBrands) {
    const letterBox = document.querySelectorAll('.letter');
    letterBox.forEach(function (letter) {
        letter.addEventListener('click', function () {
            refreshBrands()
            for (let i = 0; i <= dataBrands.length; i++) {
                const firstLettter = dataBrands[i].name[0];
                const brandBox = document.querySelectorAll('.brandBox');
                const emptyText = document.querySelector('.emptyText');
                if (letter.innerHTML == firstLettter) {
                    brandBox[i].style.display = "flex";
                    if (emptyText) {
                        emptyText.remove()
                    }
                } else {
                    brandBox[i].style.display = "none";
                    if (i == 1) {
                        generateEmptyText()
                    }
                }
            }
        })
    })
}
renderABC(dataABC, dataBrands)

function generateEmptyText() {
    const div = document.createElement('div');
    const text = document.createTextNode('Nothing to show :(');
    const emptyText = document.querySelector('.emptyText');
    if (emptyText) {
        emptyText.remove()
    }
    div.setAttribute('class', 'emptyText');
    div.style.display = 'flex';
    div.appendChild(text);
    document.querySelector('.brandsList').appendChild(div);
    return;
}

function refreshBrands() {
    const alreadyThere = document.querySelector('.brandSelection');
    if (alreadyThere) {
        alreadyThere.remove();
    }
    const div = document.createElement('div');
    const refresh = document.createTextNode('Refresh');
    div.setAttribute('class', 'brandSelection');
    div.appendChild(refresh);
    document.querySelector('.brandsSearch').style.border = '2px solid #999';
    document.querySelector('.brandsSearch').appendChild(div);
    const brandBox = document.querySelectorAll('.brandBox');
    div.addEventListener('click', function () {
        const emptyText = document.querySelector('.emptyText');
        emptyText.style.display = 'none';
        for (let h = 0; h <= dataBrands.length; h++) {
            brandBox[h].style.display = 'flex';
        }

    })
}