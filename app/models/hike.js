import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  difficulty: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),

  favoriteHikes: Ember.inject.service(),
  onFavorites: Ember.computed('favoriteHikes.favorites.[]', function() {
    return this.get('favoriteHikes').includes(this)
  })
});
