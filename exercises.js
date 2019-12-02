const cellphone = {
  phoneNumber : '3473141826',
  addContact: function(name,phoneNumber) {
    cellphone.contacts.push({name, phoneNumber});
    return `${name} successfully added`
  }
};
cellphone.model = 'I-phone';
cellphone.contacts = [];
cellphone.contacts.push({name:'Paul',phoneNumber:'3473327880'});
cellphone.addContact('My','1234567890');
cellphone.addContact('Name','1234567890');
cellphone.addContact('Dee','1234567890');

module.exports = {
  cellphone,
  // makeCellPhone,
};
