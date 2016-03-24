(function() {
    "use strict";

    App.Tests.PrototypeClassTests = function(Class, asserts) {
        var instance = new Class();

        asserts.undefined(
            instance.PRIVATE_STATIC_PROP, "[prototype-instance] --> PRIVATE_STATIC_PROP shoud be undefined.");
        asserts.undefined(
            instance.PRIVATE_STATIC_METHOD, "[prototype-instance] --> PRIVATE_STATIC_METHOD shoud be undefined.");
        asserts.undefined(
            instance.privatePropFirst, "[prototype-instance] --> privatePropFirst shoud be undefined.");
        asserts.undefined(
            instance.privateMethod, "[prototype-instance] --> privateMethod shoud be undefined.");
        asserts.undefined(
            instance.privatePropSecond, "[prototype-instance] --> privatePropSecond shoud be undefined.");
        asserts.undefined(
            instance.privatePrivelegedMethod, "[prototype-instance] --> privatePrivelegedMethod shoud be undefined.");

        asserts.undefined(
            instance.PUBLIC_STATIC_PROP, "[prototype-instance] --> PUBLIC_STATIC_PROP should be undefined.");
        asserts.undefined(
            instance.PUBLIC_STATIC_METHOD, "[prototype-instance] --> PUBLIC_STATIC_METHOD should be undefined.");
        asserts.equal(
            instance.publicPropFirst, "publicPropFirst", "[prototype-instance] --> publicPropFirst should has value.");
        asserts.equal(
            instance.publicPrivelegedMethod(), "publicPrivelegedMethod", "[prototype-instance] --> publicPrivelegedMethod should return a value.");
        asserts.equal(
            instance.publicPropSecond, "publicPropSecond", "[prototype-instance] --> publicPropSecond should has a value.");
        asserts.equal(
            instance.publicMethod(), "publicMethod", "[prototype-instance] --> publicMethod should return a value.");

        asserts.undefined(
            Class.PRIVATE_STATIC_PROP, "[prototype-class] --> PRIVATE_STATIC_PROP shoud be undefined.");
        asserts.undefined(
            Class.PRIVATE_STATIC_METHOD, "[prototype-class] --> PRIVATE_STATIC_METHOD shoud be undefined.");
        asserts.undefined(
            Class.privatePropFirst, "[prototype-class] --> privatePropFirst shoud be undefined.");
        asserts.undefined(
            Class.privateMethod, "[prototype-class] --> privateMethod shoud be undefined.");
        asserts.undefined(
            Class.privatePropSecond, "[prototype-class] --> privatePropSecond shoud be undefined.");
        asserts.undefined(
            Class.privatePrivelegedMethod, "[prototype-class] --> privatePrivelegedMethod shoud be undefined.");

        asserts.equal(
            Class.PUBLIC_STATIC_PROP, "PUBLIC_STATIC_PROP", "[prototype-class] --> PUBLIC_STATIC_PROP should has a value.");
        asserts.equal(
            Class.PUBLIC_STATIC_METHOD(), "PUBLIC_STATIC_METHOD", "[prototype-class] --> PUBLIC_STATIC_METHOD should return a value.");
        asserts.undefined(
            Class.publicPropFirst, "[prototype-class] --> publicPropFirst should be undefined.");
        asserts.undefined(
            Class.publicPrivelegedMethod, "[prototype-class] --> publicPrivelegedMethod should be undefined.");
        asserts.undefined(
            Class.publicPropSecond, "[prototype-class] --> publicPropSecond should be undefined.");
        asserts.undefined(
            Class.publicMethod, "[prototype-class] --> publicMethod should be undefined.");
    };
})();
