define(['masseuse', './options', 'backbone'], function(masseuse, options, Backbone) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        login : login
    });

    function login (e) {
        localStorage.set('authToken', '8u4r8ur8ur48ur8ur8u4r');
        Backbone.history.navigate('home', {trigger:true});
        e.preventDefault();
    }
});