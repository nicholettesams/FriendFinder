var friends = require("../data/friends")


module.exports = app.get("/api/friends", function(req, res) {
    res.json(friends)
});
  
module.exports = app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;
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
      // Try to prevent a match to yourself if you try to use this more than once.
      if (currentDifference < matchDifference && newFriend.name !== friends[f].name){
        //better match so save it
        match = f;
        currentDifference = matchDifference
      }
  }
  
  // after finding match, add the newFriend to the array, do this after so not to compare newFriend to themselves

  // TO DO: check to see if newFriend is already in the array before pushing to the array so as to not add the same person twice.
  friends.push(newFriend);

  res.json(friends[match]);
});