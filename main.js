$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $("#header").css("background" , "#1c262f", );
        } else {
            $("#header").css("background" , "none", );
        }
    })
  })
 

