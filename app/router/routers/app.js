/*global define:false */
define(['routers/base'], function (BaseRouter) {
    'use strict';

    return BaseRouter.extend({
        routes: {
            'home': 'home'
        },
        home: home
    });

    function home() {

    }
});
