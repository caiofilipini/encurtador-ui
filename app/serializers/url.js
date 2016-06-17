import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  attrs: {
    createdAt: 'criacao',
    destination: 'destino'
  }
});
