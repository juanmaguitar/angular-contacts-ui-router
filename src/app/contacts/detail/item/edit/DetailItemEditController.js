class DetailItemEditCtrl {
	constructor ( $stateParams, $state, utils, contact) {
		this.item = utils.findById(contact.items, $stateParams.itemId);
		this.done = () => $state.go('^', $stateParams);
	}
}

DetailItemEditCtrl.$inject = ['$stateParams', '$state', 'utilsService', 'contact'];

export default DetailItemEditCtrl;
