define(['text!./template.html', './formatters'],
    function (template, formatters) {
        'use strict';
        return {
            appendTo     : '#myTodos',
            template     : template,
            rivetsConfig : {
                formatters       : [formatters],
                childViewBinders : {
                    // Circular reference, so added in dynamically
                    'project-view' : null
                },
                instaUpdate : true
            }
        };
    });
