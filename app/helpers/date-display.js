import Ember from 'ember';

export function dateDisplay(params) {
  var date = params[0];
  return moment(date).format('MMMM Do YYYY');
}

export default Ember.Helper.helper(dateDisplay);
