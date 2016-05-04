var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = new express();
var port = process.env.PORT || 4000;

//var UserModel = require('./corlateSchema.js');

var authRoutes = require('./routes/authRoutes');
var gameRoutes = require('./routes/gameRoutes');
var paymentRoutes = require('./routes/paymentRouter');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'xz_MEA2N'}));

require('./passport')(app);

app.use('/', express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

app.use('/auth', authRoutes);
app.use('/game', gameRoutes)
app.use('/payment', pamentRoutes)


// app.post('/Register', function(req, res){	
// 	console.log(req.body);
// 	// var user1 = new UserModel(req.body);
// 	// user1.save(function (err){
// 	// 	if (err) {
// 	// 		console.log(err.message);
// 	// 		res.status(500).send(err.message);
// 	// 	}

// 	// 	console.log('user1 saved.');		
// 	res.status(200).send("register");
 	// });
// });

app.get('/search', function(req, res){
	console.log(req.query);
	
	if (req.query.q)
	{
		//var query = req.query.q;
	 	res.status(200).send(req.query.q);		
	}
	else
	{
		res.status(400).send();
	}
})

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
