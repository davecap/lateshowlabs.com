$(function(){
    $(".nav a").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-80}, 300);
    });
});