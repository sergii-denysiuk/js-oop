(function() {
    "use strict";

    /* save class definition in namespace */
    App.Models.PrototypeClass = PrototypeClass;

    /* private static property */
    var PRIVATE_STATIC_PROP = "PRIVATE_STATIC_PROP!";

    /* private static method */
    function PRIVATE_STATIC_METHOD() {
        return "PRIVATE_STATIC_METHOD";
    }

    /* private property */
    var privatePropFirst = "privatePropFirst";

    /* private method */
    function privateMethod() {
        return "privateMethod";
    }

    /* constructor function */
    function PrototypeClass() {

        /* private property */
        var privatePropSecond = "privatePropSecond";

        /* private priveleged method (can use all private properties) */
        function privatePrivelegedMethod() {
            return "privatePrivelegedMethod";
        }

        /* public property */
        this.publicPropFirst = "publicPropFirst";

        /* public priveleged property (can use all private properties) */
        this.publicPrivelegedMethod = function() {
            return "publicPrivelegedMethod";
        };
    }

    /* public property */
    PrototypeClass.prototype.publicPropSecond = "publicPropSecond";

    /* public method */
    PrototypeClass.prototype.publicMethod = function() {
        return "publicMethod";
    };

    /* public static property */
    PrototypeClass.PUBLIC_STATIC_PROP = "PUBLIC_STATIC_PROP";

    /* public static method */
    PrototypeClass.PUBLIC_STATIC_METHOD = function() {
        return "PUBLIC_STATIC_METHOD";
    };
})();
