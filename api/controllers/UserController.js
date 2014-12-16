/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res) {
		for (var i=0; i<2; i++) {
			User.create({'status':0}).exec(function(err, newUser){
				console.log(newUser);
				res.status(201);
				res.ok(newUser.toJSON());
			});
		}
	},

	reward: function(req, res) {
		User.update({'id':req.params.id},{'status':1}).exec(function(err, u){
			if (err) {
				console.log(err);
			} else {
				console.log(u);
				res.send("ok");
			}
		});
	},

	random: function(req, res) {
		User.find({'status':0}).exec(function(err, listUser){
			if(err) {
				console.log(err);
			} else {
				var rand = Utilservice.getRandomInt(0, listUser.length);
				res.ok(listUser[rand].toJSON());
			}
		});
	}
};

