import template from './home.tpl.html'
const url = '/';

function routing ($stateProvider) {

	$stateProvider
		.state("home", { url, template } )

}

routing.$inject = ['$stateProvider'];

export default routing;

