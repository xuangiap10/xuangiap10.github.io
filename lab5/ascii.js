function load(){
    "use strict";
    var timer = null;
    var usertxt, frames, current_idx, speed=250;
    var txtarea, btnstop, btnstart, animationtype, fontsize, turbo;
    txtarea = document.getElementById("text-area");
    btnstop = document.getElementById("stop");
    btnstart=document.getElementById("start");
    animationtype = document.getElementById("animation");
    fontsize = document.getElementById("fontsize");
    turbo = document.getElementById("turbo");
    btnstop.onclick=clickstop;
    btnstart.onclick=clickstart;
    turbo.onchange=changespeed;


    function clickstart(){
        if ( animationtype.value != "Blank"){    
            init_animation();
            start_timer();
        }
    }
    function clickstop(){
        stop_timer();
        stop_animation();
        btnstop.disabled=true;
        btnstart.disabled=false;
    }
    function changespeed(){
        if( turbo.checked == true ){
            speed = 50;
        }else {
            speed = 250;
        }
        if(timer !== null){
            clearInterval(timer);
            timer = setInterval(do_animation, speed);
        }
    }

    function init_animation(){
        usertxt = txtarea.value;
        /*global ANIMATIONS */ 
        frames = ANIMATIONS[animationtype.value].split("=====\n");
        current_idx = 0;
        txtarea.style.fontSize = fontsize.value;
        txtarea.value = frames[current_idx];
        if( turbo.checked == true ){
            speed = 50;
        }else {
            speed = 250;
        }

        animationtype.disabled=true;
        btnstart.disabled=true;
        btnstop.disabled=false;
    }

    function start_timer(){
        if (timer === null ) {
            timer = setInterval(do_animation, speed); //250ms
        } 
    }

    function stop_timer(){
        if(timer !== null){
            clearInterval(timer); // cancel the timer
            timer = null;
                
        }
    }
    function do_animation(){
        current_idx++;
        if(current_idx == frames.length){
            current_idx=0;
        }
        txtarea.style.fontSize = fontsize.value;
        txtarea.value = frames[current_idx];
    }
    function stop_animation(){
        txtarea.value = usertxt;
        current_idx = 0;
        animationtype.disabled=false;
    }
}
window.onload = load;

