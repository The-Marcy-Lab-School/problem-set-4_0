const cellphone = {
  phoneNumber: '7462826352',
  addContact(name, phoneNumber) {
    cellphone.contacts.push({ name, phoneNumber });
    return `${name} successfully added`;
  },
  numberOfContacts() {
    return this.contacts.length;
  },
  lookUp(str) {
    for(key of this.contacts) {
      if(key.name == str) {
        return key.phoneNumber;
      }
    }
    return "Contact not found."
  },
  deleteContact(str) {
    for(key of this.contacts) {
      if(key.name == str) {
        delete key.name;
        delete key.phoneNumber;
        // this.contacts.filter( (data) => { return data != undefined || null || NaN || "" }); 
        // Above line is to remove empty objects within array.
        return `${str} successfully deleted.`
      }
    }
    return 'Contact not found.'
  },
  call(str) {
    for(key of this.contacts) {
      if(key.name == str || key.phoneNumber == str) return `Calling ${name} at ${phoneNumber}`
      else { return 'Contact not found.'}
    }
  },
  makeCellPhone(phoneNumber, model) {
    return {};
    This function should return an object with all of the properties and methods that we defined above. 
    This function should take two string arguments such that 
    the resulting cellphone object should be initialized with a phoneNumber and a model.
  }
};

cellphone.model = 'iPhone X iOS 13.2.2 #Checkra1n';
cellphone.contacts = [];
cellphone.contacts.push({name:'Peter',phoneNumber:'3474236107'});
cellphone.addContact('Pete', '1234567890');
cellphone.addContact('Petra', '1234567890');
cellphone.addContact('Pelican', '1234567890');

module.exports = {
  cellphone,
  // makeCellPhone,
};
