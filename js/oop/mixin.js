(function() {
    "use strict";

    App.Functions.mixin = function(destination, source, withOverride) {
        for (var key in source) {
            if (source.hasOwnProperty(key) && (withOverride || !destination[key])) {
                destination[key] = source[key];
            }
        }

        return destination;
    };
})();
