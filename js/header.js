// function dropDownMenu() {
// document.getElementsByClassName("linksButton")[0].addEventListener("click", function () {
//     const menuHeight = document.querySelector("nav").style.height;
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
    const menuHeight = document.querySelector("nav").style.height;
    if (menuHeight === '0px') {
        document.querySelector("nav").style.height = `485px`;
    } else {
        document.querySelector("nav").style.height = `0px`;
    }
    console.log('hi');
});