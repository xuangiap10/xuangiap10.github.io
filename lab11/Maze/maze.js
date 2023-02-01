
$(()=>{
    let start = $("#maze #start");
    let gameon = 0;
   start.on ({
        "click": (evt)=>{
            if(gameon == 1) return;
            gameon = 1;
            $("#status").text("...Playing...");
            $("#maze .boundary").css({"background-color": "#eeeeee"})
        },
        "mousemove": (evt)=> {
            if ( gameon == 1){
                let left = parseInt(start.css("left")) + evt.offsetX - 15 ;
                let top = parseInt(start.css("top"))  + evt.offsetY - 15 ;
                start.css({"left": left, "top":  top});
            }
        },
    });

    $("#maze .boundary").on({
        mouseenter: ()=>{
            if ( gameon == 1){
                gameon = 0;
                start.css({"left": 0, "top" : 205});
                $("#status").text("You Lose - Click the \"S\" to begin.  ");
                $("#maze .boundary").css({"background-color": "orange"})
            }
        },
    });
    $("#maze #end").on({
        mouseenter: ()=>{
            if ( gameon == 1){
                gameon = 0;
                start.css({"left": 0, "top" : 205 });
                $("#status").text("You Win - Click the \"S\" to begin.");
                $("#maze .boundary").css({"background-color": "lightgreen"})
            }
        }
    });
});
