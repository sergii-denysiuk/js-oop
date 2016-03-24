(function() {
    "use strict";

    App.Tests.ExtendTests = function(extend, asserts) {
        function User(login) {
            if (arguments.length < 1) {
                throw new Error("User: missing required args");
            }

            this.login = login;
        }

        User.prototype.getLogin = function() {
            return this.login;
        };

        User.prototype.setLogin = function(login) {
            this.login = login;
        };

        function SuperUser(login, password) {
            if (arguments.length < 2) {
                throw new Error("SuperUser: missing required args");
            }

            SuperUser.superclass.constructor.apply(this, arguments);
            this.password = password;
        }

        extend(SuperUser, User);

        SuperUser.prototype.getPassword = function() {
            return this.password;
        };

        SuperUser.prototype.setPassword = function(password) {
            this.password = password;
        };

        SuperUser.prototype.setLogin = function(login) {
            SuperUser.superclass.setLogin.apply(this, arguments);
        };

        var login = "u",
            user = new User(login);
        asserts.equal(
            user.login, login, "[extend] --> user login should have a value.");
        asserts.undefined(
            user.password, "[extend] --> user password should be undefined.");
        asserts.equal(
            user.getLogin(), login, "[extend] --> user getLogin() should return a value. ");
        asserts.undefined(
            user.getPassword, "[extend] --> user getPassword should be undefined.");

        var superLogin = "su",
            superPasswd = "#secret",
            superuser = new SuperUser(superLogin, superPasswd);
        asserts.equal(
            superuser.login, superLogin, "[extend] --> superuser login should have a value.");
        asserts.equal(
            superuser.password, superPasswd, "[extend] --> superuser password should have a value.");
        asserts.equal(
            superuser.getLogin(), superLogin, "[extend] --> superuser getLogin() should return a value.");
        asserts.equal(
            superuser.getPassword(), superPasswd, "[extend] --> superuser getPassword() should return a value.");

        superLogin = "batman";
        superuser.setLogin(superLogin);
        asserts.equal(
            superuser.getLogin(), superLogin, "[extend] --> superuser getLogin() should return another value.");
    };
})();
