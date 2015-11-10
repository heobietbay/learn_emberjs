import Ember from 'ember';
export default Ember.Controller.extend({
    editMode: false,

    actions: {
        edit: function() {
            this.set('editMode', !this.get('editMode'));
        }
    }
});
