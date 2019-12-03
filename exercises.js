const cellphone = { // Answer #1
  phoneNumber : '3473141826', 
  addContact: function(name,phoneNumber) { //Answer #5
    cellphone.contacts.push({name, phoneNumber});
    return `${name} successfully added`
  },
  lookUp: function(str){
    let result = this.contacts.find((contact) => contact.name === str);
    return result ? result.phoneNumber: 'Contact not found';
  },
  deleteContact: function(str){
    let result = this.contacts.find((contact) => contact.name === str);
    if(!result) return 'Contact not found.'
    let deleteIndex = this.contacts.indexOf(result);
    this.contacts.splice(deleteIndex,1)
    return `${str} successfully deleted.`
  },  
  
};

 let numberOfContacts = function(){ //Answer #7
    return this.contacts.length;
  }
  
  cellphone.call = function(str){
    let result = this.contacts.find((contact) => {
      return contact.name === str || contact.phoneNumber === str;
    });
    if(result){
      return `Calling ${result.name} at ${result.phoneNumber}`
    } else{
      return 'Contact not found'
    }
  };
  

cellphone.model = 'I-phone'; //Answer #2
cellphone.contacts = []; // Answer #3
cellphone.contacts.push({name:'Paul',phoneNumber:'3473327880'}); //Answer #4
cellphone.addContact('My','1234567890'); // Answer #6
cellphone.addContact('Name','1234567890'); // Answer #6
cellphone.addContact('Dee','1234567890'); // Answer #6
console.log(cellphone);
console.log(cellphone.numberOfContacts());


const makeCellPhone = function(phoneNumber, model){
  return{
    phoneNumber,
    model,
    contacts: [],
    addContact: function(name,phoneNumber) { //Answer #5
    cellphone.contacts.push({name, phoneNumber});
    return `${name} successfully added`
  },
  numberOfContacts: numberOfContacts,
  }
}



module.exports = {
  cellphone,
  // makeCellPhone,
};
