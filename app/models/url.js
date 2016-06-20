import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  shortId: attr('string'),
  createdAt: attr('date'),
  destination: attr('string'),
  formattedCreatedAt: Ember.computed('createdAt', function() {
    var createdAt = this.get('createdAt');
    var time = createdAt.getHours() + ':' + createdAt.getMinutes();
    var date = createdAt.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    return date + ' ' + time;
  })
});
