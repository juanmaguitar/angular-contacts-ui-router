class ContactsCtrl {
	constructor ( $state, utils, contactsData) {
    this.contacts = contactsData;
    this.goToRandom = function () {
      var randId = utils.newRandomKey(this.contacts, "id", $state.params.contactId);
      $state.go('contacts.detail', { contactId: randId });
    };
	}

}

ContactsCtrl.$inject = ['$state', 'utilsService', 'contactsData'];

export default ContactsCtrl;
