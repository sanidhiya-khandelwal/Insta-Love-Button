var cont = document.querySelector('#container');
var heartIcon = document.querySelector('i');

cont.addEventListener("click", function () {
    heartIcon.style.transform = "scale(2)";

    setTimeout(function () {
        heartIcon.style.opacity = "0";
    }, 1000)

    setTimeout(function () {
        heartIcon.style.transform = 'scale(1)'
    }, 2000)
});