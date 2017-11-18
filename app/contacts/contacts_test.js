'use strict';

describe('myContacts.contacts module', function() {

  beforeEach(module('myContacts.contacts'));

  describe('contacts controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
        var ContactsCtrl = $controller('ContactsCtrl');
        expect(ContactsCtrl).toBeDefined();
    }));

  });
});
