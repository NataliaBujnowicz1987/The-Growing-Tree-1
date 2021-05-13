// loading page
// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector("#website").style.visibility = "hidden";
//         document.querySelector("#loader").style.visibility = "visible";
//     } else {
//         document.querySelector("#loader").style.display = "none";
//         document.querySelector("#website").style.visibility = "visible";
//     }
// }

// slider img
let slideIndex = 1;
showImg(slideIndex);

function plusDivs(n) {
    showImg(slideIndex += n);
}

function currentDiv(n) {
    showImg(slideIndex = n);
}

function showImg(n) {
    let i;
    const x = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("dot-active", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";

}