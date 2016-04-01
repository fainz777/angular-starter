// Controllers
app.controller('mainController', ['$scope', 'appService', function($scope, appService) {

	$scope.h1 = 'Heading h1';
	$scope.text = appService.text;

}]);