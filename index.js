var express = require("express")
var mongoose = require("mongoose")
var app = express()



// compliments = [
//   "Your instructors love you",
//   "High five = ^5",
//   "Is it Ruby Tuesday yet?",
//   "It's almost beer o'clock",
//   "The Force is strong with you"
// ]
//
// colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get("/", function(req, res){
  res.send("hi")
})



app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})
