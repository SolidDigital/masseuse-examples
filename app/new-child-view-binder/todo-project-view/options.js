define(['exports', 'text!./template.html', './view', './formatters'],
    function (exports, template, view, formatters) {
        'use strict';

        exports.options = function () {
            return {
                appendTo: 'body',
                template: template,
                rivetsConfig: {
                    formatters: [formatters],
                    childViewBinders: {
                        'project-view': view.ProjectView
                    }
                }
            };
        };
    });