module.exports = function (grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['js/*.js', 'js/scripts.js', '!js/scripts.min.js'],
        tasks: ['concat', 'uglify']
      }
    },

    sass: {
      options: {
        implementation: sass,
        style: 'expanded'
      },
      dist: {
        files: { 
          'css/styles.css' : 'sass/styles.scss'
        }
      }
    }, 

    cssmin: {
      target: {
        files: {
          'css/styles.min.css' : 'css/styles.css'
        }
      }
    },

    concat: {
      options: {
        serparator: ';',
      },
      dist: {
        files: {
          'js/scripts.js' : ['js/*.js', '!js/scripts.js']
        }
      }
    },

    uglify: {
      target: {
        files: { 
          'js/scripts.min.js' : 'js/scripts.js'
        }
      }
    }

  });

  grunt.registerTask('default', ['watch']);

};