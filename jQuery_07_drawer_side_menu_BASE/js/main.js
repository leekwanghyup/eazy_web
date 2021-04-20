// $aside.stop().animate({left:'0px'}, 300); // 버튼을 클릭하면 서랍이 열림 

// A.addClass('b c'); // A에 'b'와 'c'클래스명 추가   
// A.removeClass('b c');  
// A.toggleClass('b');  // 클래스명 추가(클래스명이없다면)/삭제(클래스명이 있으면) 
// A.hasClass('b') // 클래스 b가 존재하면 참 
// A.attr('href', 'b') // A의 href 속성을 b로 변경

$(function(){
    var $aside = $('aside'); 
    var $button = $aside.find('button'); 
    var $duration = 700; 

    console.log($button.find('img').attr('src')); 

    $button.click(function(){
        console.log("button click"); 
         $aside.toggleClass('open'); 
        if($aside.hasClass('open')){
            $button.find('img').attr('src', 'img/btn_close.png'); // close버튼으로 이미지 변경 
        } else{
            $button.find('img').attr('src', 'img/btn_open.png') 
        }
    })
})