import template from './contactsList.tpl.html';
const url = '';

function routing ($stateProvider) {
     $stateProvider
        .state('contacts.list', {
        	url, template
        })
}

routing.$inject = ['$stateProvider'];

export default routing;
