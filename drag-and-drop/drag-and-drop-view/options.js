define(['text!./template.html'], function (template) {
    'use strict';

    return {
        prependTo : 'body',
        template : template,
        modelData : {
            fruits : [
                'apple',
                'banana',
                'passion fruit',
                'kiwi',
                'dragon fruit'
            ]
        }
    };
});