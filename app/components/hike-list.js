import Ember from 'ember';

export default Ember.Component.extend({
  hikes: Ember.computed('filterByDifficulty', function() {
    var hikes = this.get('model');
    var output = [];
    if (this.get('filterByDifficulty') === "all") {
      return hikes;
    } else {
      var self = this;
      hikes.forEach(function (hike) {
        if (hike.get('difficulty') === self.get('filterByDifficulty')) {
          output.push(hike);
        }
      });
      return output;
    }
  }),
  filterByDifficulty: "all",
  actions: {
    selectDifficulty() {
      this.set('filterByDifficulty', event.target.value);
    }
  },
});
