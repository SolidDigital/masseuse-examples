define(['masseuse', './options', 'jquery'], function (masseuse, options, $) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions : options,
        initialize : initialize,
        start : start,
        beforeRender : beforeRender,
        afterRender : afterRender,
        render : render
    });

    function initialize() {
        $('<li/>').text('Calling initialize method').appendTo('ol');
        masseuse.plugins.rivets.RivetsView.prototype.initialize.apply(this, arguments);
    }

    function start() {
        $('<li/>').text('Calling start method').appendTo('ol');
        return masseuse.plugins.rivets.RivetsView.prototype.start.apply(this, arguments);
    }

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