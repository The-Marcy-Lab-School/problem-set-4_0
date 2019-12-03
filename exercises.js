const cellphone = {
  phoneNumber: '7462826352',
  addContact(name, phoneNumber) {
    cellphone.contacts.push({ name, phoneNumber });
    return `${name} successfully added`;
  },
  numberOfContacts() {
    return Object.keys(cellphone.contacts).length;
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
