//1
const cellphone = {
  phoneNumber: '0123456789',
};

//2
cellphone.model = 'OnePlus 3';

//3
cellphone.contacts = [];

//4
cellphone.contacts.push({
  name: 'enmanuel',
  phoneNumber: '0123456789',
});

//5
cellphone.contacts.addContact = function (name, phoneNumber) {
  this.push({
    name: name,
    phoneNumber: phoneNumber,
  });
  return `${name} successfully added.`;
};

//6
cellphone.contacts.addContact('santa', '404040');
cellphone.contacts.addContact('tooth-fairy', '101010');
cellphone.contacts.addContact('spaghetti-monster', '666');

//7
cellphone.numberOfContacts = function () {
  return this.contacts.length();
};

//8
//interrogate el's of contact, include index in call back function, return if found
cellphone.lookUp = function (name) {
  if ('name is the value of a key in one of the contact objects in that array') {
    return 'number in that contact';
  }
  return 'Contact not found.';
};

//9
cellphone.deleteContact = function (name) {
  if ('name is the value of a key in one of contact\'s objects') {
    //del contact
    return `${name} successfully deleted`;
  }
  return 'Contact not found.';
};

//10
cellphone.call = function (name) {

};

module.exports = {
  cellphone,
  // makeCellPhone,
};
