// Music Player
var musicPlayer = document.getElementById("myAudio");
function playAudio() {
  musicPlayer.play();
}
function pauseAudio() {
  musicPlayer.pause();
}

// Getting array from Divs
const gameBoxes = Array.from(document.getElementsByClassName("gamebox"));
const boxSpace = [null, null, null, null, null, null, null, null, null];

var playerOne = 'X';
var playerTwo = 'O';
var currentPlayer = playerOne;
const emptyBoxes = [null, null, null, null, null, null, null, null, null];

// Seeing which box is clicked from gameBoxes Array
gameBoxes.forEach((gamebox, index) => {
  gamebox.addEventListener("click", boxClicked);
});

// Using target to target which box was clicked and let the box know if current player is currently stored in that box to switch players and not allow that box to be changed
function boxClicked(event) {
  const id = event.target.id;
  console.log(id)

  // if the box space has an id of current player 

  if (!boxSpace[id]) {
    boxSpace[id] = currentPlayer;
    event.target.innerText = currentPlayer;
    currentPlayer = currentPlayer === playerTwo ? playerOne : playerTwo;
    if (hasPlayerWon());

  }
}

//Check to see if player has won
function hasPlayerWon() {
  // starting in top Left Corner
  if (boxSpace[0] === currentPlayer) {
    // Up top win
    if (boxSpace[1] === currentPlayer && boxSpace[2] === currentPlayer) {
      console.log(`${currentPlayer} top straight across win`);

    }
    // left side win
    else if (boxSpace[3] === currentPlayer && boxSpace[6] === currentPlayer) {
      console.log(`${currentPlayer} top straight down win`);
    }
    // diagonal win
    else if (boxSpace[4] === currentPlayer && boxSpace[8] === currentPlayer) {
      console.log(`${currentPlayer} top diagonal win`);
    }
  }

  // Right Hand Corner Check
  // Right hand (index1)
  else if (boxSpace[2] === currentPlayer) {
    // right side straight down win
    if (boxSpace[5] === currentPlayer && boxSpace[8] === currentPlayer) {
      console.log(`${currentPlayer} right straight down win `);
    }
  }

  // Bottom Check
  // Left Hand Corner (index6)
  else if (boxSpace[6] === currentPlayer) {
    // right side straight down win
    if (boxSpace[4] === currentPlayer && boxSpace[2] === currentPlayer) {
      console.log(`${currentPlayer} bottom diagonal win`);
    }
    // diagonal win
    else if (boxSpace[7] === currentPlayer && boxSpace[8] === currentPlayer) {
      console.log(`${currentPlayer} bottom straight across win`);
    }
  }

  // Middle Check horizotnal
  else if (boxSpace[3] === currentPlayer) {
    // right side straight down win
    if (boxSpace[4] === currentPlayer && boxSpace[5] === currentPlayer) {
      console.log(`${currentPlayer} middle win horizontal`);
    }
  }
  
  // Middle Check straight done
  else if (boxSpace[1] === currentPlayer) {
    // right side straight down win
    if (boxSpace[4] === currentPlayer && boxSpace[7] === currentPlayer) {
      console.log(`${currentPlayer} middle win straight down`);
    }
  }
}

