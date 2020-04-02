requirejs.config({
    'paths': {
      'jquery': 'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
  });console.log('111');
require(['jquery'], function($) {
    $(function() {
        require(['index']);
        
    })
})