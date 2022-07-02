$(document).ready(function(){

    var viewSize = {
        width   : $(window).innerWidth(),
        height  : $(window).innerHeight()
    };

    var scrollLength = 0;

    var header = $("header");

    var scrollScript = {
    
        scroll: function(){
            
            scrollLength = $(window).scrollTop();
    
            // header animation
            if(scrollLength >= header.innerHeight()){
                header.addClass("scroll");
            }else{
                header.removeClass("scroll");
            }
            
        }
    
    }

    $(window).scroll(
        scrollScript.scroll
    )
});