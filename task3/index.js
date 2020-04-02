define(['jquery'], function($) {
    
    $(function(){
   
        var $lun =$( '<div class="slider" id="slider">'
            +'<div class="slide"><img src="img/b5.png" alt=""></div>'
            +'<div class="slide"><img src="img/b1.png" alt=""></div>'
            +'<div class="slide"><img src="img/b2.png" alt=""></div>'
            +'<div class="slide"><img src="img/b3.png" alt=""></div>'
            +'<div class="slide"><img src="img/b4.png" alt=""></div>'
            +'<div class="slide"><img src="img/b5.png" alt=""></div>'
            +'<div class="slide"><img src="img/b1.png" alt=""></div>'
            +'</div>'
            +'<span id="left"><</span>'
            +'<span id="right">></span>'
            +'<ul class="nav" id="navs">'
                +'<li>1</li>'
                +'<li>2</li>'
                +'<li>3</li>'
                +'<li>4</li>'
                +'<li>5</li>'
            +'</ul>'
        ),
            m=5,oo=1;
            
        $('body div').append($lun);
    //     var $navv =$('#navs li:nth-child(1)'); 
    //     $navv.css('background-color','red');
    //     $('#left').mouseover(function(){
            
    //         $('.box>span').css('opacity','1')       
    //     })
    //     $('#left').mouseout(function(){
    //         $('.box>span').css('opacity','0')       
    //     })
    //     $('#right').mouseover(function(){
    //         $('.box>span').css('opacity','1')       
    //     })
    //     $('#right').mouseout(function(){
    //         $('.box>span').css('opacity','0')       
    //     })
    //     $("#navs>li").click(function(){
    //         var ll = $(this).text();
    //         oo = ll;
    //         for(var i=1;i<6;i++)
    //         {
    //             var $navv =$('#navs li:nth-child('+i+')');
                  
    //             if(i==ll)
    //             {           
                      
                    
    //                 $(this).css('background-color','red');
                    
    //                 for(m=2;m<7;m++)
    //                 {
    //                     var $slide1 = $('#slider div:nth-child('+m+')')
    //                     $slide1.css('margin-left','-1200px');
    //                 }
    //                 console.log("我执行了",oo);
    //                 var $slide1 = $('#slider div:nth-child('+ll+')')
    //                 $slide1.removeAttr("margin-left");
    //             }
    //             else {
                   
    //                 // var $slide1 = $('#slider div:nth-child('+ll+')')
    //                 // $slide1.css('margin-left','-1200px');
                   
    //                 // $navv.css('background-color','#ccc'); 
    //             }
    //         }
                          
    //     });
    //         $("#navs>li").blur(function(){
    //             $(this).css('background-color','red');                
    //         });
        
    
        
           
    //     interval = setInterval(
    //         function(){
    //               hh();
    //             },2000);
    //     $('#right').click(function (){  
    //         hh()
            
            
            
    //     })
    //     function hh(){
    //         var mm=oo+1;         
            
    //         if(oo<5){
                
    //                 for(var i=1;i<6;i++)
    //                 {
    //                     var $navv =$('#navs li:nth-child('+i+')'); 
    //                     if(i==mm){
    //                         $navv.css('background-color','red');
    //                     }
    //                     else{
    //                         $navv.css('background-color','#ccc');
    //                     }
                        
    //                 }
               
                      
    //             console.log(mm);
    //             var $slide1 = $('#slider div:nth-child('+mm+')')
                
    //             $slide1.animate({
    //                 marginLeft:-1200
    //             },800)
                
                
    //             m++;
    //             oo++;
    //             console.log('mm',mm);
    //             console.log('oo',oo);
    //         }
    //         else {
                
                    
                   
    //             for(m=2;m<6;m++)
    //             {
    //                 var $slide1 = $('#slider div:nth-child('+m+')')
    //                 $slide1.css('margin-left','0px');
    //                 console.log('你是')
    //             }
    //             m=5;
    //             mm=1;
    //             oo=1;
    //             console.log('我是mm',mm)
    //             console.log('mm',mm);
    //             console.log('oo',oo);
    //             var $slide1 = $('#slider div:nth-child(0)')
    //             $slide1.css('margin-left','-1200px');
    //             for(var i=1;i<7;i++)
    //                 {
    //                     var $navv =$('#navs li:nth-child('+i+')'); 
    //                     if(i==1){
    //                         $navv.css('background-color','red');
    //                     }
    //                     else{
    //                         $navv.css('background-color','#ccc');
    //                     }
                        
    //                 }
    //             oo=1;
    //         }   
    //     }
    //     $('#left').click(function(){  
            
    //         // var ll = $(this).text();
    //         var mm=oo+1;           
    //         console.log("wo是oo",oo);
    //         console.log(mm);
    //         if(oo>1)
    //         {   
                
    //             var $slide1 = $('#slider div:nth-child('+oo+')')
    //             $slide1.css('margin-left','0px');
    //             for(var i=1;i<7;i++)
    //                 {
    //                     var $navv =$('#navs li:nth-child('+i+')'); 
    //                     if(i==oo-1){
    //                         $navv.css('background-color','red');
    //                     }
    //                     else{
    //                         $navv.css('background-color','#ccc');
    //                     }
                        
    //                 }
    //             oo--;
    //         }
    //         else{
                
    //             console.log("我是oo",oo);
    //             for(m=2;m<6;m++)
    //             {
    //                 var $slide1 = $('#slider div:nth-child('+m+')')
    //                 $slide1.css('margin-left','-1200px');
    //             }
    //             for(var i=1;i<7;i++)
    //                 {
    //                     var $navv =$('#navs li:nth-child('+i+')'); 
    //                     if(i==5){
    //                         $navv.css('background-color','red');
    //                     }
    //                     else{
    //                         $navv.css('background-color','#ccc');
    //                     }
                        
    //                 }
    //             var $slide1 = $('#slider div:nth-child(6)')
    //             $slide1.css('margin-left','0px');
    //             oo=5;
    //         }   
            
    //     })
    
    var index = 1;
    for(var i=1;i<6;i++)
    {
        var $navv =$('#navs li:nth-child('+i+')');
        $navv.attr('id','nav'+i)
    }
                  
    
    $('#nav1').attr('classname','active');
    if(index==1 || index==6)
        {
            $('#nav1').css('background-color','red');
        }
	function next(){
        
        
        index++;
        
        
        for(var i=1;i<6;i++)
        {           
            
            $('#nav'+i).css('background-color','#ccc');
            
        } 
        $("#nav"+index).css('background-color','red');
        if(index!=6)
        {
            $("#nav"+index).css('background-color','red');
            
        }
        else{
            $('#nav1').css('background-color','red');
        }

		
		$('#slider').animate({
            left:-1200*index
        },function()
		{
			if(index==6){
				$('#slider').css('left','-1200px');
				index=1;
			}
		})
        
	}
	function prev(){
        index--;
        console.log(index);
		for(var i=1;i<6;i++)
        {           
            
            $('#nav'+i).css('background-color','#ccc');
            
        } 
        $("#nav"+index).css('background-color','red');
        if(index!=0)
        {
            $("#nav"+index).css('background-color','red');
            
        }
        else{
            $('#nav5').css('background-color','red');
        }
		$('#slider').animate({
            left:-1200*index
        },function()
		{
			if(index==0){
				$('#slider').css('left','-6000px');
				index=5;
			}
		})
	}
	var timer=setInterval(next,3000);
	
	$('#left').mouseover(function()
	{
        
        $('.box>span').animate({opacity:1})
		
    })
    $('#left').mouseout(function()
	{
        
        $('.box>span').animate({opacity:0})
		
    })
    $('#right').mouseout(function()
	{
        
        $('.box>span').animate({opacity:0})
		
    })
    $('#right').mouseover(function()
	{
        
        $('.box>span').animate({opacity:1})
		
	})
	
	$('#box').mouseout=function()
	{
		$('#box').animate(left,{opacity:0});
		$('#box').animate(right,{opacity:0});
		timer=setInterval(next,3000);
	}
	
	$('#right').click(function(){
        next();
    });
	$('#left').click(function(){
        prev();
    });
	
	       
		$("#navs>li").click(function()
		{
           
            
            var ll = $(this).text(); 
            index =ll;
            
            var tt = -1200*ll;
            $('#slider').animate({
                left:tt
            })
            
            for(var i=1;i<6;i++)
	        {   
                $("#nav"+i).css('background-color','#ccc');
            } 
            $(this).css('background-color','red');
        })
	
	
    })
})