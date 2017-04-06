function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(idx) {
  return this.contacts[idx];
}

AddressBook.prototype.deleteContact = function(idx) {
  this.contacts.splice(idx, 1);
  console.log("log: " + this.contacts[0]);
}