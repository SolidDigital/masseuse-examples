define(['text!./template.html'], function (template) {
    'use strict';

    return {
        template : template,
        modelData : {
            title : '404: Page not found.'
        }
    };
});