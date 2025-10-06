const board = document.querySelector("#board");

// For the movement of pots
const colorsPots = ["redPot", "bluePot", "greenPot", "yellowPot"];

// For Audio
const drop = document.querySelector("#drop");
const ladder = document.querySelector("#ladder");
const snake = document.querySelector("#snake");
const diceAudio = document.querySelector("#diceAudio");
const success = document.querySelector("#success");

// For showing the winner message
const modal = document.querySelector("#modal");
const wname = document.querySelector("#wname");
const wimg = document.querySelector("#wimg");

// For showing the question popup
const questionModal = document.querySelector("#questionModal");
const questionText = document.querySelector("#questionText");

// Path of ladders
let ladders = [
  [6, 18],
  [11, 14],
  [15, 22],
  [21, 28],
  [23, 35],
];
// Path for snakes
let snakes = [
  [16, 2],
  [20, 5],
  [25, 12],
  [34, 22],
  [31, 20],
];
const questions = [
  {
    text: "Dưới chủ nghĩa xã hội tôn giáo vẫn còn tồn tại do các nguyên nhân:\nA. Nhận thức, chính trị\nB. Nhận thức, kinh tế, tâm lý, chính trị, văn hóa\nC. Nhận thức, văn hóa, tư tưởng\nD. Nhận thức, kinh tế, văn hóa, tư tưởng",
    answer: false,
    correct: "B",
  },
  {
    text: "Trong xã hội chủ nghĩa cần phải...\nA. Đấu tranh xóa bỏ tôn giáo\nB. Tạo điều kiện cho tôn giáo phát triển\nC. Đảm bảo tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân\nD. Hạn chế sự phát triển của tôn giáo",
    answer: false,
    correct: "C",
  },
  {
    text: "Giữa chủ nghĩa Mác - Lênin và hệ tư tưởng tôn giáo khác nhau ở điểm nào?\nA. Về thế giới quan\nB. Về nhân sinh quan\nC. Ở con đường mưu cầu hạnh phúc cho nhân dân\nD. Các phương án trả lời đều đúng",
    answer: false,
    correct: "D",
  },
  {
    text: "Quan điểm của Đảng và nhà nước ta về vấn đề tôn giáo được quán triệt như thế nào?\nA. Thủ tiêu tôn giáo\nB. Khuyến khích tôn giáo phát triển\nC. Sống tốt đời, đẹp đạo\nD. Tất cả các phương án trả lời đều đúng",
    answer: false,
    correct: "C",
  },
  {
    text: "Nguồn gốc cơ bản nào cho sự ra đời của tôn giáo?\nA. Nguyên nhân nhận thức, kinh tế, chính trị- xã hội, văn hóa, tình cảm\nB. Nguyên nhân nhận thức, tự nhiên, tâm lý, chính trị- xã hội, văn hóa\nC. Nguyên nhân nhận thức, kinh tế, tâm lý\nD. Nguyên nhân nhận thức, kinh tế, tâm lý, chính trị- xã hội, văn hóa",
    answer: false,
    correct: "C",
  },
  {
    text: "Nguồn gốc tự nhiên, kinh tế - xã hội của tôn giáo là gì?\nA. Sự giới hạn trong nhận thức của con người về tự nhiên, xã hội\nB. Sự bất lực của con người trước tự nhiên, xã hội\nC. Sự xuất hiện của các giai cấp, tầng lớp xã hội\nD. Sự sợ hãi trước các hiện tượng tự nhiên, xã hội",
    answer: false,
    correct: "B",
  },
  {
    text: "Nguồn gốc tâm lý của tôn giáo là gì?\nA. Sự giới hạn trong nhận thức của con người về tự nhiên, xã hội\nB. Sự bất lực của con người trước tự nhiên, xã hội\nC. Sự xuất hiện của các giai cấp, tầng lớp xã hội\nD. Sự sợ hãi trước các hiện tượng tự nhiên, xã hội",
    answer: false,
    correct: "D",
  },
  {
    text: "Tính chất chính trị của tôn giáo xuất hiện khi nào?\nA. Khi con người xuất hiện\nB. Khi xã hội có sự phân chia giai cấp\nC. Khi các tôn giáo chia tách thành nhiều hệ phái khác nhau\nD. Khi các dân tộc sử dụng tôn giáo để phục vụ lợi ích của mình",
    answer: false,
    correct: "B",
  },
  {
    text: "Tính lịch sử của tôn giáo được biểu hiện như thế nào?\nA. Khả năng biến đổi trong những giai đoạn lịch sử nhất định để thích nghi với nhiều chế độ chính trị - xã hội\nB. Tôn giáo chỉ tồn tại trong một giai đoạn lịch sử nhất định\nC. Trong quá trình vận động, tôn giáo không thích nghi được sự thay đổi của xã hội\nD. Tôn giáo sẽ tiêu vong trong xã hội xã hội chủ nghĩa",
    answer: false,
    correct: "A",
  },
  {
    text: "Vì sao tôn giáo mang tính quần chúng?\nA. Vì tôn giáo do con người sáng tạo ra\nB. Vì tôn giáo đáp ứng được nhu cầu tinh thần của nhân dân\nC. Vì tôn giáo ra đời là để giải thích cho con người các hiện tượng tự nhiên, xã hội và tư duy\nD. Vì tôn giáo là công cụ để giai cấp thống trị chi phối quần chúng",
    answer: false,
    correct: "B",
  },
  {
    text: "Tôn giáo là một hiện tượng xã hội - văn hoá do ai sáng tạo ra?\nA. Con người\nB. Thần linh\nC. Giai cấp thống trị\nD. Chủ nghĩa Mác - Lênin",
    answer: false,
    correct: "A",
  },
  {
    text: "Tại sao tôn giáo vẫn còn tồn tại trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?\nA. Khoa học chưa phát triển\nB. Trình độ dân trí của con người còn thấp\nC. Tôn giáo đáp ứng được mọi nhu cầu văn hóa tinh thần của nhân dân\nD. Tôn giáo phần nào vẫn còn đáp ứng được nhu cầu văn hóa tinh thần của nhân dân",
    answer: false,
    correct: "D",
  },
];

