const { cellphone, makeCellPhone } = require('./exercises');

// beforeEach(() => {
//   cellphone.contacts = [];
// });

test('Question 1: has phoneNumber property of 10 digits', () => {
  expect(cellphone.phoneNumber).toMatch(/\d{10}/);
  expect(typeof cellphone.phoneNumber).toBe("string");
});

test('Question 2: has model string property', () => {
  expect(cellphone.model).not.toBeUndefined();
  expect(typeof cellphone.model).toBe("string");
});

test('Question 3: contacts property is an array', () => {
  expect(typeof cellphone.contacts).toBe("object");
  expect(Array.isArray(cellphone.contacts)).toBe(true);
});

test('Question 4: contact was added to contacts property', () => {
  expect(cellphone.contacts.length).toBeGreaterThanOrEqual(1);
  expect(cellphone.contacts[0].name).not.toBeUndefined();
  expect(cellphone.contacts[0].phoneNumber).not.toBeUndefined();
});

test('Question 5: addContact method adds to contacts array', () => {
  let contactCount = cellphone.contacts.length;
  expect(cellphone.addContact).not.toBeUndefined();
  expect(cellphone.addContact('Reuben Ogbonna', '9196219388')).toBe('Reuben Ogbonna successfully added.');
  expect(cellphone.addContact('Ann', '0987654321')).toBe('Ann successfully added.');
  expect(cellphone.contacts.length).toBe(contactCount + 2);
  expect(cellphone.contacts.some((contact) => contact.name === 'Reuben Ogbonna')).toBe(true);
  expect(cellphone.contacts.some((contact) => contact.name === 'Ann')).toBe(true);
  expect(cellphone.contacts.some((contact) => contact.phoneNumber === '9196219388')).toBe(true);
  expect(cellphone.contacts.some((contact) => contact.phoneNumber === '0987654321')).toBe(true);
});

test('Question 6: Contacts were added to contacts property', () => {
  expect(cellphone.contacts.length).toBeGreaterThanOrEqual(3);
});

test('Question 7: numberOfContacts works', () => {
  expect(cellphone.contacts.length).toBe(cellphone.numberOfContacts());
  expect(cellphone.addContact('Maya', '1234567890')).toBe('Maya successfully added.');
  expect(cellphone.contacts.length).toBe(cellphone.numberOfContacts());
});

test('Question 8: lookUp works', () => {
  expect(cellphone.lookUp('Reuben Ogbonna')).toBe('9196219388');
  expect(cellphone.lookUp('Ann')).toBe('0987654321');
  expect(cellphone.lookUp(Math.random().toString())).toBe('Contact not found.');
});

test('Question 9: deleteContact works', () => {
  cellphone.contacts.push({name: 'Jim Smith', phoneNumber: '9876543210'});
  expect(cellphone.deleteContact('Jim Smith')).toBe('Jim Smith successfully deleted.');
  expect(cellphone.contacts.some((contact) => contact.name === 'Jim Smith')).toBe(false);
  expect(cellphone.deleteContact(Math.random().toString())).toBe('Contact not found.');
});

test('Question 10: call works for name', () => {
  expect(cellphone.call('Reuben Ogbonna')).toBe('Calling Reuben Ogbonna at 9196219388');
  expect(cellphone.call('9196219388')).toBe('Calling Reuben Ogbonna at 9196219388');
  expect(cellphone.call(Math.random().toString())).toBe('Contact not found.');
});

test('Question 11: makeCellPhone factory function', () => {
  const reubensCell = makeCellPhone('9196219388', 'iPhone XR');
  expect(typeof reubensCell).toBe("object");
  expect(reubensCell.phoneNumber).toBe('9196219388');
  expect(reubensCell.model).toBe('iPhone XR');
  expect(Array.isArray(reubensCell.contacts)).toBe(true);
  expect(reubensCell.contacts.length).toBe(0);
  expect(reubensCell.addContact("Ann", '0987654321')).toBe("Ann successfully added.");
  expect(reubensCell.numberOfContacts()).toBe(1);
  expect(reubensCell.lookUp("Ann")).toBe("0987654321");
  expect(reubensCell.call("Ann")).toBe("Calling Ann at 0987654321");
  expect(reubensCell.deleteContact("Ann")).toBe("Ann successfully deleted.");
  expect(reubensCell.numberOfContacts()).toBe(0);
});
