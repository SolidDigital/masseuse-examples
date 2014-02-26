define(['text!./template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {
            title : 'Hello world!'
        }
    };
});