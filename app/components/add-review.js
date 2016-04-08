import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  chosenRating: null,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    chooseRating () {
      this.set('chosenRating', event.target.value)
    },
    saveReview() {
      var params = {
        author: this.get('author') ? this.get('author'): "",
        rating: parseInt(this.get('chosenRating')),
        comment: this.get('comment') ? this.get('comment'): "",
        hike: this.get('hike')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }

  }
});
