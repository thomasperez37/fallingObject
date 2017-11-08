$(document).ready(function(){
    var $pic = $("#pic");
    $pic.click(function(){
        setInterval(function(){
        if ($("#ground").offset().top > $pic.offset().top + 60) {$pic.css("top", $pic.offset().top + 10);
        }
        },50); 
        
    });
});