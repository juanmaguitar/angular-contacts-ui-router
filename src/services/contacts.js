function contacts($http, utils) {

  const path = 'data/contacts.json';
	const filterContacts = (resp) => resp.data.contacts;

  var contacts = $http.get(path).then( filterContacts );

  var factory = {};
  factory.all = () => contacts;

  factory.get = function (id) {
  	console.log("b --- get...")
  	console.log(id)
  	console.log(contacts)
  	console.log("e ---- get...")
		const findById = () => utils.findById(contacts,id)
		return contacts.then(findById);

	}


  return factory;

};

contacts.$inject = ['$http', 'utilsService'];

export default contacts;
