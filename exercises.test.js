const { cellphone, makeCellPhone } = require('./exercises');

test('has phoneNumber property of 10 digits', () => {
  expect(cellphone.phoneNumber).toMatch(/\d{10}/);
});

test('has model property', () => {
  expect(cellphone.model).not.toBeUndefined();
});

test('contacts property is an array', () => {
  expect(typeof cellphone.contacts).toBe("object");
  expect(Array.isArray(cellphone.contacts)).toBe(true);
});

test('has an addContact method', () => {
  expect(cellphone.addContact).not.toBeUndefined();
});


test('addContact method adds to contacts array', () => {
  let contactCount = cellphone.contacts.length;
  expect(cellphone.addContact('Reuben Ogbonna', '9196219388')).toBe('Reuben Ogbonna successfully added.');
  expect(cellphone.contacts.length).toBe(contactCount + 1);
  expect(cellphone.contacts.some((contact) => contact.name === 'Reuben Ogbonna')).toBe(true);
});

test('numberOfContacts works', () => {
  expect(cellphone.contacts.length).toBe(cellphone.numberOfContacts());
});

test('lookUp works', () => {
  expect(cellphone.lookUp('Reuben Ogbonna')).toBe('9196219388');
  expect(cellphone.lookUp(Math.random().toString())).toBe('Contact not found.');
});

test('deleteContact works', () => {
  cellphone.contacts.push({name: 'Jim Smith', phoneNumber: '9876543210'});
  expect(cellphone.deleteContact('Jim Smith')).toBe('Jim Smith successfully deleted.');
  expect(cellphone.contacts.none((contact) => contact.name === 'Jim Smith')).toBe(true);
  expect
  expect(cellphone.deleteContact(Math.random().toString())).toBe('Contact not found.');
});

test('call works for name', () => {
  expect(cellphone.call('Reuben Ogbonna')).toBe('Calling Reuben Ogbonna at 9196219388');
  expect(cellphone.call('9196219388')).toBe('Calling Reuben Ogbonna at 9196219388');
  expect(cellphone.call(Math.random().toString())).toBe('Contact not found.');
});

test('makeCellPhone factory function', () => {
  const reubensCell = makeCellPhone('9196219388', 'iPhone XR');
  expect(typeof reubensCell).toBe("object");
  expect(reubensCell.phoneNumber).toBe('9196219388');
  expect(reubensCell.model).toBe('iPhone XR');
});
