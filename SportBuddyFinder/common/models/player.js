'use strict';

module.exports = function(Player) {
    Player.create = function(msg, cb) {
        process.nextTick(function() {
            console.log(msg)
            // msg = msg || 'hello';
            // cb(null, 'Sender says ' + msg + ' to receiver');
        });
    };
};
