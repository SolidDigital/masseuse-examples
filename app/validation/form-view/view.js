define(['masseuse', './options'], function(masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        submit : submit
    });

    function submit(e) {
        e.preventDefault();
        console.log('submitted');
    }
});