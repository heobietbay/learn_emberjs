import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver
});
/*
App.initializer({
    name: 'Inject Store',
    after: "store", // need this to make sure the store is already created
    initialize: function(container, application) {
     var store = instance.container.lookup('store:main');
        console.log('the store is: ', store);

        store.push('user', {
                id: 1,
                firstName: 'Khoa',
                lastName: 'Tran',
                dob: null,
                address: 'abc',
                email: 'khoa.tran@email.com'
            });    
    }
});*/

App.instanceInitializer({
    name: "SetupData",
    initialize: function(instance) {

        /* store.push('user', {
             id: 1,
             firstName: 'Khoa',
             lastName: 'Tran',
             dob: null,
             address: 'abc',
             email: 'khoa.tran@email.com'
         });*/

        Ember.$.getJSON('../config_data/users.json').then(function(arr) {

            var store = instance.container.lookup('service:store');
            arr.forEach(function(u) {
                // prefered way since ember-data 1.13
                store.push({
                    data: {
                        id: u.id,
                        type: 'user',
                        attributes: {
                            firstName: u.firstName,
                            lastName: u.lastName,
                            dob: u.dob,
                            address: u.address,
                            email: u.email
                        }
                    }
                });
            });

        });
    }
});

loadInitializers(App, config.modulePrefix);

export default App;
