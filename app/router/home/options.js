define(['text!./template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        modelData : {
            title : 'You are Home'
        }
    };
});