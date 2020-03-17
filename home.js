$(function(){
    var $user =$('#user');
    var $userhei = $('#userhei');
    var $user0 = $('#user0');
    var $phone0 = $('#phone0');
    var $phone= $('#phone');
    var $pwd = $('#pwd');
    var $pwd0 = $('#pwd0');
    var $pwd1 = $('#pwd1');
    var $code1 = $('#code1');
    var $mm = $('.mm');
    var $code0 = $('#code0');
    var $btn0 = $('#btn0');
    var $btn = $('#btn');
    var aa = 0,bb=0,cc=0;

    $user.focus(function(){
        $userhei.text('设置之后不能更改，中英文均可，最长14个英文和7个汉字');
        $userhei.css('background','url(https://passport.baidu.com/static/passpc-account/img/reg/check-username-bg-2x.png)')
    })
    $user.blur(function(){
        $userhei.text('');
        $userhei.css('background','');
    }) 
    $user.bind('input propertychange', function() {
        var a = $user.val();
        console.log(a);
        if(a == 1 || a==''){
            $user0.text('此用户名太受欢迎，请更换一个')
        }
        else if(a.length > 14){
            $user0.text('用户名不能超过7个汉字或14个字符')
        }
        else{
            $user0.text('');
            aa = 1;
        }
    })
    $phone.bind('input propertychange', function() {
        
        var ab = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (ab.test($phone.val()) == false){
            $phone0.text('手机号码格式不正确');
            return false;
        }
        else{
            $phone0.text('');
            bb=1;
        }
        
    })
    $mm.click(function(){
        $pwd0.html('<p>长度为8~14个字符</p><p>字母/数字以及标点符号至少包含2种</p><p>不允许有空格、中文</p>');
        $pwd0.css('background','url(https://passport.baidu.com/static/passpc-account/img/check-pwd-bg-2x.png)')
        $pwd0.css('z-index','1000');
    })
    $mm.blur(function(){
        $pwd0.html('');
        $pwd0.css('z-index','-100');
    })
    $pwd.focus(function(){
        $pwd0.html('<p>长度为8~14个字符</p><p>字母/数字以及标点符号至少包含2种</p><p>不允许有空格、中文</p>');
        $pwd0.css('background','url(https://passport.baidu.com/static/passpc-account/img/check-pwd-bg-2x.png)')
        $pwd0.css('z-index','1000');
    })
    $pwd.blur(function(){
        $pwd0.html('');
        $pwd0.css('z-index','-100');
    })
    $pwd.bind('input propertychange',function(){
        var reg=
        reg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/;;
        if($pwd.val().length<15 && $pwd.val().length>7 && reg.test($pwd.val())==true 
        ){
            for(var i = 0; i < $pwd.val().length; i++) {  
                var char = $pwd.val().charCodeAt(i);  
                if (char > 0 && char < 255 && char !== 32) {  
                    $pwd1.text('');
                    cc=1;
                }  
                else{
                    $pwd1.text('密码设置不符合要求');
                }
            }
        }
        else{
            $pwd1.text('密码设置不符合要求');
        }
    })
    $code1.click(function(){
        $code0.text('');
        var i=6;
        $code1.attr('disabled','disable');
        $code1.css('color','rgb(206, 202, 202)')
        timer = window.setInterval(function() {
            $code1.val('获取验证码 (' + i-- + ' s)');
            if(i === -1) {
              window.clearInterval(timer);
              $code1.val('获取验证码');
              $code0.text('请求超时，请稍后再试');
              $code1.removeAttr('disabled');
              $code1.css('color','black');
            }
          }, 1000);
    })
    $btn.click(function(){
        console.log(aa,bb,cc);
        if(aa==1 && bb==1 && cc==1)
        {
            $btn0.text('注册成功')
        }
        else{
            $btn0.text('注册失败')
        }
    })
})