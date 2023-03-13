let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.swiper-button-next').addEventListener('click', function(){
    offset = offset + 270;
    if (offset > 750) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
 
});

document.querySelector('.swiper-button-prev').addEventListener('click', function(){
    offset = offset - 270;
    if (offset < 0) {
        offset = 750;
    }
    sliderLine.style.left = -offset + 'px';
 
});