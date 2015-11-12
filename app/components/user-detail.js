import Ember from 'ember';
export default Ember.Component.extend({
    model:null,
    isView: false,
    isEdit:false,
    fullName: Ember.computed('firstName', 'lastName', function() {
        var model = this.get('model');
        return model.get('firstName') + ' ' + model.get('lastName');
    }),
    shouldShow: Ember.computed('isView','isEdit',function(){
        return this.get('isView') || this.get('isEdit');
    }),
    cancel:function(){        
       this.get('model').rollbackAttributes();
    },
    actions: {
        toggleIsView: function() {
            this.set('isView', !this.get('isView'));
        },
        toggleEdit: function() {
            this.set('isView', false);
            this.set('isEdit', !this.get('isEdit'));
            if(!this.get('isEdit'))
            {
                this.cancel();
            }
        },
        save:function(){
            
        },
        cancel:function(){            
            this.cancel();
        }
    },
    urlToTransit:null
});
