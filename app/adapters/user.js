import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:4200',
  headers: {
    "SOME_KEY": "secret key",
    "ANOTHER_HEADER": "Some header value"
  }
});