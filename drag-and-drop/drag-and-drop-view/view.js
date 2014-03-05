define(['backbone', 'masseuse', 'underscore', './options', 'jqueryui'],
    function(Backbone, masseuse, _, options) {
    'use strict';

    var DragDrop = masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        initialize : initialize,
        afterRender : afterRender
    });

    function initialize() {
        this.collection = new Backbone.Collection(
            [{type:'apple'},{type:'banana'},{type:'kiwi'},{type:'grapefruit'},{type:'grape'}]);
        DragDrop.__super__.initialize.apply(this, arguments);
    }

    function afterRender() {
        var $sortable = this.$( '#sortable');
        $sortable.sortable({
            stop : _.debounce(_stop.bind(this, $sortable), 50)
        });
    }

    return DragDrop;

    function _stop($sortable) {
        var fruits = [],
            self = this;

        $sortable.find('li').each(function() {
            fruits.push(self.collection.get(this.id));
        });

        this.collection.reset(fruits);
        this.refresh();
    }
});