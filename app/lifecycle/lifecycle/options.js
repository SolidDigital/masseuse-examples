define(['text!./template.html', 'jquery'], function (template, $) {
    'use strict';

    return {
        appendTo : '#theViewGoesHere',
        template : template,
        rivetsInstaUpdate : true,
        modelData : {
            title : 'Hello world!'
        },
        plugins : [
            function() {
                $('<li/>').text('Calling plugins').appendTo('ol');
            }
        ]
    };
});