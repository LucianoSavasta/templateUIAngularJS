(function() {

    'use strict';

    angular
    .module('defaultRequest', [])
    .service('defaultRequest', function() {

        this.fillIfNull = function(x, y) {
            return x || y;
        };

        this.initObject = function(x) {

            var DEFAULT_METHOD = 'POST';
            var DEFAULT_TIMEOUT = 1500;

            var name = '';
            var method = '';
            var input = null;
            var callback = null;
            var errorHandler = null;
            var timeout = null;
            var headers = null;
            var params = null;
            var responseType = null;

            if (x) {
                name = this.fillIfNull(x.name, '');
                method = this.fillIfNull(x.method, DEFAULT_METHOD);
                input = this.fillIfNull(x.input, null);
                callback = this.fillIfNull(x.callback, null);
                errorHandler = this.fillIfNull(x.errorHandler, null);
                timeout = this.fillIfNull(x.timeout, DEFAULT_TIMEOUT);
                headers = this.fillIfNull(x.headers, null);
                params = this.fillIfNull(x.params, null);
                responseType = this.fillIfNull(x.responseType, null);
            }

            return {
                name: name,
                method: method,
                input: input,
                callback: callback,
                errorHandler: errorHandler,
                timeout: timeout,
                headers: headers,
                params: params,
                responseType: responseType
            };
        };
    });

})();