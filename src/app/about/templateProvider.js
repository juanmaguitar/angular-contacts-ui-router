import template from './about.tpl.html'

function templateProvider( $timeout ) {
	return $timeout( ()=>template , 100);
}
templateProvider.$inject = ['$timeout'];

export default templateProvider
