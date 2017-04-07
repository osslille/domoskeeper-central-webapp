Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
  data: function(){
		var keepers = Keepers.find().fetch();
		var lastEvents = Events.find({}, { limit: 4}).fetch();
		return {
			lastEvents: lastEvents,
			keepers: keepers
		};
	},
	waitOn: function(){
		return [
			Meteor.subscribe("allKeepers"), 
			Meteor.subscribe("allEvents")
		];
	}
});

Router.route('/keeper/:id', {
	name: 'keeper',
  data: function(){
		var keeper = Keepers.findOne(new Meteor.Collection.ObjectID(this.params.id));
		var events = Events.find({ keeper_id: new Meteor.Collection.ObjectID(this.params.id) }).fetch();
		var keepers = Keepers.find();
		return {
			keeper: keeper,
			kevents: events,
			keepers: keepers
		};
	},
	waitOn: function(){
		return [
			Meteor.subscribe("allKeepers"),
			Meteor.subscribe("allEvents")
		];
	}	
});