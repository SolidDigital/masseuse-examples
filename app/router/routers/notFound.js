/*global define:false */
define(['routers/base', 'notFound/view'], function (BaseRouter, NotFoundView) {
    'use strict';

    return BaseRouter.extend({
        excludeFromBeforeRouting : ['login', 'logout'],
        routes : {
            '*notFound' : 'showNotFound'
        },
        showNotFound : showNotFound
    });

    function showNotFound() {
        this.loadMainContent(NotFoundView);
    }
});
