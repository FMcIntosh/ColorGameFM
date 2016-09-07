var squareNo = 6;
var backgroundCol = "#232323";
var bannerCol = "#128CE3";


var game = function(noSquares){

  function rand (lower, upper){
    return Math.floor(Math.random() * upper + lower);
  }

  var rand0To255 = rand.bind(this, 0, 255);

  var randColor = function() {
    return "rgb("+ rand0To255() + ", "+ rand0To255() + ", "+ rand0To255()+")"
  }

  // reset container
  var container = document.getElementById("container");
  container.innerHTML = "";
  // add required number of squares
  for(var i = 0; i < noSquares; i++){
    var square =document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  var message = document.getElementById("message");
  message.textContent = "";

  var squares = document.querySelectorAll(".square");
  var color = [];

  // create random color array
  for(var i = 0; i <squares.length; i++) {
    color.push(randColor());
  }

   // Pick winning color ( squares numbered from 0 to length - 1)
  var winner = rand(0, squares.length -1);
  var displayColor = document.getElementById("displayColor");
  displayColor.textContent = color[winner];

  // will display win/try again depending on outcome
  var message = document.querySelector("#message");
  // assign colors to squares
  // I've also included logic for adding click events to winners and losers
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color[i];


    if (i === winner){
      // winning event 
      squares[i].addEventListener("click", function(){
        // all squares get winning color
        for(var i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = color[winner];
           squares[i].style.transform = "";
        }
        // banner gets winning color
        var banner = document.getElementById("banner");
        banner.style.backgroundColor = color[winner];
        //Display win message
        message.textContent = "Correct!"

        //Change New color message
        var reset = document.getElementById("reset");
        reset.textContent = "Play again?"
      });
      // losing event
    } else {
      squares[i].addEventListener("click", function(){
        message.textContent = "Try again!"
        // Hide tile
        this.style.backgroundColor = backgroundCol;
        //rotate while hiding 
        this.style.transform = "rotate(18deg)"
      })
    }
  }
  };


var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
  // Switch text back to "New colors"
  resetButton.textContent = "New colors"
  // Reset color of banner incase it has changed
   var banner = document.getElementById("banner");
   banner.style.backgroundColor = bannerCol;
   // new game
  game(6);
});

var easyButton = document.getElementById("easy");

var hardButton = document.getElementById("hard");

easyButton.addEventListener("click", function(){
   // Make easy selected and hard deselected
  this.classList.add("selected");
  hardButton.classList.remove("selected");
  // restart game
  game(3);
})

hardButton.addEventListener("click", function(){
  // Make hard selected and easy deselected
  hardButton.classList.add("selected");
  easy.classList.remove("selected");
  // restart game
  game(6);

})


// Start game
game(6);