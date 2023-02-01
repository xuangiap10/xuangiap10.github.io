
$(()=>{
    let maze = $("#maze");
    let start = $("#maze #start");
    let gameon = 0;
   var startX = 0; var startY = 0;
   maze.mousemove((evt)=>{
        
       //$("#info").text(evt.target.id + "left: " + evt.offsetX + " top: " + evt.offsetY +  " pX: " + evt.pageX + " pY: " + evt.pageY +" CX: " + evt.clientX + " CY: " + evt.clientY) ;
        //evt.stopPropagation();
        if ( gameon == 1){
            //let left = evt.offsetX - startX;
            //let top = evt.offsetY - startY;
            let left = evt.offsetX - startX;
            let top = evt.offsetY - startY;
            //$("#info").text("left: " + left + " top: " + top +  " pX: " + evt.pageX + " pY: " + evt.pageY +" CX: " + evt.clientX + " CY: " + evt.clientY) ;
            if (left > 0 && top > 0){
                start.css({
                    "left": left,
                    "top":  top
                });
            }
        }
   }
   );
   start.on ({
    click: (evt)=>{
        if(gameon == 1) return;
        gameon = 1;
        $("#status").text("...Playing...");
        startX = evt.offsetX; startY = evt.offsetY;
    },
    });
    $("#maze .boundary").on({
        mouseenter: ()=>{
            if ( gameon == 1){
                gameon = 0;
                start.css({"left": 0, "top" : 205});
                $("#status").text("You Lose");
            }
        },
    });
    $("#maze #end").on({
        mouseenter: ()=>{
            if ( gameon == 1){
                gameon = 0;
                start.css({"left": 0, "top" : 205 });
                $("#status").text("You Win");
            }
        }
    });
});
