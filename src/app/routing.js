function routing ($urlRouterProvider) {

	$urlRouterProvider
	  .when('/c?id', '/contacts/:id')
	  .when('/user/:id', '/contacts/:id')
	  .otherwise('/');

}

routing.$inject = ['$urlRouterProvider'];

export default routing;


