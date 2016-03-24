(function() {
    "use strict";

    /* save class definition in namespace */
    App.Models.FactoryClass = FactoryClass;

    /* class */
    function FactoryClass() {

        /* private static property */
        var PRIVATE_STATIC_PROP = "PRIVATE_STATIC_PROP";

        /* private static method */
        function PRIVATE_STATIC_METHOD() {
            return "PRIVATE_STATIC_METHOD";
        }

        /* private property */
        var privateProp = "privateProp";

        /* private method */
        function privateMethod() {
            return "privateMethod";
        }

        /* public static property */
        FactoryClass.PUBLIC_STATIC_PROP = "PUBLIC_STATIC_PROP";

        /* public static method */
        FactoryClass.PUBLIC_STATIC_METHOD = function() {
            return "PUBLIC_STATIC_METHOD";
        };

        return {
            /* public property */
            publicProp: "publicProp",

            /* public property */
            publicMethod: function() {
                return "publicMethod";
            }
        };
    }
})();
