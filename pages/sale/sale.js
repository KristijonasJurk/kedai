const dataSale = [
    { photo: "../../img/shoes/50.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 130, percent: 30, basketball: true, men: true },
    { photo: "../../img/shoes/51.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 120, percent: 20, everyday: true, men: true },
    { photo: "../../img/shoes/52.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 110, percent: 5, everyday: true, men: true },
    { photo: "../../img/shoes/53.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 90, percent: 50, basketball: true, men: true },
    { photo: "../../img/shoes/54.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 300, percent: 30, everyday: true, men: true },
    { photo: "../../img/shoes/55.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 230, percent: 20, everyday: true, women: true },
    { photo: "../../img/shoes/56.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 210, percent: 5, running: true, women: true },
    { photo: "../../img/shoes/57.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 90, percent: 10, basketball: true, women: true },
    { photo: "../../img/shoes/58.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 65, percent: 5, everyday: true, women: true },
    { photo: "../../img/shoes/59.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 200, percent: 10, everyday: true, women: true },
    { photo: "../../img/shoes/more-shoes/20.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 155, percent: 20, everyday: true, men: true },
    { photo: "../../img/shoes/more-shoes/21.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 95, percent: 30, everyday: true, women: true },
    { photo: "../../img/shoes/more-shoes/22.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 58, percent: 50, everyday: true, women: true },
    { photo: "../../img/shoes/more-shoes/24.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 120, percent: 40, everyday: true, men: true },
    { photo: "../../img/shoes/more-shoes/27.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 151, percent: 10, everyday: true, men: true },
    { photo: "../../img/shoes/more-shoes/28.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 105, percent: 50, running: true, men: true }
];

function generateNew(data) {
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        const div11 = document.createElement('div')
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const img = document.createElement('img');
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const a3 = document.createElement('a');
        const a4 = document.createElement('a');
        const a5 = document.createElement('a');
        const text1 = document.createTextNode(data[i].label);
        const text2 = document.createTextNode(data[i].brand);
        const text3 = document.createTextNode(data[i].name);
        const text4 = document.createTextNode(data[i].price);
        const text5 = document.createTextNode(data[i].percent);
        const textPrice = document.createTextNode(',00 €');
        const pricePercent = document.createTextNode('%');
        div.setAttribute('class', 'productBox');
        div11.setAttribute('class', 'productInfoContainer');
        div1.setAttribute('class', 'productInfo1');
        div2.setAttribute('class', 'productInfo2');
        div3.setAttribute('class', 'productInfo3');
        div4.setAttribute('class', 'productInfo4');
        a4.setAttribute('class', 'initialPrice');
        a5.setAttribute('class', 'withDiscount');
        a1.appendChild(text1);
        a2.appendChild(text2);
        a3.appendChild(text3);
        a4.appendChild(text4);
        a4.appendChild(textPrice);
        a5.appendChild(text5);
        a5.appendChild(pricePercent);
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
        div4.appendChild(a5);
        div.appendChild(img);
        div.appendChild(div11);
        document.querySelector('.saleProductsList').appendChild(div);
    }
}
generateNew(dataSale);

function generateSale(data) {
    let products = document.querySelectorAll('.productBox');
    const withDiscount = document.querySelectorAll('.withDiscount');
    const initialPrice = document.querySelectorAll('.initialPrice');
    for (let i = 0; i < products.length; i++) {
        if (data[i].percent) {
            const discount = data[i].price - Math.ceil((data[i].price * data[i].percent) / 100);
            const a6 = document.createElement('a');
            const text6 = document.createTextNode(discount);
            const textPrice = document.createTextNode(',00 €');
            a6.appendChild(text6);
            a6.appendChild(textPrice);
            document.querySelectorAll('.productInfo4')[i].insertBefore(a6, withDiscount[i])
            a6.style.margin = '0px 10px';
            initialPrice[i].classList.add("underline");
        }
    }
}
generateSale(dataSale)

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
        dataSale.sort(compare);
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(dataSale)
        generateSale(dataSale)
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
        dataSale.sort(compare);
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(dataSale)
        generateSale(dataSale)
    }
    if (option == 'discount') {
        function compare(a, b) {
            if (a.percent > b.percent) {
                return -1;
            }
            if (a.price < b.price) {
                return 1;
            }
            return 0;
        }
        dataSale.sort(compare);
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(dataSale)
        generateSale(dataSale)
    }
}

function browseBy() {
    let products = document.querySelectorAll('.productBox')
    const option = document.getElementById("browseBy").value;
    if (option == 'men') {
        let onlyMen = [];
        for (let i = 0; i < dataSale.length; i++) {
            if (dataSale[i].men == true) {
                onlyMen.push(dataSale[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyMen)
        generateSale(onlyMen)
    }
    if (option == 'women') {
        let onlyWomen = [];
        for (let i = 0; i < dataSale.length; i++) {
            if (dataSale[i].women == true) {
                onlyWomen.push(dataSale[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyWomen)
        generateSale(onlyWomen)
    }
    if (option == 'running') {
        let onlyRunning = [];
        for (let i = 0; i < dataSale.length; i++) {
            if (dataSale[i].running == true) {
                onlyRunning.push(dataSale[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyRunning)
        generateSale(onlyRunning)
    }
    if (option == 'basketball') {
        let onlyBasketball = [];
        for (let i = 0; i < dataSale.length; i++) {
            if (dataSale[i].basketball == true) {
                onlyBasketball.push(dataSale[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyBasketball)
        generateSale(onlyBasketball)
    }
    if (option == 'everyday') {
        let onlyEveryday = [];
        for (let i = 0; i < dataSale.length; i++) {
            if (dataSale[i].everyday == true) {
                onlyEveryday.push(dataSale[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(onlyEveryday)
        generateSale(onlyEveryday)
    }
    if (option == 'new') {
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateNew(dataSale)
        generateSale(dataSale)
    }
}