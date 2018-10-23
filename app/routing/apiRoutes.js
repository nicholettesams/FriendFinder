var friends = require("../data/friends")


app.get("/api/friends", function(req, res) {
    res.json(friends)
});
  
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //do i need a route name?
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  console.log(newFriend);

  // add scores together of newFriend
  newFriendTotal = 0
  for(var i = 0; i < newFriend.scores.length; i++) {
    newFriendTotal += parseInt(newFriend.scores[i]);
  }

  var match = 0 // Saves the index of the best match
  var matchDifference = 100 //Saves the best matches difference so I can use it to compare to the next friend.  Starting with 100 so I have something to compare first match to.

  // loop through friends
  for (var f = 0; f < friends.length; f++ ){
      // add scores together of friend (should I store a total??)
      friendTotal = 0
      for(var i = 0; i < friends[f].scores.length; i++) {
        friendTotal += parseInt(friends[f].scores[i]);
      }

      currentDifference = Math.abs(newFriendTotal - friendTotal)

      // save friend as best match if the different between newFriend is lower than the previous friend
      if (currentDifference < matchDifference){
        //better match so save it
        match = f;
        currentDifference = matchDifference
      }
  }
  
  // after finding match, add the newFriend to the array, do this after so not to compare newFriend to themselves
  freinds.push(newFriend);

  res.json(friends[match]);
});

  // TO DO...how do I export this to be able to import into use in server.js?