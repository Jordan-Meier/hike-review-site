import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteHike(hike) {
      if (confirm("Are you sure you want to permanently delete this hike and all of it's reviews from your records?")) {
        this.sendAction('deleteHike', hike);
      }
    },
  }
});
