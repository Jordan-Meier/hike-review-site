import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hike');
  },
  actions: {
    deleteHike(hike) {
      hike.destroyRecord();
      this.transitionTo('admin');
    },
    addHike(params) {
      var newHike = this.store.createRecord('hike', params);
      newHike.save();
      this.transitionTo('admin');
    }
  }
});
