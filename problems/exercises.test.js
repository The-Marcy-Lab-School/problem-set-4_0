const { cellphone, makeCellPhone } = require('./exercises');

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
  let cellphoneCopy = {...cellphone};
  cellphoneCopy.contacts = [];
  let contactCount = cellphoneCopy.contacts.length;
  expect(cellphoneCopy.addContact).not.toBeUndefined();
  expect(cellphoneCopy.addContact('Reuben Ogbonna', '9196219388')).toBe('Reuben Ogbonna successfully added.');
  expect(cellphoneCopy.addContact('Ann', '0987654321')).toBe('Ann successfully added.');
  expect(cellphoneCopy.contacts.length).toBe(contactCount + 2);
  expect(cellphoneCopy.contacts.some((contact) => contact.name === 'Reuben Ogbonna')).toBe(true);
  expect(cellphoneCopy.contacts.some((contact) => contact.name === 'Ann')).toBe(true);
  expect(cellphoneCopy.contacts.some((contact) => contact.phoneNumber === '9196219388')).toBe(true);
  expect(cellphoneCopy.contacts.some((contact) => contact.phoneNumber === '0987654321')).toBe(true);
});

test('Question 6: Contacts were added to contacts property', () => {
  expect(cellphone.contacts.length).toBeGreaterThanOrEqual(3);
});

test('Question 7: numberOfContacts works', () => {
  let cellphoneCopy = {...cellphone};
  cellphoneCopy.contacts = [];
  expect(cellphoneCopy.addContact).not.toBeUndefined();
  expect(cellphoneCopy.addContact('Reuben Ogbonna', '9196219388')).toBe('Reuben Ogbonna successfully added.');
  expect(cellphoneCopy.addContact('Ann', '0987654321')).toBe('Ann successfully added.');
  expect(cellphoneCopy.contacts.length).toBe(cellphoneCopy.numberOfContacts());
  expect(cellphoneCopy.addContact('Maya', '1234567890')).toBe('Maya successfully added.');
  expect(cellphoneCopy.contacts.length).toBe(cellphoneCopy.numberOfContacts());
});

test('Question 8: lookUp works', () => {
  let cellphoneCopy = {...cellphone};
  cellphoneCopy.contacts = [];
  expect(cellphoneCopy.addContact).not.toBeUndefined();
  expect(cellphoneCopy.addContact('Reuben Ogbonna', '9196219388')).toBe('Reuben Ogbonna successfully added.');
  expect(cellphoneCopy.addContact('Ann', '0987654321')).toBe('Ann successfully added.');
  expect(cellphoneCopy.lookUp('Reuben Ogbonna')).toBe('9196219388');
  expect(cellphoneCopy.lookUp('Ann')).toBe('0987654321');
  expect(cellphoneCopy.lookUp(Math.random().toString())).toBe('Contact not found.');
});

test('Question 9: deleteContact works', () => {
  let cellphoneCopy = {...cellphone};
  cellphoneCopy.contacts = [];
  expect(cellphoneCopy.addContact).not.toBeUndefined();
  expect(cellphoneCopy.addContact('Reuben Ogbonna', '9196219388')).toBe('Reuben Ogbonna successfully added.');
  expect(cellphoneCopy.addContact('Ann', '0987654321')).toBe('Ann successfully added.');
  cellphoneCopy.contacts.push({name: 'Jim Smith', phoneNumber: '9876543210'});
  expect(cellphoneCopy.deleteContact('Jim Smith')).toBe('Jim Smith successfully deleted.');
  expect(cellphoneCopy.contacts.some((contact) => contact.name === 'Jim Smith')).toBe(false);
  expect(cellphoneCopy.deleteContact(Math.random().toString())).toBe('Contact not found.');
});

test('Question 10: call works for name', () => {
  let cellphoneCopy = {...cellphone};
  cellphoneCopy.contacts = [];
  expect(cellphoneCopy.addContact).not.toBeUndefined();
  expect(cellphoneCopy.addContact('Reuben Ogbonna', '9196219388')).toBe('Reuben Ogbonna successfully added.');
  expect(cellphoneCopy.addContact('Ann', '0987654321')).toBe('Ann successfully added.');
  expect(cellphoneCopy.call('Reuben Ogbonna')).toBe('Calling Reuben Ogbonna at 9196219388');
  expect(cellphoneCopy.call('Ann')).toBe('Calling Ann at 0987654321');
  expect(cellphoneCopy.call('9196219388')).toBe('Calling Reuben Ogbonna at 9196219388');
  expect(cellphoneCopy.call(Math.random().toString())).toBe('Contact not found.');
});

test('Question 11: makeCellPhone factory function', () => {
  const reubensCell = makeCellPhone('9196219388', 'iPhone XR');
  const annesCell = makeCellPhone('1111111111', 'Flip Phone');
  expect(annesCell === reubensCell).toBe(false);
  
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
