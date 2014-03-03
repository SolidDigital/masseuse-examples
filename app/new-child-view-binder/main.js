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
        'todo-list-view/view'
    ], function (TodoListView) {

        // A simplified example of complex data that you would want to show in one big view
        // This would often be handled w/ model.sync, but we'll keep things as simple as possible
        var dataFromApi = {
            title : 'all my todos',
            subtasks : [
                { title : 'buy milk' },
                {
                    title : 'clean house',
                    subtasks : [
                        { title : 'sweep' },
                        { title : 'vacuum' }
                    ]
                },
                { title : 'mow lawn' }
            ]
        };
        new TodoListView({
            modelData : {
                todos : dataFromApi
            }
        }).start();
    });
}());
