/*global define:false */
define(['masseuse', 'jquery', 'backbone'], function (masseuse, $, Backbone) {
    'use strict';

    return masseuse.Router.extend({
        beforeRouting : beforeRouting,
        onRouteFail : onRouteFail
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
});
