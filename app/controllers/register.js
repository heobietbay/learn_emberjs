import Ember from 'ember';
export default Ember.Controller.extend({
    editMode: false,

    actions: {
        edit: function () {
            this.set('editMode', !this.get('editMode'));
        },
        save: function (modelToSave) {
            modelToSave.save()
                .then(function () {
                })
                .catch(function errorSavingUser(err) {
                    console.log(err);
                });
        },
        cancel: function () {
            this.cancel();
        }
    }
});
