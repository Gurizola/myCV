let menuStatus = 'close';
function log(){
    if (menuStatus == 'close'){
        menuStatus = 'open';
        document.getElementById("block").style.marginTop = 0;
        document.getElementById("block").style.height = `${document.getElementById('wrapper').clientHeight}px`;
        document.getElementById("menu__list").style.marginTop = `-${document.getElementById('wrapper').clientHeight}px`;
        document.getElementById("menu__list").style.marginLeft = `${document.getElementById("wrapper").clientWidth - 200}px`;
        document.getElementById("second").style.transition = '0s';
        document.getElementById("second").style.visibility = 'hidden';
        document.getElementById("ferst").style.transform = 'translateY(8px) rotate(45deg)';
        document.getElementById("last").style.transform = 'translateY(-6px) rotate(-45deg)';
    

        

        console.log('menu opened');
    }else{
        menuStatus = 'close';
        console.log(document.querySelector(".wrapper"))
        document.getElementById("block").style.height = '0vh';
        document.getElementById("menu__list").style.marginTop = '0';
        document.getElementById("wrapper").style.marginTop = '0';
        document.getElementById("ferst").style.transform = 'translateY(0px) rotate(0deg)';
        document.getElementById("last").style.transform = 'translateY(0px) rotate(0deg)';
        document.getElementById("second").style.transition = '0.3s';
        document.getElementById("second").style.visibility = 'visible';
    }
}
document.querySelector('.menu__button').onclick = log;
document.querySelector('.block').onclick = log;
document.getElementById("menu__list").style.marginLeft = `-${document.getElementById("wrapper").offsetLeft + 200}px`;
console.log(document.getElementById("wrapper").offsetLeft);