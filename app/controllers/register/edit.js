import Ember from 'ember';
export default Ember.Controller.extend({
    actions: {
        revertChange: function() {
            this.get('model').rollbackAttributes();
        },
        save: function() {
            var controller = this;
            this.transitionToRoute('register');
        },
        didTransition: function() {
            return true;
        }
    }
});
