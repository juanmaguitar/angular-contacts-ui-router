function getContactDetails( utils, contactsList, $stateParams ) {
	return utils.findById( contactsList, $stateParams.contactId);
}

getContactDetails.$inject = ['utilsService', 'contactsList', '$stateParams'];

export default getContactDetails;




