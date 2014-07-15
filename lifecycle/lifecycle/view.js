define(['masseuse', './options', 'jquery'], function (masseuse, options, $) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions : options,
        beforeRender : beforeRender,
        afterRender : afterRender,
        render : render
    });

    function beforeRender ($deferred) {
        setTimeout($deferred.resolve, 1);
        $('ol').append('<li>Method: beforeRender</li>');
    }

    function afterRender () {
        $('ol').append('<li>Method: afterRender</li>');
    }

    function render () {
        $('ol').append('<li>Method: render</li>');
        masseuse.plugins.rivets.RivetsView.prototype.render.apply(this);
    }
});