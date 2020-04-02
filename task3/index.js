define(['jquery'], function($) {
    
    var $chart=(function(){
        var $left = $('#left'),
            $right = $('#right'),
            $slide = $('.slide'),
            $slider = $('#slider>div'),
            $box = $('.box>span'),
            m=1;
        $left.mouseover(function(){
            $box.css('opacity','1')       
        })
        $left.mouseout(function(){
            $box.css('opacity','0')       
        })
        $right.mouseover(function(){
            $box.css('opacity','1')       
        })
        $right.mouseout(function(){
            $box.css('opacity','0')       
        })
        $right.click(function(){           
            console.log(m);
            if(m<6)
            {   
                console.log($slider);
                var $slide1 = $('#slider div:nth-child('+m+')')
                $slide1.css('margin-left','-1200px');
                m++;
            }
            else{
            
                for(m=1;m<6;m++)
                {
                    var $slide1 = $('#slider div:nth-child('+m+')')
                    $slide1.css('margin-left','0px');
                }
                m=1;
                var $slide1 = $('#slider div:nth-child('+m+')')
                $slide1.css('margin-left','-1200px');
                m++;
            }   
            
        })
        $left.click(function(){           
            console.log(m);
            if(m<8)
            {   
                console.log($slider);
                var $slide1 = $('#slider div:nth-child('+m+')')
                $slide1.css('margin-left','1200px');
                m--;
            }
            else{
            
                // var $slide1 = $('#slider div:nth-child(1)')
                // $slide1.css('margin-left','7200px');
                // var $slide1 = $('#slider div:nth-child(2)')
                // $slide1.css('margin-left','4800px');
                // var $slide1 = $('#slider div:nth-child(3)')
                // $slide1.css('margin-left','3600px');
                // var $slide1 = $('#slider div:nth-child(4)')
                // $slide1.css('margin-left','1200px');
                var $slide1 = $('#slider div:nth-child(8)')
                $slide1.css('margin-left','0px');
               

            }   
            
        })
    })
})