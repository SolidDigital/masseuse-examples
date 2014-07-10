/*global define:false */
define(['masseuse', 'underscore'], function (masseuse, _) {
    'use strict';

    return masseuse.Model.extend({
        defaults: defaults
    });

    function defaults() {
        return _.extend({
            firstNameError : masseuse.ComputedProperty(['firstName'], validateExistence, true),
            lastNameError : masseuse.ComputedProperty(['lastName'], validateExistence, true),
            emailError : masseuse.ComputedProperty(['email'], validateExistence, true)
        }, fromServer());
    }

    function fromServer() {
        return {
            'firstName': '',
            'lastName': '',
            'email': ''
        };
    }

    function validateExistence(value) {
        return value ? value : 'value is not here';
    }
});
