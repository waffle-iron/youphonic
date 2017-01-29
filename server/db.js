'use strict';

var Play = require('./api/plays/play.model');
var User = require('./api/users/user.model');

User.hasMany(Play, {foreignKey: 'player_id'});
Play.belongsTo(User, {as: 'player'});

