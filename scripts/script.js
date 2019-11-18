// MVP get the game ready with no animation, scoring, start button with instructions
// stretch show timer(countdown), game over. display player name, smooth animation


// 1 Have a placeholder for score
// 2 Create a trigger instruction pop out on start button click
  // 2a Give instruction with a button
// 3 Instruction button trigger start of game on button click
// 4 Trigger start game function
// 5 Write function to allow mole to randomize and pop out math.random in an array after certain secs if no moles are hit choose new array of moles
// 6 have a event listening function with click on click image hides with the score goes up

  // define score and define gamePlay ->main object
let score = 0;
const gamePlay = {};
let gameEnd = false;
let gameTimeReset = false;

// the function that init all the functions of the game
gamePlay.init = function(){
  // where we call the functions
  gamePlay.instructionButton();
  gamePlay.instruction();
  gamePlay.scoreRecongizer();
}

// create trigger instruction pop out on start click
gamePlay.instructionButton = function(){
  $('.instructionPrompt').on('click', function(){
    $('.gameBoard').hide();
    $('.instructionMenu').show();
    $('#timeLeft').text('20 secs');
  })
}

let gameTimer = 20;
const countDownTime = function(){
  $('#timeLeft').text(gameTimer+' secs');
}

countDown = function(){
  setInterval(function(){
    if (gameTimer >- 0) {
      --gameTimer;
      countDownTime();
    }
    else if (gameTimer == 0){
      return;
    }
  }, 1000)
}

// function for start screen
// triggers start game function which means random moles function start
gamePlay.instruction = function(){
  $('.startGamePrompt').on('click', function(){
    $('.instructionMenu').hide();
    $('.gameBoard').show();
    // this is to reset the console to make the score 0
    gameTimer = 20;
    score = 0;
    // this is to change the text to 0 when we start new game
    $('.score').text('0');
    gameEnd = false;
    gamePlay.startGame();
    setTimeout(function(){
      return finishGame();
    }, 20000);
    // timer function
    if (gameTimeReset === false){
      countDown();
    }
    else {
      return;
    }
    gameTimeReset = false;
    // allow the game to end by allowing the function of finishGame to change to bullean true after 10 second and it order for the game to start the gameEnd bullean must be false.
    setTimeout(function(){
      return gameTimerReset();
    }, 20000);
  })
}

  // shows the moles.
gamePlay.startGame = function(){
  // We give a variable to allow us to grab the class of mole and the object number provided by the gameplay.randomMole function
  const moleAppears = $('.mole'+gamePlay.randomMole('.mole'));
  moleAppears.show();
  let timer = Math.round(Math.random() * 2000) + 500
  setTimeout(function(){
    $('.mole').hide();
    if(!gameEnd) gamePlay.startGame()
  }, timer);
}

// function to randomize the number of elements
gamePlay.randomMole = function(){
  let mole = Math.floor(Math.random()*$('.mole').length+1);
  return mole;
}

// function to on click recognizer and adds to score
gamePlay.scoreRecongizer = function(){
  $('.mole').on('click', function(){
    $('.mole').hide();
    score++;
    $('.score').text(score);
  })
}

function finishGame(){
  gameEnd = true;
}

function gameTimerReset(){
  gameTimeReset = true;
}

// call the init function ONCE the document is loaded
$(document).ready(function(){
  gamePlay.init();
})