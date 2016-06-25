class ContactsCtrl {
	constructor ( $state, utils, contactsList) {
    this.contacts = contactsList;
    this.goToRandom = function () {
      var randId = utils.newRandomKey(this.contacts, "id", $state.params.contactId);
      $state.go('contacts.detail', { contactId: randId });
    };
	}

}

ContactsCtrl.$inject = ['$state', 'utilsService', 'contactsList'];

export default ContactsCtrl;
