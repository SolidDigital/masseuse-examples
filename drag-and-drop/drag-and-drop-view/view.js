define(['masseuse', 'underscore', './options', 'jquery', 'jmain'], function(masseuse, _, options, $) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        afterRender : afterRender
    });

    function afterRender() {
        var $sortable = this.$( '#sortable'),
            self = this;

        $sortable.sortable().bind('drop', _.debounce(function() {
            var fruits = [],
                changed = false;

            _.each($sortable.find('li'), function(li) {
                var fruit = $(li).text().trim();
                if (fruit.length) {
                    fruits.push(fruit);
                    changed = true;
                }
            });
            if (changed) {
                self.model.set('fruits', fruits);
                self.refresh();
            }
        }, 50));
    }
});