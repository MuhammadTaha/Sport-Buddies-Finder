'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

//models
// var player = require("player")


var app = module.exports = loopback();

app.start = function() {
  // start the web server
  //   create_data();
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});


function create_data(){

  // player.create({
  //     first_name: "Muhammad",
  //     last_name: "Taha",
  //     plz_code: 10117,
  //     district: "MITTE"
  // })
  //   player.create({
  //       first_name: "Hafiz",
  //       last_name: "Hamza",
  //       plz_code: 10223,
  //       district: "Charlottenburg"
  //   })
  //   player.create({
  //       first_name: "Alhasan",
  //       last_name: "Muhammad",
  //       plz_code: 11532,
  //       district: "Schoneberg"
  //   })


}
