// MVP get the game ready with no animation, scoring, start button with instructions
// stretch show timer(countdown), game over. display player name, smooth animation


// 1 Have a placeholder for score
// 2 Create a trigger instruction pop out on start button click
  // 2a Give instruction with a button
// 3 Instruction button trigger start of game on button click
// 4 Trigger start game function
// 5 Write function to allow mole to randomize and pop out math.random in an array after certain secs if no moles are hit choose new array of moles
// 6 have a event listening function with click on click image hides with the score goes up

$(document).ready(function(){
  // define score and define gamePlay ->main object
  let score = 0;
  const gamePlay = {};

  // create trigger instruction pop out on start click
  gamePlay.instructionButton = function(){
    $('.instructionPrompt').on('click', function(){
      $('.gameBoard').hide();
      $('.instructionMenu').show();
    })
  }

  // function for start screen
  // triggers start game function which means random moles function start
  gamePlay.instruction = function(){
    $('.startGamePrompt').on('click', function(){
      $('.instructionMenu').hide();
      $('.gameBoard').show();
      gamePlay.startMoles();
    })
  }

  gamePlay.startMoles = function(){
    const moleAppears = $('.mole'+gamePlay.randomHole('.mole'));
    // this timer allows the mole to be hiding and reappearing in a uncertain timing
    let timer = Math.round(Math.random()*2000)+500
    moleAppears.show();
    setTimeout(function (){
      moleAppears.hide();
      gamePlay.startMoles();
    },timer);
  }

  // function to randomize the number of elements
  gamePlay.randomHole = function(){
    let mole = Math.floor(Math.random()*$('.mole').length+1);
    console.log(mole);
    return mole;
  }


// the function that init all the functions of the game
  gamePlay.init = function () {
    // where we call the functions
    gamePlay.instructionButton();
    gamePlay.instruction();
    gamePlay.randomHole();
  }


// function of init
  $(function(){
    gamePlay.init();
  })


})