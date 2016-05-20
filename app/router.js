import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('list');
  this.route('register', {
      path: '/register'
  }, function() {
      this.route('edit', {
          path: '/edit/:id'
      });
  });

  // specify like this, this will not be a master - detail template. this is a separate view
  this.route('register.modify', {
      path: '/register/modify/:id'
  });
  this.resource('ebook', function(){
    this.route('new')
  });
});

export default Router;
