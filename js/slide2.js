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

const slide2data = [
    { brand: 'VANS', name: 'Old Skool', price: '130.00' },
    { brand: 'Puma', name: 'RS-X', price: '120.00' },
    { brand: 'Converse', name: 'All-star', price: '70.00' },
    { brand: 'New Balance', name: '1200', price: '100.00' },
    { brand: 'NIKE', name: 'Air Max Triax 96', price: '95.00' },
    { brand: 'NIKE', name: 'Air Max Black&White 96', price: '100.00' },
    { brand: 'Asics', name: 'GT-1000 9', price: '130.00' },
    { brand: 'NIKE', name: 'Air Max TeknoV', price: '130.00' },
    { brand: 'Reebook', name: 'InstaPump Fury', price: '135.00' }
];

