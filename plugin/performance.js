(function () {
    window['ATInternet'] = window['ATInternet'] || {};
    window['ATInternet']['Tracker'] = window['ATInternet']['Tracker'] || {};
    window['ATInternet']['Tracker']['Plugins'] = window['ATInternet']['Tracker']['Plugins'] || {};
    /**
     * Plugin SmartTag to gather page performance indicators.
     * @param parent {Object} SmartTag reference
     */
    window['ATInternet']['Tracker']['Plugins']['performance'] = function (parent) {
        "use strict";
        /**
         * Retrieves counter from the browser performance object
         * @param timing
         * @private
         */
        var _gatherCounters = function (timing) {
            var perfData = {};
            //all timings start on this event
            var base = timing.navigationStart;

            for (var item in timing) {
                var val = timing[item];
                if (val > 0) {
                    //keep only the diff between navigationStart and this event ending to get its duration.
                    perfData[item] = (val - base);
                }
            }
            //response must be stringified to be inserted in the hit Querystring
            return JSON.stringify(perfData);
        };
        /* CONSTRUCTOR */
        //abstract browser differences
        var perfObject = window.performance || window['mozPerformance'] || window['msPerformance'] || window['webkitPerformance'] || false;

        parent.page.set({
            //add to the page customObject
            customObject:
                _gatherCounters(perfObject.timing)
        });

    };
    try {
        window.ATInternet.Tracker.Tag.addPlugin('performance');
    } catch (ex) {
    }
})();
