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
        'todo-project-view/view',
        'masseuse',
        './todos'
    ], function (ProjectView, masseuse, todos) {

        var dataFromApi = todos;

        ProjectView.prototype.addProjectViewReference()
            .done(function() {
                new ProjectView({
                    collection : new masseuse.Collection(dataFromApi)
                }).start();
            });
    });
}());
