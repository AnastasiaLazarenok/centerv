
function registr(){
    function a(){
        var allowedBrands = [];
        $(".checkbox").each(function(){
            if ($(this).prop("checked")){
                var text = $(this).parent().text().trim();
                allowedBrands.push(text);
            }
        });
        console.log(allowedBrands);

        if (allowedBrands.length == 0){
            $(".item").show();
        }
        else{
            var items = $(".item");
            items.each(function(){
                var text = $(this).find(".brand").text().trim();
                var notAllowed = true;
                for(var i = 0; i < allowedBrands.length; i++){              
                    if (allowedBrands[i] == text){
                        $(this).show();
                        notAllowed = false;
                        break;
                    }
                }
                if(notAllowed){
                    $(this).hide();
                }
            });
        }
    }
    $(".checkbox").change("click",a);
}
window.onload = registr;


