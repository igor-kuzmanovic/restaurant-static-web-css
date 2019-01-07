module.exports = function (grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: 'src/sass/*.scss',
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: 'src/js/*.js',
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
          'dist/css/styles.min.css' : 'dist/css/styles.css'
        }
      }
    },

    concat: {
      options: {
        serparator: ';',
      },
      dist: {
        files: {
          'dist/js/scripts.js' : 'src/js/*.js'
        }
      }
    },

    uglify: {
      target: {
        files: { 
          'dist/js/scripts.min.js' : 'dist/js/scripts.js'
        }
      }
    }

  });

  grunt.registerTask('default', ['watch']);

};