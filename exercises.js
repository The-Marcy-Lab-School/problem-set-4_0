/*
1. Encapsulation is the separation of interface from implementation. It is used in order to divide programs into sections that are either private or public. Objects enable encapsulation by storing functions and properties that are able to be leveraged. 
*/

/*
2. Objects encapsulate state by 
*/

/*
3. In JavaScript private data is created by an underscore (_) character at the beginning of a property name however the data is still public.
*/

/*
4. Factory functions are functions that return an object and are useful as they can be reused to create multiple object instances. Factory functions can also take in parameters that can allow for customization of the object that gets returned
*/
const cellphone = {
    phoneNumber: '2015394059',
    model: 'Samsung Galaxy Note',
    addContact(name, phoneNumber) {
        this.contacts.push({name: name,phoneNumber: phoneNumber});
        return `${name} was successfully added.`
    },
    numberOfContacts() {
      return this.contacts.length;
    },
    lookUp(str) {
      for()
    }
    
    // Add a method called `lookUp` which takes a string argument that represents the name of a contact. This method should return the //`phoneNumber` of the contact with the given `name`. If no such contact is present, it should return `'Contact not found.'`
};
cellphone.contacts = [];
cellphone.contacts.push({name: 'Laisha', phoneNumber: '1847289374'});


//method this that refers to the object 
//this represents the object that it lives in!!!!



// cellphone.contacts = [];
cellphone.contacts.push({name: 'Laisha', phoneNumber: '1284728937'});


//method this that refers to the object 
//this represents the object that it lives in!!!!

module.exports = {
  cellphone,
  // makeCellPhone,
};
