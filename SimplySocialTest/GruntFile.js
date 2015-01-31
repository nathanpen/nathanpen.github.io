'use strict';
module.exports = function(grunt) {
grunt.initConfig({
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles/sass',
        src: ['style.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);

};