let currentQuestion = null;
let pendingMove = null; // To store {playerNumber, from, to}
const answeredSquares = new Set(); // To track squares with answered questions

// Differentiate between snake and ladder squares
const snakeSquares = new Set();
snakes.forEach((snake) => snakeSquares.add(snake[0]));
const ladderSquares = new Set();
ladders.forEach((ladder) => ladderSquares.add(ladder[0]));

// Dice probabilities array
const diceArray = [1, 2, 3, 4, 5, 6];
// Used for looping players chances
const playerNumbers = [1, 2, 3, 4];
// Dice icon according to random dice value
const diceIcons = [
  "fa-dice-one",
  "fa-dice-two",
  "fa-dice-three",
  "fa-dice-four",
  "fa-dice-five",
  "fa-dice-six",
];
// Array of object for tracking user
const players = [
  {
    name: "Người chơi 1",
    image: 1,
    lastDice: 0,
    score: 0,
    lastMovement: 0,
  },
  {
    name: "Người chơi 2",
    image: 0,
    lastDice: 0,
    score: 0,
    lastMovement: 0,
  },
  {
    name: "Người chơi 3",
    image: 3,
    lastDice: 0,
    score: 0,
    lastMovement: 0,
  },
  {
    name: "Người chơi 4",
    image: 4,
    lastDice: 0,
    score: 0,
    lastMovement: 0,
  },
];
// Multiple screens on the page
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");

// Tracking the current player
let currentPlayer = 1;

