class DetailItemEditCtrl {
	constructor ( $stateParams, $state, utils) {
		this.item = utils.findById(his.contact.items, $stateParams.itemId);
		this.done = () => $state.go('^', $stateParams);
	}
}

DetailItemEditCtrl.$inject = ['$stateParams', '$state', 'utilsService'];

export default DetailItemEditCtrl;
