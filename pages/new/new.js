const dataNew = [
    { photo: "../../img/shoes/10.png", label: "NEW", brand: "Vans", name: "Old Skool", price: 130, basketball: true, men: true },
    { photo: "../../img/shoes/11.png", label: "NEW", brand: "Puma", name: "RS-X", price: 120, everyday: true, men: true },
    { photo: "../../img/shoes/12.png", label: "NEW", brand: "Converse", name: "All-star", price: 110, everyday: true, men: true },
    { photo: "../../img/shoes/13.png", label: "NEW", brand: "New Balance", name: "1200", price: 90, basketball: true, men: true },
    { photo: "../../img/shoes/14.png", label: "NEW", brand: "NIKE", name: "Air Max Triax 96", price: 300, everyday: true, men: true },
    { photo: "../../img/shoes/15.png", label: "NEW", brand: "NIKE", name: "Air Max Black&White 96", price: 230, everyday: true, women: true },
    { photo: "../../img/shoes/16.png", label: "NEW", brand: "Asics", name: "GT-1000 9", price: 210, running: true, women: true },
    { photo: "../../img/shoes/17.png", label: "NEW", brand: "NIKE", name: "Air Max TeknoV", price: 90, basketball: true, women: true },
    { photo: "../../img/shoes/18.png", label: "NEW", brand: "Reebook", name: "InstaPump Fury", price: 65, everyday: true, women: true },
    { photo: "../../img/shoes/10.png", label: "NEW", brand: "Vans", name: "Old Skool", price: 200, everyday: true, women: true },
    { photo: "../../img/shoes/11.png", label: "NEW", brand: "Puma", name: "RS-X", price: 95, everyday: true, women: true },
    { photo: "../../img/shoes/13.png", label: "NEW", brand: "New Balance", name: "1200", price: 58, everyday: true, women: true },
    { photo: "../../img/shoes/10.png", label: "NEW", brand: "Vans", name: "Old Skool", price: 130, basketball: true, women: true },
    { photo: "../../img/shoes/15.png", label: "NEW", brand: "NIKE", name: "Air Max Black&White 96", price: 120, everyday: true, men: true },
    { photo: "../../img/shoes/16.png", label: "NEW", brand: "Asics", name: "GT-1000 9", price: 130, everyday: true, women: true },
    { photo: "../../img/shoes/17.png", label: "NEW", brand: "NIKE", name: "Air Max TeknoV", price: 123, everyday: true, men: true },
    { photo: "../../img/shoes/18.png", label: "NEW", brand: "Reebook", name: "InstaPump Fury", price: 151, everyday: true, men: true },
    { photo: "../../img/shoes/12.png", label: "NEW", brand: "Converse", name: "All-star", price: 105, running: true, men: true },
    { photo: "../../img/shoes/14.png", label: "NEW", brand: "NIKE", name: "Air Max Triax 96", price: 155, everyday: true, men: true }
];

function generateNew(data) {
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        const div11 = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const img = document.createElement('img');
        const a = document.createElement('a');
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const a3 = document.createElement('a');
        const a4 = document.createElement('a');
        const text1 = document.createTextNode(data[i].label);
        const text2 = document.createTextNode(data[i].brand);
        const text3 = document.createTextNode(data[i].name);
        const text4 = document.createTextNode(data[i].price);
        const textPrice = document.createTextNode(',00 €');
        div.setAttribute('class', 'productBox');
        div11.setAttribute('class', 'productInfoContainer');
        div1.setAttribute('class', 'productInfo1');
        div2.setAttribute('class', 'productInfo2');
        div3.setAttribute('class', 'productInfo3');
        div4.setAttribute('class', 'productInfo4');
        a.setAttribute('class', 'productBoxLink');
        a.appendChild(div);
        a1.appendChild(text1);
        a2.appendChild(text2);
        a3.appendChild(text3);
        a4.appendChild(text4);
        a4.appendChild(textPrice);
        a.href = '../../product/single.html';
        img.src = data[i].photo;
        img.setAttribute('class', 'productPhoto');
        div1.appendChild(a1);
        div2.appendChild(a2);
        div3.appendChild(a3);
        div4.appendChild(a4);
        div11.appendChild(div1);
        div11.appendChild(div2);
        div11.appendChild(div3);
        div11.appendChild(div4);
        div.appendChild(img);
        div.appendChild(div11);
        document.querySelector('.newProductsList').appendChild(a);
    }
}
generateNew(dataNew);

function sortBy() {
    const option = document.getElementById("sortBy").value;
    let products = document.querySelectorAll('.productBox')
    if (option == 'cheapest') {
        function compare(a, b) {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        }
        dataNew.sort(compare);
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(dataNew)
    }
    if (option == 'expensive') {
        function compare(a, b) {
            if (a.price > b.price) {
                return -1;
            }
            if (a.price < b.price) {
                return 1;
            }
            return 0;
        }
        dataNew.sort(compare);
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(dataNew)
    }
}

function browseBy() {
    let products = document.querySelectorAll('.productBox')
    const option = document.getElementById("browseBy").value;
    if (option == 'men') {
        let onlyMen = [];
        for (let i = 0; i < dataNew.length; i++) {
            if (dataNew[i].men == true) {
                onlyMen.push(dataNew[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyMen)
    }
    if (option == 'women') {
        let onlyWomen = [];
        for (let i = 0; i < dataNew.length; i++) {
            if (dataNew[i].women == true) {
                onlyWomen.push(dataNew[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyWomen)
    }
    if (option == 'running') {
        let onlyRunning = [];
        for (let i = 0; i < dataNew.length; i++) {
            if (dataNew[i].running == true) {
                onlyRunning.push(dataNew[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyRunning)
    }
    if (option == 'basketball') {
        let onlyBasketball = [];
        for (let i = 0; i < dataNew.length; i++) {
            if (dataNew[i].basketball == true) {
                onlyBasketball.push(dataNew[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyBasketball)
    }
    if (option == 'everyday') {
        let onlyEveryday = [];
        for (let i = 0; i < dataNew.length; i++) {
            if (dataNew[i].everyday == true) {
                onlyEveryday.push(dataNew[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyEveryday)
    }
    if (option == 'new') {
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(dataNew)
    }
}
