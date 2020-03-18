module.exports = function(grunt){
    grunt.initConfig({
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: 'home.html',
              dest: 'home.html'
            }
          },
          cssmin: {  
            'home.css': 'home.css'
          },
          uglify: {
            release:{
              files: {
                'home.js': 'home.js'
              }
            }       
          }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:release']);
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']); 
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['htmlmin']); 
};
