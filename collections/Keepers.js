Keepers = new Mongo.Collection("keeper");

Keepers.allow({
  update() {
    return true;
  },
  remove() {
    return true;
  }
})