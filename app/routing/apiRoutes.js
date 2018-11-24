var express = require("express");
var router = express.Router()
var friends = require("../data/friends")

//Display array of objects as JSON
router.get("/api/friends", function(req, res) {
    res.json(friends)
});

//Handle post action
router.post("/api/friends", function(req, res) {
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
  var currentDifference = 0

  // loop through array of friends objects
  for (var f = 0; f < friends.length; f++ ){
      // compare each answer separately to get a different of each question and keep a running total
      friendTotal = 0
      for(var i = 0; i < friends[f].scores.length; i++) {
        currentDifference += Math.abs(parseInt(newFriend.scores[i]) - parseInt(friends[f].scores[i]));
      }

      // save friend as best match if the different between newFriend is lower than the previous friend
      // Try to prevent a match to yourself if you try to use this more than once.
      if (currentDifference < matchDifference && JSON.stringify(newFriend) !== JSON.stringify(friends[f])){
        //better match so save it
        match = f;
        matchDifference = currentDifference
      }
  }
  
  // after finding match, add the newFriend to the array, do this after so not to compare newFriend to themselves
  // check to see if newFriend is already in the array before pushing to the array so as to not add the same person twice.
  if (!containsObject(newFriend, friends)){
    friends.push(newFriend); 
  } else {
    console.log("Duplicate object in the array.")
  }
  
  //return best match to the html to display in a modal form
  res.json(friends[match]);
});

//Loops through an array of objects and returns true if the object exists in the array and false if it does not.
var containsObject = function(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
          return true;
      }
  }

  return false;
}


module.exports = router