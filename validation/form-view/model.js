/*global define:false */
define(['masseuse', 'underscore'], function (masseuse, _) {
    'use strict';

    return masseuse.Model.extend({
        defaults: defaults,
        validate: validate
    });

    function defaults() {
        return _.extend({
            firstNameError : masseuse.ComputedProperty(['firstName'], validateExistence, true),
            lastNameError : masseuse.ComputedProperty(['lastName'], validateExistence, true),
            emailError : masseuse.ComputedProperty(['email'], validateExistence, true),
            hasError: masseuse.ComputedProperty(['firstNameError', 'lastNameError', 'emailError'],
                function (firstNameError, lastNameError, emailError) {
                return firstNameError || lastNameError || emailError;
            })
        }, fromServer());
    }

    function validate() {
        var self = this;
        _.each(_.keys(fromServer()), function (key) {
            self.set(key, self.get(key));
        });
    }

    function fromServer() {
        return {
            'firstName': '',
            'lastName': '',
            'email': ''
        };
    }

    function validateExistence(value) {
        return value ? false : 'value is not here';
    }
});
