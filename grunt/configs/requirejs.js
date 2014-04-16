module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash'),
        demos = [
            'async-render',
            'drag-and-drop',
            'new-child-view-binder',
            'two-way-binding'
        ],
        config = {};

    _.each(demos, function (demo) {
        config[demo] = {
            options : {
                baseUrl : 'app/' + demo,
                mainConfigFile : 'app/' + demo + '/main.js',
                name : 'main',
                out : 'build/' + demo + '/main.js',
                optimize : 'uglify',
                preserveLicenseComments : false
            }
        };
    });

    grunt.config('requirejs', config);
};
