const data = [10, 11, 12, 13, 14, 15, 16, 17];

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