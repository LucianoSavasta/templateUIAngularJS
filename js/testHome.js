describe('mainController', function () {	
			
			beforeEach(angular.mock.module('lsaApp'));
		
			var $controller;

			beforeEach(angular.mock.inject(function(_$controller_){
			  $controller = _$controller_;
			}));
			describe('tile', function () {
				it('Title test', function () {
					var $scope = {};
					var controller = $controller('mainController', { $scope: $scope });
					//$scope.x = 1;
					//$scope.y = 1;
					//$scope.sum();
					
					//expect($scope.title).toBe("Consulenze Software Savasta Luciano");
					expect($scope.title).toBe("---");
				});	
			});
		});