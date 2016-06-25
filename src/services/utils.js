function utils() {

	// Util for finding an object by its 'id' property among an array
	function findById(a, id) {
    for (var i = 0; i < a.length; i++) {
      if (a[i].id == id) return a[i];
    }
    return null;
  }

	// Util for returning a random key from a collection that also isn't the current key
  function newRandomKey(coll, key, currentKey){
    var randKey;
    do {
      randKey = coll[Math.floor(coll.length * Math.random())][key];
    } while (randKey == currentKey);
    return randKey;
  }

  return { findById, newRandomKey };

};

export default utils;
