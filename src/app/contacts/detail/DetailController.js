class DetailCtrl {
	constructor ( $stateParams, utils) {
		this.contact = utils.findById(this.contacts, $stateParams.contactId);
	}
}

DetailCtrl.$inject = ['$stateParams', 'utilsService'];

export default DetailCtrl;
