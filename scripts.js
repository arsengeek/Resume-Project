const front = document.getElementById("output-front");
const back = document.getElementById("output-back");


if (window.screen.width >= 720) {
    front.innerHTML = `<img class="front-end-image" src="assets/Снимок экрана 2024-08-21 120829.png"></img>`;
}
else {
    front.innerHTML = `<img class="front-end-image" src="assets/image.png"></img>`;
};



if (window.screen.width >= 720) {
    back.innerHTML = `<img class="back-end-image" src="assets/Снимок экрана 2024-08-21 122434.png">`;
}
else {
    back.innerHTML = `<img class="back-end-image" src="assets/photo_2024-08-21_10-59-15.jpg">`;
};


