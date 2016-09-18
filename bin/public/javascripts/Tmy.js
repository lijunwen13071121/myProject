/**
 * Created by 李俊文 on 2016/9/10.
 */
$(function(){
    $('#right1').click(function(){
        $('.left').css("display","none");
        $('#left1').show();
        $('.right').css({color:"white",backgroundColor:"orange"});
        $('#right1').css({color:"orange",backgroundColor:"white"})

    });
    $('#right2').click(function(){
        $('.left').css("display","none");
        $('#left2').show();
        $('.right').css({color:"white",backgroundColor:"orange"});
        $('#right2').css({color:"orange",backgroundColor:"white"})
    });
    $('#right3').click(function(){
        $('.left').css("display","none");
        $('#left3').show();
        $('.right').css({color:"white",backgroundColor:"orange"});
        $('#right3').css({color:"orange",backgroundColor:"white"});
    });
})