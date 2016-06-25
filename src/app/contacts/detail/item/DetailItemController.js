class DetailItemCtrl {
	constructor ( $stateParams, $state, utils, contact) {
		this.item = utils.findById( contact.items, $stateParams.itemId );
		this.edit = () => $state.go('.edit', $stateParams);
	}
}

DetailItemCtrl.$inject = ['$stateParams', '$state', 'utilsService', 'contact'];

export default DetailItemCtrl;

