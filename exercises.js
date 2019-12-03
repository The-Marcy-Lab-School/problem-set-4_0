// 1. Create an object called `cellphone`. Add a `phoneNumber` property that holds a 10-digit string as a value.
  const cellphone = {
    phoneNumber: '1111111111'
  };
// 2. Add a `model` property that holds a string that represents the type of phone it is (e.g. `Samsung Galaxy Note`)
  cellphone.model = 'Samsung Galaxy Note';
// 3. Add a `contacts` property with a value of an empty array. 
  cellphone.contacts = [];
// 4. Add a contact to the `contacts` property. The contact should be an object containing a `name` property and a `phoneNumber` property.
  cellphone.contacts.push({
    name: 'Cielo',
    phoneNumber: '0000000000',
  });
// 5. Let's create an abstraction on top of the `contacts` property so that we don't have to call array methods directly on the property. Instead, let's add an `addContact` method. This method should take two arguments - a `name` and a `phoneNumber` - and it should add an object to the `contacts` array with the passed arguments as values. This method should return `<<name>> successfully added.`
  cellphone.addContact = function(name, phoneNumber){
    this.contacts.push({name, phoneNumber});
    return `${name} successfully added.`;
  };
// 6. Test your method out by adding three different phone numbers to your `cellphone` object.
  cellphone.addContact('contact2', '1245562345');
  cellphone.addContact('contact3', '1245562345');
  cellphone.addContact('contact4', '1245562345');
// 7. Add a method to your object called `numberOfContacts`. It should return the total number of `contacts`. Test your method by calling it on your object. It should return `4` if you've been following along correctly 😉.
  cellphone.numberOfContacts = function(){
    return this.contacts.length;
  };   
// 8. Add a method called `lookUp` which takes a string argument that represents the name of a contact. This method should return the `phoneNumber` of the contact with the given `name`. If no such contact is present, it should return `'Contact not found.'`
  cellphone.lookUp = function(nameOfContact){
    for (let contact in this.contacts) {
      if(this.contacts[contact].name === nameOfContact){
        return this.contacts[contact].phoneNumber;
      }
    }
    return 'Contact not found.';
  };
  
// 9. Add a method called `deleteContact`. It should take a string argument that represents a name. It should delete the contact with the matching `name` and return `<<name>> successfully deleted.`. If no matching `name` is found, it should return `Contact not found.`
  cellphone.deleteContact = function (nameOfContact){
    let foundContact = this.contacts.find((contact) => contact.name === nameOfContact);
    if (foundContact){
      let indexofCon = this.contacts.indexOf(foundContact);
      this.contacts.splice(indexofCon, 1);
      return `${nameOfContact} successfully deleted.`;
    }
    return 'Contact not found.';
  };
  
// 10. Add a method called `call` which takes a string argument and returns `"Calling <<name>> at <<phoneNumber>>..."` if the contact is found. **Note: This string argument can be a name OR a phone number.** If there is no contact with a `name` or `phoneNumber` that matches the given argument, it should return `'Contact not found'`. 
//       ```javascript
//       cellphone.call('Reuben Ogbonna'); // 'Calling Reuben Ogbonna at 9196219388' (if contact is found)
//       cellphone.call('9196219388'); // 'Calling Reuben Ogbonna at 9196219388' (if contact is found)

//       cellphone.call('lakjsdfasdl'); // 'Contact not found.'
//       ```
  cellphone.call = function(str){
    let foundContact = this.contacts.find((contact) => contact.name === str || contact.phoneNumber === str);
    if (foundContact){
      return `Calling ${foundContact.name} at ${foundContact.phoneNumber}`;
    }
    return 'Contact not found.';
  };
// 11. Lastly, create a _factory function_ called `makeCellPhone`. This function should return an object with all of the properties and methods that we defined above. This function should take two string arguments such that the resulting cellphone object should be initialized with a `phoneNumber` and a `model`. 
const makeCellPhone = (phoneNumber, model) => {
  return {
      phoneNumber,
      model,
      contacts: [],
      addContact (name, phoneNumber){
        this.contacts.push({name, phoneNumber});
        return `${name} was successfully added`;
      },
      numberOfContacts (){
        return this.contacts.length;
      },  
      lookUp (nameOfContact){
        for (let contact in this.contacts) {
          if(this.contacts[contact].name === nameOfContact){
            return this.contacts[contact].phoneNumber;
          }
        }
        return 'Contact not found';
      },
      deleteContact (nameOfContact){
        let foundContact = this.contacts.find((contact) => contact.name === nameOfContact);
        if (foundContact){
          let indexofCon = this.contacts.indexOf(foundContact);
          this.contacts.splice(indexofCon, 1);
          return `${nameOfContact} successfully deleted`;
        }
        return 'Contact not found';
      },
      call (str){
        let foundContact = this.contacts.find((contact) => contact.name === str || contact.phoneNumber === str);
        if (foundContact){
          return `Calling ${foundContact.name} at ${foundContact.phoneNumber}`;
        }
        return 'contact not found';
      }
  };
};

module.exports = {
  cellphone,
  makeCellPhone,
};
