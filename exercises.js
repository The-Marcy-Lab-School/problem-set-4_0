const cellphone = {
  phoneNumber: '1234567890',
  model: 'iPhone',
  contacts: [],
  addContact(name, phoneNumber) {
    this.contacts.push({name, phoneNumber});
    return `${name} has been successfully added.`;
  },
  numberOfContacts() {
    return this.contacts.length;
  },
  lookUp(name) {
    let result = this.contacts.find(contact => contact.name === name);
    return result ? result.phoneNumber : 'Contact not found.';
  },
  deleteContact(name) {
    let result = this.contacts.find(contact => contact.name === name);
    if (!result) return 'Contact not found.';
    let deleteIndex = this.contacts.indexOf(result);
    this.contacts.splice(deleteIndex, 1);
    return `${name} successfully deleted.`;
  },
  call(str) {
    let result = this.contacts.find(contact => {
      return contact.name === str || contact.phoneNumber === str;
    });
    return result ? `Calling ${result.name} at ${result.phoneNumber}...` : 'Contact not found.';
  }
};

const makeCellPhone = (model, phoneNumber) => {
  return {
    phoneNumber: phoneNumber,
    model: model,
    contacts: [],
    addContact(name, phoneNumber) {
      this.contacts.push({name, phoneNumber});
      return `${name} has been successfully added.`;
    },
    numberOfContacts() {
      return this.contacts.length;
    },
    lookUp(name) {
      let result = this.contacts.find(contact => contact.name === name);
      return result ? result.phoneNumber : 'Contact not found.';
    },
    deleteContact(name) {
      let result = this.contacts.find(contact => contact.name === name);
      if (!result) return 'Contact not found.';
      let deleteIndex = this.contacts.indexOf(result);
      this.contacts.splice(deleteIndex, 1);
      return `${name} successfully deleted.`;
    },
    call(str) {
      let result = this.contacts.find(contact => {
        return contact.name === str || contact.phoneNumber === str;
      });
      return result ? `Calling ${result.name} at ${result.phoneNumber}...` : 'Contact not found.';
    }
  };
};

module.exports = {
  cellphone,
  makeCellPhone,
};
