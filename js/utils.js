(function() {
    "use strict";

    App.Utils.stringify = function(obj) {
        return JSON.stringify(obj) || ("" + obj);
    };
})();
