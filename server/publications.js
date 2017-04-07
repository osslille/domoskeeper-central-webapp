Meteor.publish("allKeepers", function(){
    return Keepers.find({});
});

Meteor.publish("allEvents", function(){
    return Events.find({});
});