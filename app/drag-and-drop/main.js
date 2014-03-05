(function () {
    'use strict';

    require.config({
        shim : {
            jplugins : {
                dependencies : ['jquery']
            },
            jmain : {
                dependencies: ['jquery', 'jplugins']
            }
        },
        paths : {
            jquery : '../vendor/jquery/dist/jquery',
            rivets : '../vendor/rivets/dist/rivets',
            backbone : '../vendor/backbone-amd/backbone',
            text : '../vendor/requirejs-text/text',
            jplugins : 'http://cdn.jsdelivr.net/jquery.ui/1.10.4/jquery-ui.min',
            jmain : 'http://cdn.jsdelivr.net/jquery.sortable/0.1/jquery.sortable'
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
