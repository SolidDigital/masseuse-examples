define([
    'masseuse',
    'text!../todo-project-view/template.html',
    'text!../todo-item-view/template.html'
], function(masseuse, projectTemplate, itemTemplate) {
    'use strict';

    var RivetsView = masseuse.plugins.rivets.RivetsView,

    // These are really light weight view, so we define them inline instead of creating separate files for them.
    // There's nothing wrong with creating separate files for them, since r.js will optimize it all on production.
        TodoItemView = RivetsView.extend({
            defaultOptions : {
                wrapper : false,
                template : itemTemplate
            }
        }),
        TodoProjectView = RivetsView.extend({
            defaultOptions : {
                wrapper : false,
                template : projectTemplate,
                rivetsConfig : {
                    childViewBinders : {
                        // We can define child view binders with simply the type of view we want.
                        'todo-item' : TodoItemView
                    }
                }
            }
        });

    // We can also define child view binders with constructor methods.
    // This is a constructor method that functions as a view factory.
    return function(options) {
        if (options.modelData.subtasks) {
            return new TodoProjectView(options);
        } else {
            return new TodoItemView(options);
        }
    };
});