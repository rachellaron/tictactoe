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

// Seeing which box is clicked from gameBoxes Array
gameBoxes.forEach((gamebox, index) => {
  gamebox.addEventListener("click", boxClicked);
});

// Using target to target which box was clicked and let the box know if current player is currently stored in that box to switch players and not allow that box to be changed
function boxClicked(event) {
  const id = event.target.id;

  // if the box space has an id of current player 
  if (!boxSpace[id]) {
    boxSpace[id] = currentPlayer;
    event.target.innerText = currentPlayer;
    hasPlayerWon();
    currentPlayer = currentPlayer === playerTwo ? playerOne : playerTwo;
  }
  if (ifFilled()) {
    document.querySelector("h1").innerHTML = `DRAW!`;
  }
}

// Function if its a draw
function ifFilled() {
  var ifFilled = (!boxSpace.includes(null));
  return ifFilled;
}

//Check to see if player has won
function hasPlayerWon() {
  // starting in top Left Corner
  if (boxSpace[0] === currentPlayer) {
    // Up top win 
    if (boxSpace[1] === currentPlayer && boxSpace[2] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
    // left side win
    if (boxSpace[3] === currentPlayer && boxSpace[6] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
    // diagonal win
    if (boxSpace[4] === currentPlayer && boxSpace[8] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
  }

  // Right Hand Corner Check
  // Right hand (index1)
  if (boxSpace[2] === currentPlayer) {
    // right side straight down win
    if (boxSpace[5] === currentPlayer && boxSpace[8] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
  }

  // Bottom Check
  // Left Hand Corner (index6)// THIS ONE IS BROKEN???
  if (boxSpace[6] === currentPlayer) {
    // diagonalwin
    if (boxSpace[4] === currentPlayer && boxSpace[2] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
    // striaght win
    if (boxSpace[7] === currentPlayer && boxSpace[8] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
  }

  // Middle Check horizotnal
  if (boxSpace[3] === currentPlayer) {
    // right side straight down win
    if (boxSpace[4] === currentPlayer && boxSpace[5] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
  }

  // Middle Check straight done
  if (boxSpace[1] === currentPlayer) {
    // right side straight down win
    if (boxSpace[4] === currentPlayer && boxSpace[7] === currentPlayer) {
      document.querySelector("h1").innerHTML = `${currentPlayer} WINS!`;
    }
  }
}

