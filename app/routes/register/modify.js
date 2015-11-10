import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var id = parseInt(params.id);
        var route = this;
        var record = route.store.peekRecord('user', id);
        if (record) 
        {
            return record;
        } 
        else 
        {
        	// This is to wait app.js SetupData done
            return new Promise(function(resolve) {
                setTimeout(function() {
                    resolve();
                }, 100);
            }).then(function() {
                return route.store.peekRecord('user', id);
            });
        }
    }
});
