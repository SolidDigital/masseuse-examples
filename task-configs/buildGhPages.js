/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('buildGhPages', {
        ghPages : {
            options : {
                build_branch : 'gh-pages',
                dist : 'build'
            }
        },
        production : {
            options : {
                build_branch : 'production',
                dist : 'build'
            }
        },
        staging : {
            options : {
                build_branch : 'production',
                dist : 'build'
            }
        }
    });
};