import DS from 'ember-data';

export default DS.Model.extend({
  listName: DS.attr('string'),
  cards: DS.hasMany('card')
});
