$(function() {
    var xData = [2000,2005,2010,2015,2020],
        yData = [0,2,4,6,8,10];
  
    /* global echarts: true */
    var myChart = echarts.init($('.main1').get(0));
  
    var option = {
      title: {
        text: 'JavaScript语言排名变化'
      },
     
    
      tooltip: {
        trigger: 'axis',
        axisPointer: {  
            type: 'line', 
        },
       
        formatter : function(params){  
           console.log(params[0]);
            var res = '排名'+'<br/>'+ params[0].name+': '+params[0].data;  //可以在这个方法中做改变
            return res;
        }
      },
      
      xAxis: {
        data: xData
      },
      
      trigger: 'axis',
      yAxis: {
          data:roundFractional(yData,2)
      },
      series: [{
        name: '排名',
        type: 'line',
        
        data: [6,9,8,8,7]
      }]
    };
  
    myChart.setOption(option);
  
    function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
  
 
  });