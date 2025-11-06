const bgImageEl = document.querySelector('#bg-image');

window.addEventListener('scroll', () => {
    updateImage();
})


function updateImage() {
   // bgImageEl.style.opacity = 1 - window.pageYOffset / 1100;
    bgImageEl.style.backgroundSize = 100 + window.pageYOffset / 12 + "%";

}
