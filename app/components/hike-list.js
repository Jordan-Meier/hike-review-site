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


// hikes: Ember.computed('filterByDifficulty', function() {
//   var hikes = this.get('model');
//   var output = [];
//   if (this.get('filterByDifficulty') === "all") {
//     return hikes;
//   } else if (this.get("filterByDifficulty") === "easy") {
//     hikes.forEach(function (hike) {
//       if (hike.get('difficulty') <= 3) {
//         output.push(hike);
//       }
//     });
//   } else if (this.get("filterByDifficulty") === "medium") {
//     hikes.forEach(function (hike) {
//       if (hike.get(('difficulty') > 3 && <= 5) {
//         output.push(hike);
//       }
//     });
//   } else if (this.get("filterByDifficulty") === "difficult") {
//     hikes.forEach(function (hike) {
//       if (hike.get('difficulty') > 5 && <= 8) {
//         output.push(hike);
//       }
//     });
//   } else {
//     hikes.forEach(function (hike) {
//       if (hike.get('difficulty') > 8 && <= 10) {
//         output.push(hike);
//       }
//     });
//     return output;
//   }
// }),
