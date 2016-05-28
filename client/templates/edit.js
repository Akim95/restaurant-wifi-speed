// Autoform hooks
AutoForm.hooks({
  'editResForm': { // Insert form
    onSuccess: function (operation, result, template) {
      FlashMessages.send("Successfully updated");
      Router.go('/account');
    }
  }
});

Template.editRestaurant.helpers({
  restaurant() {
    return Restaurants.findOne({_id: this._id});
  },
  isOwner() {
    return this.userId === Meteor.userId();
  }
});
