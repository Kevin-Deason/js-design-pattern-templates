(function (win, doc) {
    var revealingModule = (function () {
        //Private variables - these should not be exposed directly
        var _store = {
            someThing: ""
        };

        //Private Functions - these should not be exposed
        function _validateSettings(setting, settings) {
            if (typeof settings[setting] !== 'string' || settings[setting].length === 0) {
                return {
                    valid: false,
                    message: setting + ' is a required option'
                }
            }
            return {valid: true}
        }

        //Public Functions
        function init() {
            console.info("init function called");
            _store.someThing = "value of something";
        }

        function doSomething() {
            console.info("doSomething function called");
            if (_store.someThing === "") {
                console.info("Call init method first");
            }
            console.info("value in _store.someThing: ", _store.someThing);
        }

        //Expose the public functions
        return {
            init: init,
            doSomething: doSomething,
        };
    })();

    win.revealingModule = revealingModule;

})(window, document);