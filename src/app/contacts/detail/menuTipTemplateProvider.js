function templateProvider( $stateParams ) {
	return '<hr><small class="muted">Contact ID: ' + $stateParams.contactId + '</small>';
}
templateProvider.$inject = ['$stateParams'];

export default templateProvider
