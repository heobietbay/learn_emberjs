import DS from 'ember-data';

export default DS.Model.extend({
	firstName:DS.attr('string'),
	lastName:DS.attr('string'),
	dob:DS.attr('date'),
	address:DS.attr('string'),
	email:DS.attr('string'),
	fullName: function(){
		return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName')
})