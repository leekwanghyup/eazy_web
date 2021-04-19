$(function () {

    var win = $(window);
    var header = $(".page-header"); 
    var headerOffsetTop = header.offset().top; 
    
    // page-header가 화면상단으로부터 떨어진 거리 
    console.log(headerOffsetTop); 

    win.scroll(function(){
        if( $(this).scrollTop() >= headerOffsetTop ){
            header.addClass('sticky'); 
        } else{
            header.removeClass('sticky'); 
        }
    })

});
