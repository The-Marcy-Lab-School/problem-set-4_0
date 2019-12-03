const cellphone = {   //1
  phoneNumber: '3479224333',
  contacts: [{name: 'test', number: '1234567890'}],
  addContact (name, number){  //5
    this.contacts.push({name, number});
    return `${name} successfully added.`;
  },
  numberOfContacts () {  //7
    return this.contacts.length;
  },
  lookUp (name) {  //8
   for(let person in this.contacts){
     if (this.contacts[person].name === name)return this.contacts[person].number;
   }
   return 'Contact not found';
  },
  deleteContact (name) { //9
    for(let person in this.contacts){
     if (this.contacts[person].name === name){
       delete this.contacts[person];
       return `${name} sucessfully deleted`;
   }
   return 'Contact not found';
  }
 },
 call () {
   
 }
}

cellphone.model = 'Samsung Galaxy Note'; //2
//cellphone.contacts = []; //3
cellphone.contacts.push({name: "Devonte", phoneNumber: '3479224313'}); //4
//6
cellphone.addContact('Cielo', '1234567890'); 
cellphone.addContact('Mavis', '0987654321');
cellphone.addContact('Cobalt', '3471234567');



module.exports = {
  cellphone,
  // makeCellPhone,
};
