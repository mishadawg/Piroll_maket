let buttonLeft = document.querySelector('#button_left');
let buttonCentr = document.querySelector('#button_centr');
let buttonRight = document.querySelector('#button_right');
let buttonPlay = document.querySelector('.play_button');

let quoteFirst = document.querySelector('#quoteFirst');
let quoteSecond = document.querySelector('#quoteSecond');
let quoteThird = document.querySelector('#quoteThird');

let video = document.querySelector('.video');

buttonPlay.addEventListener('click',function(){
    console.log(`click!`)
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
});
buttonLeft.addEventListener('click',function(){
    quoteFirst.classList.add('block')
    quoteSecond.classList.remove('block')
    quoteThird.classList.remove('block')
});
buttonCentr.addEventListener('click',function(){
    quoteFirst.classList.remove('block')
    quoteSecond.classList.add('block')
    quoteThird.classList.remove('block')
});
buttonRight.addEventListener('click',function(){
    quoteFirst.classList.remove('block')
    quoteSecond.classList.remove('block')
    quoteThird.classList.add('block')
});
