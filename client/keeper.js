Template.keeper.events({
  'input #keeperName': (event, template) => {
    if(event.currentTarget.value) {
      Keepers.update(template.data.keeper._id, { $set: { name: event.currentTarget.value }})
    }
  },
  'click .removeKeeper': (event, template) => {
    Keepers.remove(template.data.keeper._id);
    Router.go('home');
  }
});