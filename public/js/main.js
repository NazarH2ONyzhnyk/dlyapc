var headerBar = document.getElementById("header");
var headerMar = document.getElementById("headerMar");

window.document.onscroll = () => {
    if(scrollY >= 50) {
        headerBar.classList.add("fixed-header");
        headerMar.classList.add("header-margin");
    } else {
        headerBar.classList.remove("fixed-header");
        headerMar.classList.remove("header-margin");
    }
}