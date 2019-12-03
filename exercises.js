// NUMBER 1
const cellphone = {
  phoneNumber: '1234567890', //1
  model: `Samsung Galaxy Note`,//2
  contacts: [],
  addContact(name, phoneNumber){
    this.contacts.push({name, phoneNumber})
  },

}

console.log(cellphone.addContact('carmen', '3473724572'));

// NUMBER 2
// NUMBER 3
// NUMBER 4
// NUMBER 5
// NUMBER 6
// NUMBER 7
// NUMBER 8
// NUMBER 9
// NUMBER 10

module.exports = {
  cellphone,
  // makeCellPhone,
};
