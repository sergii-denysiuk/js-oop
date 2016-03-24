(function() {
    "use strict";

    App.Functions.extend = function(Child, Parent) {
        var F = function() {};
        F.prototype = Parent.prototype;

        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.superclass = Parent.prototype;
    };
})();
