import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  comment: DS.attr(),
  hike: DS.belongsTo('hike', {async: true})

});
