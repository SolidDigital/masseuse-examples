define(['text!./template.html', './todoFactory'], function (template, TodoFactory) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        rivetsConfig : {
            childViewBinders : {
                'todo-row' : TodoFactory
            }
        }
    };
});