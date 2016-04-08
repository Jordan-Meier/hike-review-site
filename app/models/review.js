import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr('date', {defaultValue() {return new Date(); } }),
  rating: DS.attr('number'),
  comment: DS.attr(),
  hike: DS.belongsTo('hike', {async: true})

});
