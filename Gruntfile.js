/* jshint strict:false */
/*global module:false */

module.exports = function (grunt) {
    var compilerPath = grunt.option('compilerPath') || 'C:\\bin\\closure_compiler';
    var pjson = require('./package.json');
    // Project configuration.
    grunt.initConfig({
        /* JSHINT CONFIGURATION */
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['Gruntfile.js', 'src/**.js']
        },


        /*
         * Tests configuration
         */
        karma: {
            dev: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        }


    });


    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-karma');

};
