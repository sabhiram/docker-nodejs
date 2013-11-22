//var _ 		= require('underscore')._;
var	util	= require('util');
var path 	= require('path');
var async   = require('async');
var os	    = require('os');
var express = require('express');

// Setup app instance
var app = express();

// Setup some server settings...
var _settings = {
	url: 'http://' + os.hostname(),
	port: 1234
};

// Initialize Server
async.series([

	// 1. 	Configure Express so it knows to look for the public
	// 	  	folders we wish to expose. As well as setup EJS to be
	// 	  	our default view engine
	function configure_server(next_function) {
		app.configure(function() {
			app.use(express.static(path.join(__dirname, 'public')));
			app.set('view options', {layout: false});
            app.set('view engine', 'ejs');
            app.set('trust proxy', true);
            app.set('views', path.join(__dirname, 'views'))
            next_function();
		});
	},

	// 2. 	Setup any routes for this server. This includes any
	//		HTTP GET/POST/PUT/DELETEs
	function setup_routes(next_function) {
		setup_app_routes(next_function);
	}

], function(error) {
	if(error) {
		console.log('Error: ' + error);
		console.log('\tUnable to initialize server\n');
		process.exit(1);
	}
	else {
		console.log('Server up on port: ' + _settings.port);
		app.listen(_settings.port);
	}
});

// Function which defines the server's various routes
function setup_app_routes(callback) {

	// 1. GET / - Home page
	app.get('/', function(request, response) {
		console.log('Server recieved GET /');
		response.send('Hello from ' + _settings.url);
	});

	// This function does not have to return control flow since it
	// is mostly setting up these route handlers. However, this is
	// done for consistency more than anything else.
	callback();
}