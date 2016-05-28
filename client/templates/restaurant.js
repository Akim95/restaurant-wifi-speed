// Load
var defaultValue = 10; // Default Value
Session.setDefault("load", defaultValue);

Template.Restaurant.events({
  'click .confirm'() {
    Session.set("confirm", this._id);
  },
  'click .delete'() {
    Meteor.call('deleteRestaurant', Session.get("confirm"));
  },
  'click .loadmore'() {
    Session.set("load", Session.get("load") + defaultValue)
  }
});

Template.Restaurant.helpers({
  restaurants() { // Restaurant document
    return Restaurants.find({}, {sort: {speedValue: -1}, limit: Session.get("load")});
  },
  isOwner() {
    return this.userId === Meteor.userId();
  },
  loadCount() {
    return !(Restaurants.find().count() < Session.get("load"));
  }
});

Template.Restaurant.onRendered( () => {
  $(document).ready(function(){
    $('.modal-trigger-confirm').leanModal();
  });
});

var accountAlert = (error, state) => {
  if (!error) {
    if (state === "signIn") {
      FlashMessages.send("You have successfully logged in!");
    }
    if (state === "signUp") {
      FlashMessages.send("Your account was successfully registered!");
    }
    if (state === "changePwd") {
      FlashMessages.send("Your password was successfully changed!");
    }
  }
};

AccountsTemplates.configure({
  onSubmitHook: accountAlert
});
