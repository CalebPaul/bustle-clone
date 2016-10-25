import Ember from 'ember';

export function formatDate(date) {
  return moment(date).fromNow();
}

export default Ember.Helper.helper(formatDate);
