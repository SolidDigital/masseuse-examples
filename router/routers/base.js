/*global define:false */
define(['masseuse', 'jquery', 'backbone'], function (masseuse, $, Backbone) {
    'use strict';

    var currentView;
    return masseuse.Router.extend({
        beforeRouting : beforeRouting,
        onRouteFail : onRouteFail,
        loadMainContent : loadMainContent,
        log : log
    });

    function beforeRouting() {
        var $deferred = $.Deferred();
        if (!localStorage.getItem('authToken')) {
            $deferred.reject();
        } else {
            $deferred.resolve();
        }
        return $deferred.promise();
    }

    function onRouteFail() {
        Backbone.history.navigate('login',{trigger:true});
    }

    function loadMainContent (ViewType, options) {
        var $deferred = new $.Deferred(),
            newView;

        if (!options) {
            options = {};
        }

        options.appendTo = '#mainContent';
        newView = new ViewType(options);

        if (currentView) {
            currentView.remove();
        }

        newView.start()
            .done(function () {
                currentView = newView;
                $deferred.resolve(newView);
            })
            .fail(function () {
                $deferred.reject();
            });

        return $deferred.promise();
    }

    function log() {
        console.log('--- logger ---');
        console.log(Backbone.history.getFragment());
    }
});
