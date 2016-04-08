import Ember from 'ember';

export default Ember.Component.extend({
  favoriteHikes: Ember.inject.service(),

  actions: {
    addToFavorites(favorite) {
      this.get('favoriteHikes').add(favorite);
    }
  }

});
