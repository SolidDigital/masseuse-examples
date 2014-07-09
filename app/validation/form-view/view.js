define(['masseuse', './options'], function(masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        submit : submit
    });

    function submit(event) {
        event.preventDefault();
        console.log('submitted');
        return false;
    }
});