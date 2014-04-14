define(['require', 'jquery', 'masseuse', './options'], function(require, $, masseuse, options) {
    'use strict';

    var ProjectView = masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        addProjectViewReference : addProjectViewReference
    });

    return ProjectView;

    function addProjectViewReference() {
        var $deferred = new $.Deferred();

        require(['./options'], function(options) {
            options.rivetsConfig.childViewBinders['project-view'] = ProjectView;
            $deferred.resolve();
        });

        return $deferred.promise();
    }
});
