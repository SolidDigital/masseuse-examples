define(['text!./template.html', './model'], function (template, Model) {
    'use strict';

    return {
        ModelType : Model,
        prependTo : 'body',
        template : template
    };
});