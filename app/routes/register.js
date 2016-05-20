import Ember from 'ember';
/*import User  from '../pojos/user'*/
import User from '../models/user';

export default Ember.Route.extend({
    /*init: function() {
        var route = this;
        setTimeout(function() {
            route.store.push('user', {
                id: 1,
                firstName: 'Khoa',
                lastName: 'Tran',
                dob: null,
                address: 'abc',
                email: 'khoa.tran@email.com'
            });
        }, 1);
    },*/
    model: function() {
        /*var route = this;
        return new Promise(function(resolve) {
                setTimeout(function() {
                    resolve();
                }, 1);
            }).then(function() {
                return route.store.peekRecord('user', 1);
            });*/

        return this.store.peekAll('user');
    },
    actions:{
        didTransition: function() {
            return true;
        }
    }
});
