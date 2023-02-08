$(()=>{ //loader    
    const clearMsg = () => $("#msg").text("");
    const sendSuccess = (data) => {
        $("#question").val(data.answer);
        $("#msg").text("successfully");
        $("#question").focus(function(){
            this.select();
        });
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#ask").submit( ()=>{
        const data = {
            question: $("#question").val()
        };
        $.get( {
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"

        } )
        .done(sendSuccess)
        .fail(noSuccess);

        return false;
    });
    /*
    $("#answer").on({
            "keyup" : (event)=>{
                if(event.key == "Enter"){
                    $("#ask").submit();
                }
            },
            "focus": function(){
                this.select();
            }, 
        }
    );
    */

    
});