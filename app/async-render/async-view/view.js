define(['masseuse', './options'], function(masseuse, options) {
    'use strict';

    return masseuse.BaseView.extend({
        defaultOptions :  options,
        beforeRender : beforeRender
    });

    function beforeRender($defer) {
        setTimeout($defer.resolve, 2000);
    }
});