import Ember from 'ember';
export default Ember.Component.extend({
    model:null,
    isShown: false,
    fullName: Ember.computed('firstName', 'lastName', function() {
        var model = this.get('model');
       /* var firstName = this.get('firstName'),
            lastName = this.get('lastName');*/

        return model.get('firstName') + ' ' + model.get('lastName');
    }),
    actions: {
        toggleIsShown: function() {
            this.set('isShown', !this.get('isShown'));
        }
    }
});
