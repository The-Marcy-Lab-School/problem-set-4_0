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
  lookUp(str) {
    for(let key of this.contacts) {
      if(key.name === str) {
        return key.phoneNumber;
      }
    }
    return 'Contact not found.'
  },
  deleteContact(str) {
    for(let key of this.contacts) {
      if(key.name === str) {
        delete key.name;
        delete key.phoneNumber;
        return `${str} successfully deleted.`
      }
    }
    return 'Contact not found.'
  },
  call(str) {
    for(let key of this.contacts) {
      if(key.name === str || key.phoneNumber === str) {
        return `Calling ${key.name} at ${key.phoneNumber}...`;
      }
    }
    return 'Contact not found.'
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
    lookUp(str) {
      for(let key of this.contacts) {
        if(key.name === str) {
          return key.phoneNumber;
        }
      }
      return 'Contact not found.'
    },
    deleteContact(str) {
      for(let key of this.contacts) {
        if(key.name === str) {
          delete key.name;
          delete key.phoneNumber;
          return `${str} successfully deleted.`
        }
      }
      return 'Contact not found.'
    },
    call(str) {
      for(let key of this.contacts) {
        if(key.name === str || key.phoneNumber === str) {
          return `Calling ${key.name} at ${key.phoneNumber}...`;
        }
      }
      return 'Contact not found.'
    }
};

module.exports = {
  cellphone,
  // makeCellPhone,
};
