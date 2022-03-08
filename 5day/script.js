const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text')

let load = 0;

let timer = setInterval(()=>{
    load++;
    text.innerText = `${load}%`;
    text.style.opacity = 1-load/100;
    //模糊度从30px开始
    bg.style.filter = `blur(${30-load/100*30}px)`
    if(load>99){
        clearInterval(timer);
    }
},30)