/*global define:false */
define(['routers/base', 'home/view'], function (BaseRouter, HomeView) {
    'use strict';

    return BaseRouter.extend({
        routes : {
            '' : 'home',
            'home' : 'home'
        },
        home : home
    });

    function home () {
        this.loadMainContent(HomeView);
    }
});
