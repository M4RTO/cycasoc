'use strict';
/**
 * Created by julian on 26/07/16.
 */

function translateInterceptor($translate) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            config.headers.Locale = $translate.use();
            return config;
        }
    };
}

export default translateInterceptor;