import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      hikes: this.store.findRecord('hike', params.hike_id),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var hike = params.hike;
      hike.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return hike.save();
      });
      this.transitionTo('hike');
    },
    deleteReview(review) {
      review.destroyRecord();
      this.transitionTo('hike');
    }
  }
});
