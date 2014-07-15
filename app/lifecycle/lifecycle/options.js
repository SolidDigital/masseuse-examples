define(['text!./template.html'], function (template) {
    'use strict';

    return {
        appendTo : '#theViewGoesHere',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {
            title : 'Hello world!'
        }
    };
});