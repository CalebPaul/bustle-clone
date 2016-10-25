import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  content: DS.attr('string'),
  author: DS.attr('string'),
  isMain: DS.attr('boolean'),
  isFeatured: DS.attr('boolean'),
  timestamp: DS.attr('date')
});
