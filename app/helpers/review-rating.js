import Ember from 'ember';

export function reviewRating(params) {
  var reviewRating = params[0].get('rating');

  if(reviewRating === "null") {
    return Ember.String.htmlSafe("<span>No rating given</span>");
  } else if (reviewRating === 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating === 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating === 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating === 4) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  }
}

export default Ember.Helper.helper(reviewRating);
