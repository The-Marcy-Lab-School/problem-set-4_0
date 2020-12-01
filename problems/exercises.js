// const cellphone = {
//     phoneNumber: '01234567890',
//     model: 'iPhone 2',
//     contacts: [],
//     addContact: function(name, phoneNumber) {
//         this.contacts.push({name: name, phoneNumber: phoneNumber});
//         return `${name} successfully added.`;
//     },
//     numberOfContacts() {
//         return this.contacts.length;
//     },
//     lookUp: function(name) {
//         let result = this.contacts.find((contact) => contact.name === name);
//         return result ? result.phoneNumber : "Contact not found."; 
//     },
//     deleteContact: function(name) {
//         let result = this.contacts.find((contact) => contact.name === name);
//         if (!result) return "Contact not found.";
    
//         let deleteIndex = this.contacts.indexOf(result);
//         this.contacts.splice(deleteIndex, 1);
//         return `${name} successfully deleted.`;
//     },
//     call: function(str) {
//         let contact = this.contacts.find((contact) => {
//             return contact.name === str || contact.phoneNumber === str;
//         });
//         if (contact) {
//             return `Calling ${contact.name} at ${contact.phoneNumber}`;
//         } else {
//             return "Contact not found."
//         }
//     }
// }

// cellphone.contacts.push({name: 'peter', phoneNumber: '9998887877'});

// cellphone.addContact('paul', '9194445555');
// cellphone.addContact('devonte', '8889445555');
// cellphone.addContact('laisha', '1889445555');

//Question 1
const cellphone = {
  phoneNumber: '01234567890',
}

// Question 2
cellphone.model = 'iPhone 2';

// Question 3
cellphone.contacts = [];

// Question 4
cellphone.contacts.push({name: 'peter', phoneNumber: '9998887877'});

// Question 5
cellphone.addContact = function(name, phoneNumber) {
this.contacts.push({name: name, phoneNumber: phoneNumber});
return `${name} successfully added.`;
}

// Question 6
cellphone.addContact('paul', '9194445555');
cellphone.addContact('devonte', '8889445555');
cellphone.addContact('laisha', '1889445555');

// Question 7
cellphone.numberOfContacts = function () {
    return this.contacts.length;
};

// Question 8
cellphone.lookUp = function(name) {
  let result = this.contacts.find((contact) => contact.name === name);
  return result ? result.phoneNumber : "Contact not found."; 
}

// Question 9
cellphone.deleteContact = function(name) {
  let result = this.contacts.find((contact) => contact.name === name);
  if (!result) return "Contact not found.";
  let deleteIndex = this.contacts.indexOf(result);
  this.contacts.splice(deleteIndex, 1);
  return `${name} successfully deleted.`;
}

// Question 10
cellphone.call = function(str) {
  let contact = this.contacts.find((contact) => {
    return contact.name === str || contact.phoneNumber === str;
  });
  if (contact) {
    return `Calling ${contact.name} at ${contact.phoneNumber}`;
  } else {
    return "Contact not found."
  }
}

// Question 11
const makeCellPhone = function(phoneNumber, model) {
  return {
    phoneNumber: phoneNumber,
    model: model,
    contacts: [],
    addContact: cellphone.addContact,
    numberOfContacts: cellphone.numberOfContacts,
    lookUp: cellphone.lookUp,
    call: cellphone.call,
    deleteContact: cellphone.deleteContact
  }
}

module.exports = {
  cellphone,
  makeCellPhone,
};