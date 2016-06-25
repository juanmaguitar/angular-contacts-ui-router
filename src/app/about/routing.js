import templateProvider from './templateProvider.js'
const url = '/about';

function routing ($stateProvider) {

	$stateProvider
		.state( 'about', {
			url: url,
			templateProvider: templateProvider } )

}

routing.$inject = ['$stateProvider'];

export default routing;

