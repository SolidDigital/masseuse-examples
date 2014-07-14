define(['masseuse', './options'], function(masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        submit : submit
    });

    function submit(e) {
        this.model.validate();
        e.preventDefault();
        console.log('submitted');
    }
});