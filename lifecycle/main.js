(function () {
    'use strict';

    require.config({
        paths : {
            jquery : '../vendor/jquery/dist/jquery',
            rivets : '../vendor/rivets/dist/rivets',
            backbone : '../vendor/backbone-amd/backbone',
            text : '../vendor/requirejs-text/text'
        },
        packages : [
            {
                name : 'underscore',
                location : '../vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : '../vendor/masseuse/app'
            }
        ]
    });

    require([
        'lifecycle/view',
        'jquery'
    ], function (MasseuseexamplesView, $) {
        var view = new MasseuseexamplesView();
        view.on('all', function(eventName){
            $('ol').append('<li>Lifecycle event fired: '+ eventName +'</li>');
        });

        view.start().progress(function (message) {
            $('ol').append('<li>Deferred progress : '+ message +'</li>');
        });

    });
}());
