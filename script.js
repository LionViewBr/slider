let slidersAmount = document.querySelectorAll('.slider-item').length;
let goBackButton = document.querySelector('.sc-1');
let goNextButton = document.querySelector('.sc-2');
let currentSlide = 0;

document.querySelector('.slider-width').style.width = `calc(100vw*${slidersAmount})`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

goBackButton.addEventListener('click',()=>{
    currentSlide--;
    if(currentSlide<0){
        currentSlide = slidersAmount-1;
    }
    updateMargin();
});
goNextButton.addEventListener('click',()=>{
    currentSlide++;
    if(currentSlide>(slidersAmount-1)){
        currentSlide = 0;
    }
    updateMargin();
});

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = currentSlide*sliderItemWidth;
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`; 
}

setInterval(function(){
    currentSlide++;
    if(currentSlide>(slidersAmount-1)){
        currentSlide = 0;
    }
    updateMargin();
},4000);