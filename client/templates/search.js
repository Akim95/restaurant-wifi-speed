// Subscribe
Template.Search.onCreated( () => {
     Template.instance().subscribe("restaurant");
});

Template.Search.helpers({
  restaurants() { // Restaurant document
    return Restaurants.find({}, {sort: {speedValue: -1}});
  }
});
