/*Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)*/
var FONTLIST = [];
FONTLIST["Tiny"] = FONTLIST["TINY"] = FONTLIST["tiny"] = "7pt";
FONTLIST["Small"] = FONTLIST["SMALL"] = FONTLIST["small"] = "10pt";
FONTLIST["Medium"] = FONTLIST["MEDIUM"] = FONTLIST["medium"] = "12pt";
FONTLIST["Large"] = FONTLIST["LARGE"] = FONTLIST["large"] = "16pt";
FONTLIST["Extra Large"] = FONTLIST["EXTRA LARGE"] = FONTLIST["extra large"] = "24pt";
FONTLIST["XXL"] =  FONTLIST["xxl"] = "32pt";

timer = null;
var usertxt;
function load(){
    txtarea = document.getElementById("text-area");
    btnstop = document.getElementById("stop");
    btnstart=document.getElementById("start");
    animationtype = document.getElementById("animation");
    fontsize = document.getElementById("fontsize");
    turbo = document.getElementById("turbo");
    //btnstop.onclick=clickstop;
}
var frames;
var current_idx;
var fontvalue;
var speed = 250;

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
    usrtxt = txtarea.value;
    frames = ANIMATIONS[animationtype.value].split("=====\n");
    current_idx = 0;
    fontvalue = FONTLIST[fontsize.value];
    txtarea.style.fontSize = fontvalue;
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
    fontvalue = FONTLIST[fontsize.value];
    txtarea.style.fontSize = fontvalue;
    txtarea.value = frames[current_idx];
}
function stop_animation(){
    txtarea.value = usrtxt;
    current_idx = 0;
    animationtype.disabled=false;
}


window.onload = load;
//document.getElementById("demo").innerHTML =x + y;
//document.getElementById("text-area").value = "Johnny Bravo";
