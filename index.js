var express = require("express")
var app = express()

app.set("view engine", "hbs")
// app.use(express.static(compliment + "/public"))

app.get("/", function(req, res){
  compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

  var numCompliment = Math.floor((Math.random() * compliments.length) + 1 )
  var numColor = Math.floor((Math.random() * colors.length) + 1 )

  var compliment = compliments[numCompliment]
  var color = colors[numColor]

  res.render("index", {compliment: compliment, color: color})
  // res.send("Hi there! Just so you know " + compliment + " and color: "+ color)
  // document.querySelector("body").style.backgroundColor = color

})


app.get("/:name", function(req, res){
  compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

  var numCompliment = Math.floor((Math.random() * compliments.length) + 1 )
  var numColor = Math.floor((Math.random() * colors.length) + 1 )

  var compliment = compliments[numCompliment]
  var color = colors[numColor]
  res.send("<h1> hi " + req.params.name + " " + compliment + " and color: "+ color + "</h1>")
  document.querySelector("h1").style.backgroundColor = color
})

app.post("/", function(req, res){
  res.send("Hi " + req.params.name)
  console.log(req.body.name)
})


app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})
