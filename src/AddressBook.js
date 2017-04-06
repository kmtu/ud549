function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
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

AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this;

  setTimeout(function() {
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
}