// API Routes
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