(function() {

    'use strict';

    var personalInformationOutput = angular.module('personalInformationOutput', ['personalInformationOutput']);

    personalInformationOutput.directive('personalInformationOutput', ['$rootScope', function($rootScope) {

        return {


            template: 
                '<div style=\' font-weight: bold;\'>' +
                '<p>{{personalInformation.name.description}}: {{personalInformation.name.value}}</p>'+
                '<p>{{personalInformation.nationality.description}}: {{personalInformation.nationality.value}}</p>'+
                '<p>{{personalInformation.dateofBirth.description}}: {{personalInformation.dateofBirth.value}}</p>'+
                '<p>{{personalInformation.placeOfBirth.description}}: {{personalInformation.placeOfBirth.value}}</p>'+
                '<p>{{personalInformation.location.description}}: {{personalInformation.location.value}}</p>'+
                '</div>'
                
            //templateUrl: './personalInformationOutput.html',   
            scope: {
                data: '='
            },
            controller: function($scope, $rootScope, $attrs) {               
                 $scope.personalInformation  = $scope.data;
            }
        };
    }]);
})();
