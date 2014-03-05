define(['masseuse', 'underscore', './options', 'jmain'], function(masseuse, _, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        afterRender : afterRender
    });

    function afterRender() {
        var $sortable = this.$( '#sortable');
        var self = this;
        $sortable.sortable().bind("DOMSubtreeModified", _.debounce(function() {
            var fruits = [],
                changed = false;

            _.each($(this).find('li'), function(li, index) {
                var fruit = $(li).text().trim();
                if (fruit.length) {
                    fruits[index] = fruit;
                    changed = true;
                }
            });
            if (changed) {
                self.model.set('fruits', fruits);
            }
        }, 500));
    }
});