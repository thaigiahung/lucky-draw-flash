/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res) {
		User.find().exec(function(err,uList){
			console.log(uList.length);
			if (!err) {
				for (var i=uList.length+1; i<req.params.id;  i++) {
					User.create({'status':0}).exec(function(err, newUser){
						console.log(newUser);
						res.status(201);
						res.ok(newUser.toJSON());
					});
				}
			}
		});
		
	},

	reset: function(req, res) {
		User.find().exec(function(err, listUser){
			if (!err) {
				for(var i=0; i<listUser.length; i++) {
					User.update({"id":i}, {'status':0}).exec(function(err, u){
						if(err){
							console.log(err);
						} else {
							res.ok("DONE");
						}
					});
				}			
			}	
		})
		
	},

	random: function(req, res) {
		User.find({'status':0}).exec(function(err, listUser){
			if(err) {
				console.log(err);
			} else {
				console.log("listuser: " + listUser.length);

				var rand = Utilservice.getRandomInt(0, listUser.length);
				console.log("rand: " + rand);

				User.update(listUser[rand].toJSON(),{'status':1}).exec(function(err, u){
					if (err) {
						console.log(err);
					} else {
						res.ok(listUser[rand].toJSON());
						console.log(u);
					}	
				});

			}
		});
	}
};

