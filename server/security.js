// Publish
Meteor.publish("restaurants", function(){
  return Restaurants.find({}, {sort: {speedValue: -1}});
});
Meteor.publish("restaurant", function() {
  return Restaurants.find();
});
