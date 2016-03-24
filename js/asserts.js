(function() {
    "use strict";

    App.Asserts.equal = function(actual, expected, description) {
        console.log(description);

        if (actual !== expected) {
            var exp = App.Utils.stringify(expected),
                act = App.Utils.stringify(actual);

            throw new Error("Error: values is not equal. Expected: " + exp + ", actual: " + act + ".");
        } else {
            console.log("Ok, values is equal.");
        }
    };

    App.Asserts.notequal = function(actual, expected, description) {
        console.log(description);

        if (actual === expected) {
            var exp = App.Utils.stringify(expected),
                act = App.Utils.stringify(actual);

            throw new Error("Error: values is equal. Expected: " + exp + ", actual: " + act + ".");
        } else {
            console.log("Ok, values is not equal.");
        }
    };

    App.Asserts.undefined = function(value, description) {
        console.log(description);

        if (value !== undefined) {
            throw new Error("Error: value is not undefined. Actualy: " + value + ".");
        } else {
            console.log("Ok, values is undefined.");
        }
    };

    App.Asserts.notundefined = function(value, description) {
        console.log(description);

        if (value === undefined) {
            throw new Error("Error: value is undefined.");
        } else {
            console.log("Ok, values is not undefined.");
        }
    };
})();
