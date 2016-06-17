import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  shortId: attr('string'),
  createdAt: attr('date'),
  destination: attr('string')
});
