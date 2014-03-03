/*globals module:true*/
module.exports = function(grunt) {
    'use strict';

    grunt.config('shell', {
        'testPhantom' : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'mocha-phantomjs tests/index.html'
        },
        'commitReleaseNotes' : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'git commit README.md release_notes -m "updating release notes"'
        },
        'pushMaster' : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'git push origin master'
        }
    });
};