// Create a board where pots are placed
const drawBoard = () => {
  let content = "";
  let boxCount = 37;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (i % 2 === 0) boxCount--;
      content += `<div class="box" id="potBox${boxCount}"></div>`;
      if (i % 2 != 0) boxCount++;
    }
    boxCount -= 6;
  }
  board.innerHTML = content;
};

// Initial state at the beginning of the game
const initialState = () => {
  drawBoard();
  screen2.style.display = "none";
  screen3.style.display = "none";
};

initialState();

// Select players for game
let playersCount = 2;
const selectBox = document.getElementsByClassName("selectBox");
const selectPlayers = (value) => {
  selectBox[playersCount - 2].className = "selectBox";
  selectBox[value - 2].className = "selectBox selected";
  playersCount = value;
};

// To start the game
const start = () => {
  screen1.style.display = "none";
  screen2.style.display = "block";
  hideUnwantedPlayers();
};

// To back user to previous screen
const back = () => {
  screen2.style.display = "none";
  screen1.style.display = "block";
  resetPlayersCount();
};

// Next the user from screen 2 to screen 3
const next = () => {
  screen2.style.display = "none";
  screen3.style.display = "block";
  hideFinalPlayers();
  displayNames();
  disableDices();
};

// Reset the number of players in the add profile screen
const resetPlayersCount = () => {
  for (let i = 3; i < 5; i++) {
    let x = "card" + i;
    document.getElementById(x).style.display = "flex";
  }
};
// Hide unwanted Players according to the player count
const hideUnwantedPlayers = () => {
  for (let i = playersCount + 1; i < 5; i++) {
    let x = "card" + i;
    document.getElementById(x).style.display = "none";
  }
};
// Hide the final screen 3 players
const hideFinalPlayers = () => {
  for (let i = playersCount + 1; i < 5; i++) {
    let x = "playerCard" + i;
    document.getElementById(x).style.display = "none";
  }
};
// Display the name and profile icon for the users
const displayNames = () => {
  for (let i = 1; i < playersCount + 1; i++) {
    const baseURL = "images/avatars/";
    let x = "displayName" + i;
    let y = "avatar" + i;
    document.getElementById(x).innerHTML = players[i - 1].name;
    document.getElementById(y).src = baseURL + players[i - 1].image + ".png";
  }
};
// Update the name and profile icon for the users
const updateUserProfile = (playerNo, value) => {
  // Change profile to next profile in order
  const baseURL = "images/avatars/";
  if (value === 1) {
    players[playerNo - 1].image = (players[playerNo - 1].image + 1) % 8;
  } else {
    if (players[playerNo - 1].image === 0) {
      players[playerNo - 1].image = 7;
    } else {
      players[playerNo - 1].image = Math.abs(
        (players[playerNo - 1].image - 1) % 8,
      );
    }
  }
  let x = "profile" + playerNo;
  document.getElementById(x).src =
    baseURL + players[playerNo - 1].image + ".png";
};
// Change the name of the player from input box
const changeName = (playerNo) => {
  let x = "name" + playerNo;
  let value = document.getElementById(x).value;
  if (value.length > 0) {
    players[playerNo - 1].name = value;
  } else {
    players[playerNo - 1].name = "Người chơi " + playerNo;
  }
};
// Clean the board with no pots
const resetBoard = () => {
  for (let i = 0; i < 36; i++) {
    let x = i + 1;
    document.getElementById("potBox" + x).innerHTML = "";
  }
};
// Refresh the board after every dice roll
const updateBoard = () => {
  resetBoard();
  for (let i = 0; i < playersCount; i++) {
    if (players[i].score != 0) {
      let x = "potBox" + players[i].score;
      document.getElementById(x).innerHTML +=
        `<div class="pot ${colorsPots[i]}" >`;
    }
  }
};

