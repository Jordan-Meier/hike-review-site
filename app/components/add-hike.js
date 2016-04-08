import Ember from 'ember';

export default Ember.Component.extend({
  addNewHike: false,
  chosenDifficulty: null,
  actions: {
    hikeFormShow () {
      this.set('addNewHike', true);
    },
    chooseDifficulty () {
      this.set('chosenDifficulty', event.target.value);
    },
    addHike() {
      var params = {
        name: this.get('name') ? this.get('name'): "",
        location: this.get('location') ? this.get('location'): "",
        image: this.get('image') ? this.get('image'): "",
        description: this.get('description') ? this.get('description'): "",
        difficulty: this.get('chosenDifficulty'),
        reviews: []
      };
      this.set('addNewHike', false);
      this.sendAction('addHike', params);
    }
  }
});
