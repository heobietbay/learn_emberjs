import Ember from 'ember';
export default Ember.Controller.extend({
    editMode: false,

    actions: {
        edit: function () {
            this.set('editMode', !this.get('editMode'));
        },
        saveByController: function (modelToSave) {
            modelToSave.save()
                .then(function () {
                })
                .catch(function errorSavingUser(err) {
                    console.log(err);
                });
        },
        cancelByController: function (theModel) {
            theModel.rollbackAttributes();
        }
    }
});
