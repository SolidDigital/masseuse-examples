/*global define:false */
define(['routers/base', 'jquery', 'backbone', 'login/view'], function (BaseRouter, $, Backbone, LoginView) {
    'use strict';

    return BaseRouter.extend({
        excludeFromBeforeRouting : ['login', 'logout'],
        routes: {
            'login': 'login',
            'logout': 'logout'
        },
        login: login,
        logout: logout
    });

    function login() {
        new LoginView().start();
    }

    function logout() {
        localStorage.removeItem('authToken');

        setTimeout(function () {
            Backbone.history.navigate('login', {trigger:true});
        }, 250);
    }
});
