Router.route('/', {
	name			: 'amendementsList',
	layoutTemplate	: 'editionLayout',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() { return Amendements.find() }
});

Router.route('/amendement/:_id', {
	name			: 'amendementsFullpage',
	waitOn			: function() { return Meteor.subscribe('AmendementsByPosition') },
	data			: function() { return Amendements.findOne(this.params._id) }
});

Router.route('/connexion', {
	name			: 'login'
});
