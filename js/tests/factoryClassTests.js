(function() {
    "use strict";

    App.Tests.FactoryClassTests = function(Class, asserts) {
        var instance = new Class();

        asserts.undefined(
            instance.PRIVATE_STATIC_PROP, "[factory-instance] --> PRIVATE_STATIC_PROP shoud be undefined.");
        asserts.undefined(
            instance.PRIVATE_STATIC_METHOD, "[factory-instance] --> PRIVATE_STATIC_METHOD shoud be undefined.");
        asserts.undefined(
            instance.privateProp, "[factory-instance] --> privateProp shoud be undefined.");
        asserts.undefined(
            instance.privateMethod, "[factory-instance] --> privateMethod shoud be undefined.");

        asserts.undefined(
            instance.PUBLIC_STATIC_PROP, "[factory-instance] --> PUBLIC_STATIC_PROP should be undefined.");
        asserts.undefined(
            instance.PUBLIC_STATIC_METHOD, "[factory-instance] --> PUBLIC_STATIC_METHOD should be undefined.");
        asserts.equal(
            instance.publicProp, "publicProp", "[factory-instance] --> publicProp should has value.");
        asserts.equal(
            instance.publicMethod(), "publicMethod", "[factory-instance] --> publicMethod should return a value.");

        asserts.undefined(
            Class.PRIVATE_STATIC_PROP, "[factory-class] --> PRIVATE_STATIC_PROP shoud be undefined.");
        asserts.undefined(
            Class.PRIVATE_STATIC_METHOD, "[factory-class] --> PRIVATE_STATIC_METHOD shoud be undefined.");
        asserts.undefined(
            Class.privateProp, "[factory-class] --> privateProp shoud be undefined.");
        asserts.undefined(
            Class.privateMethod, "[factory-class] --> privateMethod shoud be undefined.");

        asserts.equal(
            Class.PUBLIC_STATIC_PROP, "PUBLIC_STATIC_PROP", "[factory-class] --> PUBLIC_STATIC_PROP should has a value.");
        asserts.equal(
            Class.PUBLIC_STATIC_METHOD(), "PUBLIC_STATIC_METHOD", "[factory-class] --> PUBLIC_STATIC_METHOD should return a value.");
        asserts.undefined(
            Class.publicProp, "[factory-class] --> publicProp should be undefined.");
        asserts.undefined(
            Class.publicMethod, "[factory-class] --> publicMethod should be undefined.");
    };
})();
