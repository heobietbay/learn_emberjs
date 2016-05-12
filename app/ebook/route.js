import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.get("http://it-ebooks-api.info/v1/search/ember").then(function(data){
      return Promise.resolve(data.Books);
    });
  }
});
