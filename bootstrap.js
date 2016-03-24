(function() {
    "use strict";

    /* run tests for PrototypeClass */
    App.Tests.PrototypeClassTests(App.Models.PrototypeClass, App.Asserts);

    /* run tests for FactoryClass */
    App.Tests.FactoryClassTests(App.Models.FactoryClass, App.Asserts);

    /* run tests for extend */
    App.Tests.ExtendTests(App.Functions.extend, App.Asserts);

    /* run tests for mixin */
    App.Tests.MixinTests(App.Functions.mixin, App.Asserts);
})();
