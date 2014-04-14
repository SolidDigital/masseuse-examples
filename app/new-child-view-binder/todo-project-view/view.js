define(['exports', 'masseuse', './options'], function(exports, masseuse, options) {
    'use strict';

    exports.ProjectView = masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options.options()
    });
});