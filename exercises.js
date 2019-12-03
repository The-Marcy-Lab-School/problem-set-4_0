const cellphone = { // Answer #1
  phoneNumber : '3473141826', 
  addContact: function(name,phoneNumber) { //Answer #5
    cellphone.contacts.push({name, phoneNumber});
    return `${name} successfully added`
  },
  numberOfContacts: function(){ //Answer #7
    return this.contacts.length;
  },
  lookUp: function(str){
    for(let key in this.contacts){
      if(this.contacts[key].name === str) return this.contacts[key].phoneNumber
    }
    return 'Contact not found'
  },
  deleteContact: function(str){
    for(let key in this.contacts){
      if(this.contacts[key].name === str){
        delete this.contacts[key]
        return `${str} successfully deleted`
      } 
    }
    return 'Contact not found';
  },  
  
};
cellphone.model = 'I-phone'; //Answer #2
cellphone.contacts = []; // Answer #3
cellphone.contacts.push({name:'Paul',phoneNumber:'3473327880'}); //Answer #4
cellphone.addContact('My','1234567890'); // Answer #6
cellphone.addContact('Name','1234567890'); // Answer #6
cellphone.addContact('Dee','1234567890'); // Answer #6
console.log(cellphone);
console.log(cellphone.numberOfContacts());






module.exports = {
  cellphone,
  // makeCellPhone,
};
