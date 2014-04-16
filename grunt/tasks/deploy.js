module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('deploy', [
        'releaseNotes',
        'shell:commitReleaseNotes',
        'shell:pushMaster',
        'copy:app',
        'buildGhPages:ghPages'
    ]);
};
