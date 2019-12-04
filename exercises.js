// Question 1
const cellphone = {
  phoneNumber: '3479224333',
};

// Question 2
cellphone.model = 'Samsung Galaxy Note';

// Question 3
cellphone.contacts = [];

// Question 4
cellphone.contacts.push({ name: 'Devonte', phoneNumber: '3479224313' });

// Question 5
cellphone.addContact = function(name, phoneNumber) {
  this.contacts.push({ name, phoneNumber });
  return `${name} successfully added.`;
};

// Question 6
cellphone.addContact('Cielo', '1234567890');
cellphone.addContact('Mavis', '0987654321');
cellphone.addContact('Cobalt', '3471234567');

// Question 7
cellphone.numberOfContacts = function() {
  return this.contacts.length;
};

// Question 8
cellphone.lookUp = function(person) {
  const result = this.contacts.find((contact) => contact.name === person || contact.phoneNumber === person);
  return result === undefined ? 'Contact not found.' : result.phoneNumber;
};

cellphone.addContact('Reuben Ogbonna', '9196219388');
console.log(cellphone.lookUp('Reuben Ogbonna'));

// Question 9
cellphone.deleteContact = function(person) {
  const result = this.contacts.find((contact) => contact.name === person || contact.phoneNumber === person);
  const deleteIndex = this.contacts.indexOf(result);
  this.contacts.splice(deleteIndex, 1);
  return result === undefined ? 'Contact not found.' : `${person} successfully deleted.`;
};


// Question 10
cellphone.call = function(person) {
  const result = this.contacts.find((contact) => contact.name === person || contact.phoneNumber === person);
  return result === undefined ? 'Contact not found.' : `Calling ${result.name} at ${result.phoneNumber}`;
};

// Question 11
const makeCellPhone = function (phoneNumber, model) {
  return {
    phoneNumber,
    model,

    addContact(name, phoneNumber) {
      this.contacts.push({ name, phoneNumber });
      return `${name} successfully added.`;
    },
    numberOfContacts() {
      return this.contacts.length;
    },
    lookUp(person) {
      const result = this.contacts.find((contact) => contact.name === person || contact.phoneNumber === person);
      return result === undefined ? 'Contact not found.' : result.phoneNumber;
    },
    deleteContact(person) {
      const result = this.contacts.find((contact) => contact.name === person || contact.phoneNumber === person);
      const deleteIndex = this.contacts.indexOf(result);
      this.contacts.splice(deleteIndex, 1);
      return result === undefined ? 'Contact not found' : `${person} has been successfully deleted`;
    },
    call(person) {
      const result = this.contacts.find((contact) => contact.name === person || contact.phoneNumber === person);
      return result === undefined ? 'Contact not found' : `Calling ${result.name} at ${result.phoneNumber}`;
    },
  };
};


module.exports = {
  cellphone,
  makeCellPhone,
};
