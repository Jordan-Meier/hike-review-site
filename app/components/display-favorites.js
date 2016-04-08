import Ember from 'ember';

export default Ember.Component.extend({
    favoriteHikes: Ember.inject.service(),
    actions: {
      removeFromFavorites(favorite) {
        this.get('favoriteHikes').remove(favorite);
      }
    }
});
