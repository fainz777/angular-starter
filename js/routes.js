// Route
app.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		});
});