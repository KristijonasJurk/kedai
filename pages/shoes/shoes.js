const dataShoes = [
    { photo: "../../img/shoes/10.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 130, everyday: true, women: true },
    { photo: "../../img/shoes/11.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 120, running: true, men: true },
    { photo: "../../img/shoes/12.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 110, everyday: true, women: true },
    { photo: "../../img/shoes/13.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 90, everyday: true, men: true },
    { photo: "../../img/shoes/14.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 300, basketball: true, women: true },
    { photo: "../../img/shoes/15.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 230, basketball: true, men: true },
    { photo: "../../img/shoes/16.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 210, running: true, men: true },
    { photo: "../../img/shoes/17.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 90, basketball: true, men: true },
    { photo: "../../img/shoes/18.png", label: "NEW", brand: "adidas Originals", name: "Air Max 96", price: 65, basketball: true, men: true },
    { photo: "../../img/shoes/30.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 220, everyday: true, men: true, women: true },
    { photo: "../../img/shoes/31.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 180, everyday: true, men: true },
    { photo: "../../img/shoes/32.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 170, everyday: true, men: true },
    { photo: "../../img/shoes/33.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 200, everyday: true, men: true },
    { photo: "../../img/shoes/34.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 210, everyday: true, men: true },
    { photo: "../../img/shoes/35.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 190, everyday: true, men: true },
    { photo: "../../img/shoes/36.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 200, everyday: true, men: true, women: true },
    { photo: "../../img/shoes/37.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 250, everyday: true, men: true, women: true },
    { photo: "../../img/shoes/38.png", label: "LIMITED", brand: "adidas Originals", name: "Air Max 96", price: 220, everyday: true, men: true },
    { photo: "../../img/shoes/50.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 130, percent: 30, everyday: true, women: true },
    { photo: "../../img/shoes/51.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 120, percent: 20, everyday: true, women: true },
    { photo: "../../img/shoes/52.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 110, percent: 5, running: true, men: true },
    { photo: "../../img/shoes/53.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 90, percent: 50, running: true, men: true },
    { photo: "../../img/shoes/54.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 300, percent: 30, running: true, men: true },
    { photo: "../../img/shoes/55.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 230, percent: 20, basketball: true, men: true },
    { photo: "../../img/shoes/56.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 210, percent: 5, everyday: true, women: true },
    { photo: "../../img/shoes/57.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 90, percent: 10, everyday: true, women: true },
    { photo: "../../img/shoes/58.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 65, percent: 5, running: true, men: true },
    { photo: "../../img/shoes/59.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 200, percent: 10, everyday: true, women: true },
    { photo: "../../img/shoes/more-shoes/20.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 155, percent: 20, basketball: true, women: true },
    { photo: "../../img/shoes/more-shoes/21.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 95, percent: 30, basketball: true, women: true },
    { photo: "../../img/shoes/more-shoes/22.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 58, percent: 50, basketball: true, women: true },
    { photo: "../../img/shoes/more-shoes/24.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 120, percent: 40, running: true, women: true },
    { photo: "../../img/shoes/more-shoes/27.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 151, percent: 10, everyday: true, men: true },
    { photo: "../../img/shoes/more-shoes/28.png", label: "SALE", brand: "adidas Originals", name: "Air Max 96", price: 105, percent: 50, running: true, men: true },

];

function generateShoes(data) {
    // create elements
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        const div11 = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const img = document.createElement('img');
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
        a1.appendChild(text1);
        a2.appendChild(text2);
        a3.appendChild(text3);
        a4.appendChild(text4);
        a4.appendChild(textPrice);
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
        document.querySelector('.shoesProductsList').appendChild(div);
    }
}
generateShoes(dataShoes);

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
        dataShoes.sort(compare);
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(dataShoes)
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
        dataShoes.sort(compare);
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(dataShoes)
    }
    if (option == 'random') {
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        var count = dataShoes.length,
            randomnumber,
            temp;
        while (count) {
            randomnumber = Math.random() * count-- | 0;
            temp = dataShoes[count];
            dataShoes[count] = dataShoes[randomnumber];
            dataShoes[randomnumber] = temp
        }
        generateShoes(dataShoes)
        // shuffle data
    }

}

function browseBy() {
    let products = document.querySelectorAll('.productBox')
    const option = document.getElementById("browseBy").value;
    if (option == 'men') {
        let onlyMen = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].men == true) {
                onlyMen.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyMen)
    }
    if (option == 'women') {
        let onlyWomen = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].women == true) {
                onlyWomen.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyWomen)
    }
    if (option == 'running') {
        let onlyRunning = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].running == true) {
                onlyRunning.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyRunning)
    }
    if (option == 'basketball') {
        let onlyBasketball = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].basketball == true) {
                onlyBasketball.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyBasketball)
    }
    if (option == 'everyday') {
        let onlyEveryday = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].everyday == true) {
                onlyEveryday.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyEveryday)
    }
    if (option == 'shoes') {
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(dataShoes)
    }
}


function shoeOptions(option) {
    if (option === 'men') {
        let onlyMen = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].men == true) {
                onlyMen.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyMen)
    }
    if (option == 'women') {
        let onlyWomen = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].women == true) {
                onlyWomen.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyWomen)
    }
    if (option == 'running') {
        let onlyRunning = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].running == true) {
                onlyRunning.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyRunning)
    }
    if (option == 'basketball') {
        let onlyBasketball = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].basketball == true) {
                onlyBasketball.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyBasketball)
    }
    if (option == 'everyday') {
        let onlyEveryday = [];
        for (let i = 0; i < dataShoes.length; i++) {
            if (dataShoes[i].everyday == true) {
                onlyEveryday.push(dataShoes[i])
            }
        }
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(onlyEveryday)
    }
    if (option == 'shoes') {
        for (let i = 0; i < products.length; i++) {
            document.querySelector('.productBox').remove();
        }
        generateShoes(dataShoes)
    }
}