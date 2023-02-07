$(()=>{

    let main=$("#main");
    main.after("<div id=\"circle\"></div>");
    main.css({"display": "flex",  "position": "relative"});


    startbtn = $("#startbtn");
    widthtxt = $("#widthtxt");
    growthtxt = $("#growthtxt");
    intervaltxt = $("#intervaltxt");
    numbertxt = $("#numbertxt");

    function createcircle(id, margin,  width, growth, color){
        main.append("<div id=" + id + "></div>");
        let circle=$("#" + id);
        let rad = width/2;
        //console.log(margin);
        circle.css({
            "position" : "absolute",
            "background-color": color, 
            "width": width, 
            "height": width, 
            "border-radius": rad, 
            "border":"1px red solid",
            "margin": 20,
            "margin-left": margin,

        });
        circle.on({
            "click": ((evt)=>{
                circle.hide();
                evt.stopPropagation();
            }),
            "mousemove": ((evt)=>{
                var ori = circle.css('opacity');
                ori=ori*(1-0.01);

                circle.css({
                    'opacity': ori
                });
            }),
            "mouseout": ((evt)=>{
                circle.css({
                    'opacity': 1
                });
            }),
        });  
    }

    var timer = null;
    var cwidth = 50;
    startbtn.click((evt)=>{
        
        //console.log(numbertxt.val());
        //console.log(main.width());
        let num = parseInt(numbertxt.val());
        num = (num > 12) ? 12 : num;
        let margin = main.width()/num;
        cwidth = parseInt(widthtxt.val());
        cwidth = (cwidth < 50) ? 50 : cwidth;
        if(timer){
            clearInterval(timer);
            timer = null;
            return;
        }        
        main.empty();
        for(var i = 0; i < num; i++){

            //console.log(main.width());
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            
            createcircle( "circle" + i, margin*i, widthtxt.val(), growthtxt.val() , "#" + randomColor);
        }
        //console.log(intervaltxt.val());
        timer = setInterval(animation, intervaltxt.val(), parseInt(growthtxt.val()));
 
    }
    
    );

         
    function animation(grow){
        return (()=>{
            cwidth = cwidth + grow;

            if(cwidth > 300) cwidth = 50;
            let rad = cwidth/2;
            $("#main div").each(function(i, elem){
                $(elem).css({
                    "width": cwidth,
                    "height": cwidth,
                    "border-radius": rad,
                });
            });


        })();
    }

});