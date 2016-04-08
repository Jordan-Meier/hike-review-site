import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  difficulty: DS.attr('number'),
  reviews: DS.hasMany('review', {async: true})
});
