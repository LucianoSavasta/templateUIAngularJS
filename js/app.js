//application
var app = angular.module('lsaApp',	['personalInformationOutput','comunicator','defaultRequest' ]);

//module
var ctrl = app.controller('mainController', ['$scope', 'comunicator','defaultRequest', function($scope, comunicator, defaultRequest) {
	//$scope.title = 'Consulenze Software Savasta Luciano';
	$scope.title = 'Titolo';
	
	//$scope.subTitle = 'Soluzioni semplici';
	$scope.subTitle = 'Sottotitolo';

	//$scope.copyright = 'copyright Luciano Savasta 2016';
	$scope.copyright = 'copyright 2016';
	$scope.lis = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia eu dui et bibendum. Suspendisse cursus finibus libero vitae ultrices. Morbi imperdiet ex vitae ornare lacinia. Mauris vehicula, justo quis pellentesque interdum, ipsum dolor blandit mauris, ac tristique felis erat at neque. ';
	$scope.lil = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia eu dui et bibendum. Suspendisse cursus finibus libero vitae ultrices. Morbi imperdiet ex vitae ornare lacinia. Mauris vehicula, justo quis pellentesque interdum, ipsum dolor blandit mauris, ac tristique felis erat at neque. Suspendisse potenti. Duis nisi ipsum, fermentum et sem nec, suscipit euismod dolor. Aliquam suscipit egestas eros a pharetra. Etiam aliquam venenatis faucibus. Donec eleifend justo a quam convallis, eu venenatis lorem semper. Quisque ullamcorper elit nec orci vehicula, in commodo quam cursus. Donec vestibulum erat eget sodales condimentum. Donec quis volutpat diam. Aliquam rutrum fermentum congue. Mauris fermentum ornare est, at interdum nunc volutpat in.';
	/*
	$scope.personalInformation = {
									name:{description: 'Name', value : 'Luciano Savasta'}, 
									maritalStatus:{description: 'Marital status', value : 'Single'}, 
									nationality:{description: 'Nationality', value : ' Italian'},
									dateofBirth:{description: 'Date of birth', value : '30/07/1976'},
									placeOfBirth:{description: 'Place of Birth', value : ' Catania'}, 
									location:{description: 'Location', value : ' Padova'} 
								 };
	*/		
	$scope.personalInformation = {
									name:{description: 'Name', value : 'Rossi Mario'}, 
									maritalStatus:{description: 'Marital status', value : 'Single'}, 
									nationality:{description: 'Nationality', value : ' Italian'},
									dateofBirth:{description: 'Year of birth', value : '1930'},
									placeOfBirth:{description: 'Place of Birth', value : 'Rome'}, 
									location:{description: 'Location', value : 'Rome'} 
								 };

								 
	
}]);
	
