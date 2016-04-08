import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      hikes: this.store.findRecord('hike', params.hike_id),
      reviews: this.store.findAll('review')
    });
  },
});
