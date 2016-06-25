class DetailCtrl {
	constructor ( $stateParams, utils, contact ) {
		this.contact = contact;
	}
}

DetailCtrl.$inject = ['$stateParams', 'utilsService', 'contact'];

export default DetailCtrl;