const animateMove = (playerNumber, start, end, onComplete) => {
  const steps = end - start;
  if (steps < 0) {
    // Can happen if a snake is longer than a ladder
    if (onComplete) onComplete();
    return;
  }

  players[playerNumber - 1].score = start;
  var t = setInterval(() => {
    players[playerNumber - 1].score++;
    drop.currentTime = 0;
    drop.play();
    updateBoard();
    if (players[playerNumber - 1].score === end) {
      clearInterval(t);
      if (onComplete) {
        setTimeout(onComplete, 100);
      }
    }
  }, 400);
};

// Used for moving pot from one place to another
const movePot = (value, playerNumber) => {
  const playerValue = players[playerNumber - 1].score;
  let end = playerValue + value;

  if (end > 36) {
    end = 36;
  }

  const isWinning = end === 36;
  const isSnake = snakeSquares.has(end);
  const isAnswered = answeredSquares.has(end);

  // If the square is safe (winning, a snake, or already answered), move directly.
  // Ladder squares are now handled by the question logic.
  if (isWinning || isSnake || isAnswered) {
    animateMove(playerNumber, playerValue, end, () => {
      if (isWinning) {
        modal.className = "modal";
        success.play();
        const baseURL = "images/avatars/";
        wimg.src = baseURL + players[playerNumber - 1].image + ".png";
        wname.innerHTML = players[playerNumber - 1].name;
      } else if (isSnake) {
        // snakes will handle the next turn
        checkSnake(end, playerNumber);
      } else {
        // It's an answered square
        // If it's an answered LADDER square, climb it.
        if (ladderSquares.has(end)) {
          checkLadder(end, playerNumber);
        } else {
          startNextTurn(playerNumber);
        }
      }
    });
  } else {
    // It's a new square (normal or ladder), show question.
    pendingMove = { playerNumber, from: playerValue, to: end };
    showQuestion();
  }
};

// For random dice value
const rollDice = (playerNo) => {
  if (playerNo === currentPlayer) {
    diceAudio.play();
    const diceNumber = diceArray[Math.floor(Math.random() * diceArray.length)];
    let x = "dice" + playerNo;
    // Animate dice: add .rolling to current icon, then update face after animation
    const diceBox = document.getElementById(x);
    const oldIcon = diceBox.querySelector(".diceImg");
    if (oldIcon) {
      oldIcon.classList.remove("rolling");
      void oldIcon.offsetWidth; // force reflow
      oldIcon.classList.add("rolling");
      setTimeout(() => {
        // Update dice face after animation
        diceBox.innerHTML = `<i class=\"diceImg fas ${diceIcons[diceNumber - 1]}\"></i>`;
      }, 800);
    } else {
      // fallback: update immediately if no icon
      diceBox.innerHTML = `<i class=\"diceImg fas ${diceIcons[diceNumber - 1]}\"></i>`;
    }
    let tempCurrentPlayer = currentPlayer;
    currentPlayer = 0;
    setTimeout(() => {
      movePot(diceNumber, tempCurrentPlayer);
    }, 1000);
    setTimeout(
      () => {
        currentPlayer = playerNumbers[tempCurrentPlayer % playersCount];
        document.getElementById("dice" + currentPlayer).style.color = "";
        disableDices();
      },
      2000 + diceNumber * 400,
    );
  }
};
// Disable Other player's dice that are not current player
const disableDices = () => {
  for (let i = 1; i < playersCount + 1; i++) {
    if (currentPlayer != i) {
      let x = "dice" + i;
      document.getElementById(x).style.color = "grey";
    }
  }
};

