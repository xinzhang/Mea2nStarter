var express = require('express');
var bodyParser = require('body-parser');
var app = new express();
var port = process.env.PORT || 4000;

//var UserModel = require('./corlateSchema.js');

// var compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + ''));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/web/index.html')
})

app.post('/Register', function(req, res){	
	console.log(req.body);
	// var user1 = new UserModel(req.body);
	// user1.save(function (err){
	// 	if (err) {
	// 		console.log(err.message);
	// 		res.status(500).send(err.message);
	// 	}

	// 	console.log('user1 saved.');		
	res.status(200).send("register");
	// });
});

app.get('/games', function(req, res){
    console.log(req.body);
    res.status(200).send("games coming soon 1");
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
