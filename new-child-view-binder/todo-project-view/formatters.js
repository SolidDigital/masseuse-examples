define(['masseuse'], function(masseuse) {
    'use strict';

    return {
        createCollection : createCollection
    };

    function createCollection(subtasksArray) {
        return new masseuse.Collection(subtasksArray);
    }

});