// Check the current player is on ladder or not
const checkLadder = (value, playerNumber) => {
  for (let i = 0; i < ladders.length; i++) {
    if (ladders[i][0] === value) {
      specialMove(i, playerNumber);
    }
  }
};
// Check the current player is on snake or not
const checkSnake = (value, playerNumber) => {
  for (let i = 0; i < snakes.length; i++) {
    if (snakes[i][0] === value) {
      specialMoveSnake(i, playerNumber);
    }
  }
};
// Move the pot on the ladder
const specialMove = (ladderIndex, playerNumber) => {
  const ladderStart = ladders[ladderIndex][0];
  const ladderEnd = ladders[ladderIndex][1];
  ladder.play();
  // Use the existing animateMove for a smooth climb
  animateMove(playerNumber, ladderStart, ladderEnd, () => {
    startNextTurn(playerNumber);
  });
};
// Move the pot according to snake
const specialMoveSnake = (snakeIndex, playerNumber) => {
  const snakeStart = snakes[snakeIndex][0];
  const snakeEnd = snakes[snakeIndex][1];
  snake.play();

  // Animate moving down the snake
  var t = setInterval(() => {
    players[playerNumber - 1].score--;
    updateBoard();
    if (players[playerNumber - 1].score === snakeEnd) {
      clearInterval(t);
      startNextTurn(playerNumber);
    }
  }, 400);
};

// Mapping from square number to question index
const squareQuestions = {};
const usedQuestionIndexes = new Set();

const showQuestion = () => {
  const { to } = pendingMove;
  let questionIdx;
  if (squareQuestions[to] !== undefined) {
    questionIdx = squareQuestions[to];
  } else {
    // Get all unused question indexes
    const available = questions
      .map((_, idx) => idx)
      .filter((idx) => !usedQuestionIndexes.has(idx));
    if (available.length > 0) {
      questionIdx = available[Math.floor(Math.random() * available.length)];
      squareQuestions[to] = questionIdx;
      usedQuestionIndexes.add(questionIdx);
    } else {
      // fallback: random any question if all used
      questionIdx = Math.floor(Math.random() * questions.length);
      squareQuestions[to] = questionIdx;
    }
  }
  currentQuestion = questions[questionIdx];
  // Parse question text and options
  const lines = currentQuestion.text.split("\n");
  const questionLine = lines[0];
  const options = lines
    .slice(1)
    .map((line) => line.trim())
    .filter((line) => line.match(/^[A-D]\. /));
  questionText.innerText = questionLine;
  // Render options as buttons
  const answerOptions = document.getElementById("answerOptions");
  answerOptions.innerHTML = "";
  options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleAnswerMCQ(String.fromCharCode(65 + idx));
    answerOptions.appendChild(btn);
  });
  // Clear previous result
  document.getElementById("answerResult").innerText = "";
  questionModal.className = "modal";
};

function handleAnswerMCQ(selected) {
  // Prevent multiple answers
  const answerOptions = document.getElementById("answerOptions");
  Array.from(answerOptions.children).forEach((btn) => (btn.disabled = true));
  // Highlight selected
  Array.from(answerOptions.children).forEach((btn) => {
    if (btn.innerText.startsWith(selected + ".")) btn.classList.add("selected");
  });
  // Show feedback
  const correct = currentQuestion.correct;
  const resultDiv = document.getElementById("answerResult");
  if (selected === correct) {
    resultDiv.innerText = "Chính xác!";
    resultDiv.style.color = "#2c974b";
  } else {
    resultDiv.innerText = `Sai! Đáp án đúng là ${correct}.`;
    resultDiv.style.color = "#ff3737";
  }
  // Continue after short delay
  setTimeout(() => {
    questionModal.className = "modal hide";
    const { playerNumber, from, to } = pendingMove;
    pendingMove = null;
    if (selected === correct) {
      answeredSquares.add(to);
      const answeredBox = document.getElementById(`potBox${to}`);
      if (answeredBox) {
        answeredBox.classList.add("answered");
      }
      animateMove(playerNumber, from, to, () => {
        if (ladderSquares.has(to)) {
          checkLadder(to, playerNumber);
        } else {
          startNextTurn(playerNumber);
        }
      });
    } else {
      startNextTurn(playerNumber);
    }
  }, 1200);
}

const startNextTurn = (lastPlayerNumber) => {
  currentPlayer =
    playerNumbers[lastPlayerNumber % playersCount] || playerNumbers[0];
  disableDices();
  document.getElementById("dice" + currentPlayer).style.color = "";
};
