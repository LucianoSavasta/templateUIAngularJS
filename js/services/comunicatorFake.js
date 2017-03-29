(function() {

    'use strict';

    angular
    .module('comunicatorFake', [])
    .service('comunicatorFake', function($http) {

            this.callService = function() {

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
                url: 'http://www.repubblica.it',
                method: 'GET',
                headers: null,
                params: {},
                timeout: 30000,
                data: {},
                responseType: null
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
    