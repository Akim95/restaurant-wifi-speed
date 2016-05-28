Meteor.methods({
  deleteRestaurant(restaurantId) {
    check(restaurantId, String);
    var userRestaurant = Restaurants.findOne(restaurantId);

    if (userRestaurant.userId !== Meteor.userId()) {
        throw new Meteor.Error("not-authorized");
      }
        Restaurants.remove(restaurantId);
  }
});
