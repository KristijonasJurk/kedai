const sizesBtn = document.querySelectorAll('.productSizesList button');
function activeClass() {
    sizesBtn.forEach(function (count) {
        count.addEventListener('click', function () {
            removeClass()
            count.classList.add('active');
        });
    });
    function removeClass() {
        const sizesBtn2 = document.querySelectorAll('.productSizesList button');
        sizesBtn2.forEach(function (el) {
            el.classList.remove('active');
        })
    }
}
activeClass()

const photosLink = document.querySelectorAll('.productSlide a');
const bigPhoto = document.querySelector('.productPhotoBig1 img');
function showPhoto() {
    photosLink.forEach(function (photo) {
        photo.addEventListener('click', function () {
            bigPhoto.src = photo.childNodes[1].src;
        })
    });
}
showPhoto()