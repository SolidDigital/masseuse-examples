define(['masseuse', 'underscore', './options', 'jquery', 'jmain'], function(masseuse, _, options, $) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        afterRender : afterRender
    });

    function afterRender() {
        var $sortable = this.$( '#sortable');

        $sortable.sortable({
            stop : _.debounce(_stop.bind(this, $sortable), 50)
        });
    }

    function _stop($sortable) {
        var fruits = [],
            changed = false;

        $sortable.find('li').each(function() {
            var fruit = $(this).text().trim();
            if (fruit.length) {
                fruits.push(fruit);
                changed = true;
            }
        });

        if (changed) {
            this.model.set('fruits', fruits);
            this.refresh();
        }
    }
});