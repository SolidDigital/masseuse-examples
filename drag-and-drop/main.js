(function () {
    'use strict';

    require.config({
        shim : {
            touchpunch : {
                deps : ['jqueryui']
            }
        },
        paths : {
            jquery : '../vendor/jquery/dist/jquery',
            rivets : '../vendor/rivets/dist/rivets',
            backbone : '../vendor/backbone-amd/backbone',
            text : '../vendor/requirejs-text/text',
            jqueryui : './js/jquery-ui-1.10.4.custom.min',
            touchpunch : './js/touch-punch'
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
        'drag-and-drop-view/view',
        'jquery'
    ], function (DragDrop, $) {
        window.$ = $;
        new DragDrop().start();
    });
}());
