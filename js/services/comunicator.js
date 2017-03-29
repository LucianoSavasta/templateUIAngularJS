(function() {

    'use strict';

    angular
    .module('comunicator', [])
    .service('comunicator', function($http) {

            this.callService = function(request, param) {

            var start = new Date().getTime();
            var end = null;
            var execTime = null;
            
            /* parametri di input definiti in param (quando viene effettuata la chiamata)
             * hanno la precedenza su quelli definiti nell'inizializzazione della richiesta
             */
            if (param && param.input) {
                  request.input = param.input;
            }

            $http({
                url: request.name,
                method: request.method,
                headers: request.headers,
                params: request.params,
                timeout: request.timeout,
                data: request.input,
                responseType: request.responseType
            })
            .success(function(response) {

                end = new Date().getTime();
                execTime = end - start;

                response.execTime = execTime;

                request.callback(response, param);
            })
            .error(function(response) {
                request.errorHandler(response, param);
            });
        };

    });
})();
    