class DetailItemCtrl {
	constructor ( $stateParams, $state, utils) {
		this.item = utils.findById(this.contact.items, $stateParams.itemId);
		this.edit = () => $state.go('.edit', $stateParams);
	}
}

DetailItemCtrl.$inject = ['$stateParams', '$state', 'utilsService'];

export default DetailItemCtrl;

