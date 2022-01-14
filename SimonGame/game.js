$(document).ready(function() {
  var level = 0;
  var gamePattern = [];
  var buttonColors = ["red", "blue", "green", "yellow"];
  var userClickedPattern = [];
  var gameState = 0;

  $(document).keypress(function() {
    if (gameState == 0) {
      gameState = 1;
      console.log("Game Started.");
      nextSequence();
    }

  });

  $(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    // $("#" + userChosenColor).fadeIn(50).fadeOut(50).fadeIn(50);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
  });

  function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
      console.log("Success");
      if (userClickedPattern.length == gamePattern.length) {
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("Wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      var obj = $("#level-title").text("Game Over, Press any key to restart.\n\nYour Score = " + (level-1));
      obj.html(obj.html().replace(/\n/g, '<br>'));
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
  }

  function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randNo = Math.floor(4 * Math.random());
    var randChosenColor = buttonColors[randNo];
    console.log(randChosenColor);
    gamePattern.push(randChosenColor);
    console.log(gamePattern);
    $("#" + randChosenColor).fadeIn(50).fadeOut(50).fadeIn(50);
    playSound(randChosenColor);
  }

  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

  function startOver() {
    level = 0;
    gamePattern = [];
    gameState = 0;
  }
});
