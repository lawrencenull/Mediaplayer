/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:Mediaplayer.jquery.json>',
    meta: {
      banner: 
        '/*!\n' +
		'*	@Class: <%= pkg.title || pkg.name %>\n'+
		'*	@Version: <%= pkg.version %>\n'+
		'*	@Created on: <%= grunt.template.today("yyyy-mm-dd") %>\n'+
		'*	@Description: <%= pkg.description %>\n'+
		'*	@Author: <%= pkg.author.name %>\n'+
		'*	@Licence: <%= _.pluck(pkg.licenses, "type").join(", ") %>\n'+
		'*	@Project page: <%= pkg.homepage %>\n'+
		' ---------------------------------------------------------------------------- */'
    },
    concat: {
      dist: {
        src: [
	        '<banner:meta.banner>',
        	'src/js/External/jwplayer.js', 
        	'src/js/External/fancySlider.0.1.0.min.js', 
        	'src/js/Mediaplayer.js', 
        	'src/js/Mediaplayer.Base.js', 
        	'src/js/Mediaplayer.Player.js',
        	'src/js/Mediaplayer.Controlbar.js',
        	'src/js/Mediaplayer.CurrentTime.js',
        	'src/js/Mediaplayer.CurrentVolume.js',
        	'src/js/Mediaplayer.Progress.js',
        	'src/js/Mediaplayer.ToggleMute.js',
        	'src/js/Mediaplayer.TogglePlay.js',
        	'src/js/Mediaplayer.TotalTime.js',
        	'src/js/Mediaplayer.Volume.js',
        	'src/js/Mediaplayer.Fullscreen.js'
        ],
        //src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.<%= pkg.version %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.<%= pkg.version %>.min.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};
