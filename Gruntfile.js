module.exports = function (grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: 'src/sass/**/*.scss',
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: 'src/js/**/*.js',
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
          'dist/css/main.css' : 'src/sass/main.scss'
        }
      }
    }, 

    cssmin: {
      target: {
        files: {
          'dist/css/main.min.css' : 'dist/css/main.css'
        }
      }
    },

    concat: {
      dist: {
        files: {
          'dist/js/main.js' : 'src/js/**/*.js'
        }
      }
    },

    uglify: {
      target: {
        files: { 
          'dist/js/main.min.js' : 'dist/js/main.js'
        }
      }
    }

  });

  grunt.registerTask('default', ['watch']);

};