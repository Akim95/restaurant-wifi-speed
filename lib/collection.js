Restaurants = new Mongo.Collection("restaurants");

// Easy search
Restaurants.initEasySearch(['name','address.city','address.state', 'address.postcode']);

// Autoform schema
Restaurants.attachSchema(new SimpleSchema({

  name: {
    type: String,
    min: 5,
    max: 250,
    label: "Restaurant name"
  },
  speedValue: {
    type: String,
    label: "Speed value"
  },
  address: {
    type: Object
  },
  'address.line1': {
    type: String,
    min: 5,
    label: "Address line 1"
  },
  'address.line2': {
    type: String,
    min: 5,
    optional: true,
    label: "Address line 2"
  },
  'address.city': {
    type: String,
    min: 5,
    label: "City"
  },
  'address.postcode': {
    type: Number,
    label: "Postcode"
  },
  'address.state': {
    type: String,
    label: "State",
    autoform: {
      options: [
        {value: 'Selangor', label: 'Selangor'},
        {value: 'Kuala Lumpur', label: 'Kuala Lumpur'},
        {value: 'Sarawak', label: 'Sarawak'},
        {value: 'Johor', label: 'Johor'},
        {value: 'Penang', label: 'Penang'},
        {value: 'Sabah', label: 'Sabah'},
        {value: 'Perak', label: 'Perak'},
        {value: 'Pahang', label: 'Pahang'},
        {value: 'Negeri Sembilan', label: 'Negeri Sembilan'},
        {value: 'Kedah', label: 'Kedah'},
        {value: 'Malacca', label: 'Malacca'},
        {value: 'Terengganu', label: 'Terengganu'},
        {value: 'Kelantan', label: 'Kelantan'},
        {value: 'Perlis', label: 'Perlis'},
        {value: 'Labuan', label: 'Labuan'},

      ]
    }
  },
  location: { // autoform-map
    type: String,
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: true,
        searchBox: true,
        autolocate: true
      }
    }
  },
  userId: {
    type: String//,
    //autoValue:function(){ return this.userId }
  },
  image: {
  type: String,
  autoform: {
    afFieldInput: {
      type: 'cloudinary'
    }
  }
}
}));

Restaurants.allow({
  insert(userId, doc){
    return doc && doc.userId === userId;
  },
  update(userId, doc){
    return doc && doc.userId === userId;
  }
});
