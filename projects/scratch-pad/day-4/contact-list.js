// #!/usr/bin/env node

'use strict';

/*Create a factory Function makeContactList that returns an Object (= function)
that manages contacts. The contact-list object should have the following methods:
     
    1. length(): returns the number of contacts within the list.
    
    2. addContact(contact): takes a contact object to be added to the 
       contact-list.

    3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
       returns the contact object if found in the contacts-list, or, 
       undefined if the fullName does not match any contacts in the list.
    
    4. removeContact(contact): takes a contact object to be removed from 
       the contact-list.
    
    5. add a printAllContactNames() Function to your makeContactList() factory. 
      The printAllContactNames() Function should 
       return a String formated with all the full-names of the separated 
       with a line-break, like so:
       
       myContacts.printAllContactNames(); // => Max Gaudin
                                                John Fraboni
                                                Kaelyn Chresfield
        
To pass this test, the LAST full name should have NO new-line character after it */

function makeContact(id, nameFirst, nameLast) {
    var contact = {};
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;
    return contact;
   }

function makeContactList() {
  var contacts = [];
  return {
    length: function() {
    return contacts.length;
  },
  addContact: function(contact) {
    contacts.push(contact);
  },
  findContact: function(fullName) {
  //return contact object if fullName string is found, undefined if not
    //split full name into first and last arr => ["Megan", "Grusenmeyer"]
    var splitFullName = fullName.split(" ");
    //loop over contacts to see if present
    for (var i = 0; i <= contacts.length - 1; i++) {
      if (contacts[i].nameFirst === splitFullName[0] && contacts[i].nameLast === splitFullName[splitFullName.length-1]) {
        //return contact object
        return contacts[i];
      } else {
          return undefined;
        }
      }
    },
    removeContact: function(contact) {
    //removes contact object from contactList
      for (var i = 0; i <= contacts.length - 1; i++) {
        if (contacts[i] === contact) {
          //remove using splice
          contacts.splice(i, 1);
        }
      }
    },
    printAllContactNames: function() {
    //returns string of all fullNames \n
      var allFullNames = [];
      for (var myFullName = 0; myFullName <= contacts.length-1; myFullName++) {
        allFullNames.push(contacts[myFullName].nameFirst + " " + contacts[myFullName].nameLast);
      }
      return allFullNames.join("\n");
    }
  }
}
   
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
