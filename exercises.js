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
cellphone.addContact = function (name, phoneNumber) {
  this.contacts.push({
    name: name,
    phoneNumber: phoneNumber,
  });
  return `${name} successfully added.`;
};

console.log(cellphone.addContact('hello', 'world'));

//6
cellphone.contacts.addContact('santa', '404040');
cellphone.contacts.addContact('tooth-fairy', '101010');
cellphone.contacts.addContact('spaghetti-monster', '666');

//7
cellphone.numberOfContacts = function () {
  return this.contacts.length;
};

//8
//interrogate el's of contact, include index in call back function, return if found
cellphone.lookUp = function (name) {
  if (cellphone.contacts.find((contact, index) => { contact.name === name })) {
    return 'its in there somewhere';
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
