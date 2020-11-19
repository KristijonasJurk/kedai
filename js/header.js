// function dropDownMenu() {
// document.getElementsByClassName("linksButton")[0].addEventListener("click", function () {
//     const menuWidth = document.querySelector("nav").style.height;
//     if (menuHeight === '0px') {
//         document.querySelector("nav").style.height = `500px`;
//     } else {
//         document.querySelector("nav").style.height = `0px`;
//     }
//     console.log('hi')
// });
// }
// dropDownMenu()

document.querySelector('.linksButton').addEventListener("click", function () {
    const menu = document.querySelector("nav").style.left;

    if (menu === '0px') {
        document.querySelector("nav").style.left = `-500px`;
    } else {
        document.querySelector("nav").style.left = `0px`;
    }
});