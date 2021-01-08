
const slide2data = [
    { brand: 'VANS', name: 'Old Skool', price: '130.00', photo: './img/shoes/10.png' },
    { brand: 'Puma', name: 'RS-X', price: '120.00', photo: './img/shoes/11.png' },
    { brand: 'Converse', name: 'All-star', price: '70.00', photo: './img/shoes/12.png' },
    { brand: 'New Balance', name: '1200', price: '100.00', photo: './img/shoes/13.png' },
    { brand: 'NIKE', name: 'Air Max Triax 96', price: '95.00', photo: './img/shoes/14.png' },
    { brand: 'NIKE', name: 'Air Max Black&White 96', price: '100.00', photo: './img/shoes/15.png' },
    { brand: 'Asics', name: 'GT-1000 9', price: '130.00', photo: './img/shoes/16.png' },
    { brand: 'NIKE', name: 'Air Max TeknoV', price: '130.00', photo: './img/shoes/17.png' },
    { brand: 'Reebook', name: 'InstaPump Fury', price: '135.00', photo: './img/shoes/18.png' }
];

// example of smallslide html
{/* <div class="smallSlide">
                        <img class="smallPhoto" src="./img/shoes/11.png" alt="small shoe photo">
                        <div class="productInfoContainer">
                            <div class="productInfo1">
                                <a href="#">NEW</a>
                            </div>
                            <div class="productInfo2">
                                <a href="#">Puma</a>
                            </div>
                            <div class="productInfo3">
                                <a href="#">RS-X</a>
                            </div>
                            <div class="productInfo4">
                                <a href="#">120,00 €</a>
                            </div>
                        </div>
                    </div> */}

function generateSlide2(data) {
    console.log('he');
    const div = document.querySelector('.slide2area');
    for (let i = 0; i < data.length; i++) {
        const smallSlide = document.createElement('div');
        const smallPhoto = document.createElement('img');
        const productInfoContainer = document.createElement('div');
        const productInfo1 = document.createElement('div');
        const productInfo1a = document.createElement('a');
        const productInfo2 = document.createElement('div');
        const productInfo2a = document.createElement('a');
        const productInfo3 = document.createElement('div');
        const productInfo3a = document.createElement('a');
        const productInfo4 = document.createElement('div');
        const productInfo4a = document.createElement('a');

        smallPhoto.src = data[i].photo;
        const text1 = document.createTextNode('NEW');
        const text2 = document.createTextNode(data[i].brand);
        const text3 = document.createTextNode(data[i].name);
        const text4 = document.createTextNode(data[i].price);
        const textPrice = document.createTextNode(',00 €');
        smallSlide.setAttribute('class', 'smallSlide');
        smallPhoto.setAttribute('class', 'smallPhoto');
        productInfoContainer.setAttribute('class', 'productInfoContainer');
        productInfo1.setAttribute('class', 'productInfo1');
        productInfo2.setAttribute('class', 'productInfo2');
        productInfo3.setAttribute('class', 'productInfo3');
        productInfo4.setAttribute('class', 'productInfo4');

        productInfo1a.appendChild(text1);
        productInfo2a.appendChild(text2);
        productInfo3a.appendChild(text3);
        productInfo4a.appendChild(text4);
        productInfo4a.appendChild(textPrice);

        div.appendChild(smallSlide);
        smallSlide.appendChild(smallPhoto);
        smallSlide.appendChild(productInfoContainer);
        productInfoContainer.appendChild(productInfo1);
        productInfoContainer.appendChild(productInfo2);
        productInfoContainer.appendChild(productInfo3);
        productInfoContainer.appendChild(productInfo4);
        productInfo1.appendChild(productInfo1a);
        productInfo2.appendChild(productInfo2a);
        productInfo3.appendChild(productInfo3a);
        productInfo4.appendChild(productInfo4a);
    }
}
generateSlide2(slide2data);




const data = [10, 11, 12, 13, 14, 15, 16, 17];
// slide2nav html example
{/* <div class="slidecontainer">
                    <p>Default range slider:</p>
                    <input type="range" min="1" max="100" value="50">
                </div> */}
function slide2(data) {
    let totalItems = data.length;
    // const widthItem = (document.querySelectorAll('.smallSlide')[0].offsetWidth) * totalItems * 3;
    let slideIndex = 0;

    // document.querySelector('.slide2').style.width = `${widthItem}px`;
    for (let i = 0; i < totalItems - 3; i++) {
        document.querySelector('.slide2nav').innerHTML += `<i class="fa fa-minus" aria-hidden="true"></i>`;
        // slideIndex++;
    }
    for (let i = 0; i < totalItems; i++) {
        document.querySelectorAll('.slide2nav .fa-minus')[i].addEventListener('click', function () {
            const widthItem = (document.querySelectorAll('.smallSlide')[0].offsetWidth) * i;
            document.querySelector('.slide2area').style.marginLeft = `-${widthItem}px`;
        });
    }
}
slide2(data);
// TODO less HTML more JS