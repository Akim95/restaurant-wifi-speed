Template.nav.helpers({
  userName() {
    if (Meteor.user().username) {
      return Meteor.user().username
    }
    if (Meteor.user().profile) {
      return Meteor.user().profile.name
    }
  }
});

Template.nav.onRendered(() => {
  $('.mobile-nav').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);

  $(document).ready(function(){
    $('.modal-trigger').leanModal();
  });
});
