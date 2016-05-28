// Layout
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',

  waitOn: function () {
  return Meteor.subscribe('restaurants');
}
});

// Index
Router.route('/', function () {
  this.render('Restaurant');
});

// Show
Router.route('/restaurant/:_id', function () {
  var restaurant = Restaurants.findOne({_id: this.params._id});
  this.render('showRestaurant', {data: restaurant});
});

// Edit/Update
Router.route('/edit/:_id', function () {
  var restaurant = Restaurants.findOne({_id: this.params._id});
  this.render('editRestaurant', {data: restaurant});
});

// Insert form
Router.route('/new', function () {
    this.render('New');
});

// Search
Router.route('/search', function() {
  this.render('Search');
});

// My Account
Router.route('/account', function() {
  this.render('Account');
})

// MaterializeFlashMessages
Router.onRun("materializeFlashMessages");
Router.onAfterAction("materializeFlashMessages");

// UserAccounts Routes
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
