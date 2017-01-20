// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Friends (DATA)
// =============================================================
var friends = [];

// HTML Routes
// belongs in htmlRoutes.js
// =============================================================

// home page route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// routes to survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// API Routes
// belongs in apiRoutes.js
// =============================================================

// displays all friends in array
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

// adds friend to array
app.post("/api/friends", function(req, res) {
  var newfriend = req.body;
  friends.push(newfriend);
  var i = bestMatch(bestMatch.length - 1);
  res.json(friends[bestMatch(i)]);
});

// Starts the server to begin listening
// =============================================================
/*
*/
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// finds the best match.
// if there is a tie, returns the friend with the lowest index
bestMatch = function(index){
	var totalDifference=100;
	var matchindex
	for (var i = 0; i < friends.length ; i++){
		var newDifference = 0;
		if (i != index){
			for (var j = 0; j < 10; j++){
				newDifference += Math.abs(friends[i].scores[j] - friends[index].scores[j]);
			}
			if (newDifference < totalDifference){
				totalDifference = newDifference;
				matchindex = i;
				console.log("match found! matchindex: " + matchindex);
			}
		}
	}
	return matchindex;
}