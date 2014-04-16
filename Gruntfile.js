/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        warning : { readme : 'Compiled file. Do not edit directly. '}
    });

    grunt.loadTasks('grunt/configs');
    grunt.loadTasks('grunt/tasks');
};
