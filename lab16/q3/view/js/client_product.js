$(()=>{
    //const clearMsg = () => $("#msg").text("");
    const successfunc = (data) => {
        //$("#question").val(data.answer);
        //$("#msg").text("successfully");
        //$("#question").focus();
        //setTimeout(clearMsg, 3000);
    }
    const errorfunc = () => {
        //$("#msg").text("Unable to reach server");
        //setTimeout(clearMsg, 10000);
    }

    $("#addToCart").submit(()=>{
        let quantities = [];
        $("input[name='quantity']").each(function(){
            quantities.push($(this).val());
        })
        let productids = [];
        $("input[name='productid']").each(function(){
            productids.push($(this).val());
        })

        const data = {
            productid: productids,
            quantity: quantities
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        })
        .done(successfunc)
        .fail(errorfunc);
        return false;
    })
});