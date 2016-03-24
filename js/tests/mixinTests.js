(function() {
    "use strict";

    App.Tests.MixinTests = function(mixin, asserts) {
        /* mixin instance example usage */
        var person = {
            name: "Rustin"
        };

        var detectiveRole = {
            name: "Cole",
            detectiveSkill: 1,
            getDetectiveSkill: function() {
                return this.detectiveSkill;
            }
        };

        mixin(person, detectiveRole, false);

        asserts.notequal(
            person.name, detectiveRole.name, "[mixin instance + instance] --> names must not be equal.");
        mixin(person, detectiveRole, true);
        asserts.equal(
            person.name, detectiveRole.name, "[mixin instance + instance] --> names must be equal.");

        asserts.equal(
            person.getDetectiveSkill(), detectiveRole.getDetectiveSkill(), "[mixin instance + instance] --> skills must be equal.");
        person.detectiveSkill = 100;
        asserts.notequal(
            person.getDetectiveSkill(), detectiveRole.getDetectiveSkill(), "[mixin instance + instance] --> skills must not be equal.");

        /* mixin class example usage */
        function User() {
            this.role = "user";
        }

        User.prototype.identify = function() {
            return "I'm User class";
        };

        User.prototype.getRole = function() {
            return this.role;
        };

        function Admin() {
            this.role = "admin";
            this.permissions = "777";
        }

        Admin.prototype.identify = function() {
            return "I'm Admin class";
        };

        Admin.prototype.getRole = function() {
            return this.role;
        };

        Admin.prototype.getPermission = function() {
            return this.permissions;
        };

        var user = new User(),
            admin = new Admin();

        mixin(User.prototype, Admin.prototype, false);

        asserts.notequal(
            user.identify(), admin.identify(), "[mixin prototype + prototype] --> identities must not be equal.");
        mixin(User.prototype, Admin.prototype, true);
        asserts.equal(
            user.identify(), admin.identify(), "[mixin prototype + prototype] --> identities must be equal.");

        asserts.notequal(
            user.getRole(), admin.getRole(), "[mixin prototype + prototype] --> roles must not be equal.");
        user.role = "admin";
        asserts.equal(
            user.getRole(), admin.getRole(), "[mixin prototype + prototype] --> roles must be equal.");

        asserts.undefined(
            user.getPermission(), "[mixin prototype + prototype] --> user permissions must be undefined.");
        user.permissions = 644;
        asserts.notundefined(
            user.getPermission(), "[mixin prototype + prototype] --> user permissions must not be undefined.");
    };
})();
