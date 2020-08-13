$(Document).ready(function(){
    //header height
    $('.header').height($(window).height()+$('.navbar').height())





    $(Window).scroll(function(){
        if($(window).scrollTop()>=100){
            $('nav').css({
                'background-color':'#0e1b4d',
                'padding':'7px 0'
            })
        }else{
            $('nav').css({
                'background-color':'transparent',
                'padding':'15px 0'
            })
        }
     });
    
});
