// Subscribe
Template.Account.onCreated( () => {
     Template.instance().subscribe("restaurant");
});

Template.Account.helpers({
  userEmail() {
    return Meteor.user().emails[0].address;
  },
  userProfile() {
    return Meteor.user().profile.name
  },
  restaurant() {
    return Restaurants.find({userId: Meteor.userId()});
  }
});

Template.Account.events({
  'click .confirm'() {
    Session.set("confirm", this._id);
  },
  'click .delete'() {
    Meteor.call('deleteRestaurant', Session.get("confirm"));
  }
});

Template.Account.onRendered( () => {

  $(document).ready(function(){
    $('.modal-trigger-confirm-acc').leanModal();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);
