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
  // PHẦN 1: CƠ BẢN VỀ GIÁ TRỊ THẶNG DƯ
  {
    text: "Trong công thức T' = T + t, giá trị t biểu thị:\nA. Lợi nhuận từ hoạt động kinh doanh\nB. Phần giá trị dôi ra sau quá trình sản xuất\nC. Chi phí đầu tư ban đầu của tư bản\nD. Giá trị hao mòn của tư liệu sản xuất",
    answer: false,
    correct: "B",
  },

  {
    text: "Công thức T - H - T' khác với H - T - H ở điểm:\nA. T - H - T' nhằm tạo ra giá trị thặng dư\nB. H - T - H nhằm tích lũy tài sản\nC. T - H - T' dành cho người tiêu dùng\nD. H - T - H dành cho nhà sản xuất",
    answer: false,
    correct: "A",
  },

  {
    text: "Hàng hóa trong công thức T - H - T' gồm:\nA. Nguyên liệu và sản phẩm hoàn thành\nB. Tư liệu sản xuất và sức lao động\nC. Máy móc thiết bị và công nghệ\nD. Vốn cố định và vốn lưu động",
    answer: false,
    correct: "B",
  },

  {
    text: "Tiền trở thành tư bản khi nó được sử dụng để:\nA. Mua sắm hàng hóa tiêu dùng cá nhân\nB. Tích lũy và bảo toàn giá trị ban đầu\nC. Tạo ra lợi nhuận thông qua sản xuất\nD. Đầu tư vào các dự án dài hạn",
    answer: false,
    correct: "C",
  },

  {
    text: "Giá trị thặng dư không phải từ mua rẻ bán đắt vì:\nA. Thị trường luôn cân bằng giữa cung và cầu\nB. Mua rẻ bán đắt chỉ chuyển giá trị chứ không tạo ra\nC. Luật pháp cấm hành vi mua rẻ bán đắt\nD. Người tiêu dùng không chấp nhận giá cao",
    answer: false,
    correct: "B",
  },

  // PHẦN 2: HÀNG HÓA SỨC LAO ĐỘNG
  {
    text: "Sức lao động theo C. Mác bao gồm:\nA. Năng lực thể chất và tinh thần để sản xuất\nB. Kỹ năng chuyên môn và kinh nghiệm làm việc\nC. Thời gian và cường độ lao động hàng ngày\nD. Trình độ học vấn và chuyên môn kỹ thuật",
    answer: false,
    correct: "A",
  },

  {
    text: "Điều kiện để sức lao động trở thành hàng hóa:\nA. Người lao động tự do nhưng không có tư liệu sản xuất\nB. Người lao động có trình độ chuyên môn cao\nC. Xã hội có nhu cầu về sức lao động lành nghề\nD. Nhà nước cho phép tự do mua bán lao động",
    answer: false,
    correct: "A",
  },

  {
    text: "Giá trị của sức lao động được xác định bởi:\nA. Mức độ khan hiếm của loại lao động đó\nB. Chi phí để duy trì và tái sản xuất sức lao động\nC. Năng suất lao động của người lao động\nD. Giá cả thị trường tại thời điểm giao dịch",
    answer: false,
    correct: "B",
  },

  {
    text: "Đặc điểm quan trọng nhất của hàng hóa sức lao động:\nA. Có thể tạo ra giá trị lớn hơn bản thân nó\nB. Không thể tích trữ được như hàng hóa khác\nC. Gắn liền với con người không thể tách rời\nD. Giá trị thay đổi theo thời điểm trong ngày",
    answer: false,
    correct: "A",
  },

  {
    text: "Người lao động bán sức lao động vì:\nA. Muốn tích lũy kinh nghiệm và kỹ năng\nB. Không có phương tiện sản xuất độc lập\nC. Được pháp luật bảo vệ quyền lợi\nD. Có cơ hội thăng tiến trong sự nghiệp",
    answer: false,
    correct: "B",
  },

  // PHẦN 3: TƯ BẢN BẤT BIẾN VÀ KHẢ BIẾN
  {
    text: "Tư bản bất biến trong quá trình sản xuất:\nA. Chuyển toàn bộ giá trị vào sản phẩm\nB. Chuyển một phần giá trị vào sản phẩm\nC. Tạo ra giá trị mới cho sản phẩm\nD. Không ảnh hưởng đến giá trị sản phẩm",
    answer: false,
    correct: "B",
  },

  {
    text: "Tư bản khả biến được gọi là 'khả biến' vì:\nA. Có thể thay đổi hình thức đầu tư\nB. Giá trị có thể tăng giảm theo thị trường\nC. Có khả năng sinh ra giá trị thặng dư\nD. Dễ dàng chuyển đổi thành tiền mặt",
    answer: false,
    correct: "C",
  },

  {
    text: "Trong ví dụ công ty ABC Software, tư bản bất biến gồm:\nA. Chỉ máy tính và thiết bị phần cứng\nB. Thiết bị, phần mềm và chi phí vận hành\nC. Lương của lập trình viên và quản lý\nD. Chi phí marketing và bán hàng",
    answer: false,
    correct: "B",
  },

  {
    text: "Khác biệt cơ bản giữa tư bản bất biến và khả biến:\nA. Tư bản bất biến có giá trị cao hơn\nB. Tư bản khả biến dễ quản lý hơn\nC. Chỉ tư bản khả biến tạo ra giá trị thặng dư\nD. Tư bản bất biến bền vững hơn",
    answer: false,
    correct: "C",
  },

  // PHẦN 4: THỜI GIAN LAO ĐỘNG
  {
    text: "Thời gian lao động tất yếu là khoảng thời gian:\nA. Pháp luật quy định tối thiểu phải làm việc\nB. Cần thiết để tạo ra giá trị bằng tiền lương\nC. Lao động với hiệu suất cao nhất\nD. Được trả lương theo quy định hợp đồng",
    answer: false,
    correct: "B",
  },

  {
    text: "Trong ví dụ ABC Software, thời gian lao động thặng dư là:\nA. 2 giờ cuối ngày làm việc\nB. 4 giờ không được trả công thêm\nC. Thời gian làm thêm ngoài giờ quy định\nD. Thời gian nghỉ giải lao trong ca làm",
    answer: false,
    correct: "B",
  },

  {
    text: "Giá trị thặng dư được tạo ra trong:\nA. Cả thời gian lao động tất yếu và thặng dư\nB. Chỉ trong thời gian lao động tất yếu\nC. Chỉ trong thời gian lao động thặng dư\nD. Thời gian nghỉ ngơi giữa các ca làm việc",
    answer: false,
    correct: "C",
  },

  {
    text: "Khi năng suất tăng mà lương không đổi:\nA. Thời gian lao động tất yếu giảm, thặng dư tăng\nB. Thời gian lao động tất yếu tăng, thặng dư giảm\nC. Cả hai loại thời gian đều không thay đổi\nD. Thời gian lao động thặng dư giảm về không",
    answer: false,
    correct: "A",
  },

  // PHẦN 5: BẢN CHẤT VÀ Ý NGHĨA
  {
    text: "Bản chất của giá trị thặng dư theo C. Mác:\nA. Kết quả của sự thông minh kinh doanh\nB. Phần lao động không được trả công\nC. Lợi nhuận từ đầu tư công nghệ cao\nD. Thu nhập từ rủi ro kinh doanh",
    answer: false,
    correct: "B",
  },

  {
    text: "Giá trị thặng dư thể hiện mối quan hệ:\nA. Cạnh tranh giữa các doanh nghiệp\nB. Hợp tác giữa tư bản và lao động\nC. Phân chia lợi nhuận không đều\nD. Bóc lột giữa chủ tư bản và người lao động",
    answer: false,
    correct: "D",
  },

  {
    text: "Tiền lương không phản ánh đầy đủ giá trị sức lao động vì:\nA. Chỉ bù đắp chi phí tái sản xuất sức lao động\nB. Bị ảnh hưởng bởi lạm phát và biến động giá\nC. Không tính đến rủi ro và áp lực công việc\nD. Phụ thuộc vào khả năng tài chính doanh nghiệp",
    answer: false,
    correct: "A",
  },

  {
    text: "Theo C. Mác, nguồn gốc lợi nhuận chủ yếu từ:\nA. Khả năng quản lý hiệu quả của doanh nghiệp\nB. Đầu tư vào công nghệ và thiết bị hiện đại\nC. Một phần giá trị thặng dư từ sức lao động\nD. Lợi thế cạnh tranh trên thị trường",
    answer: false,
    correct: "C",
  },

  // PHẦN 6: VẤN ĐỀ THỰC TIỄN
  {
    text: "Để cải thiện vị thế, người lao động nên:\nA. Chấp nhận mức lương hiện tại để giữ việc\nB. Nâng cao kỹ năng để tăng giá trị sức lao động\nC. Làm nhiều giờ hơn để tăng thu nhập\nD. Chuyển đổi công việc thường xuyên",
    answer: false,
    correct: "B",
  },

  {
    text: "Chính sách nào giúp bảo vệ người lao động:\nA. Giảm thuế doanh nghiệp để tăng đầu tư\nB. Lương tối thiểu và bảo hiểm xã hội\nC. Khuyến khích cạnh tranh tự do\nD. Tăng cường xuất khẩu lao động",
    answer: false,
    correct: "B",
  },

  {
    text: "Hiện tượng 'làm nhiều mà không đủ sống' giải thích bằng:\nA. Chi phí sinh hoạt tăng nhanh hơn lương\nB. Người lao động không biết tiết kiệm\nC. Thời gian lao động thặng dư tăng\nD. Thuế và phí tăng cao",
    answer: false,
    correct: "C",
  },

  {
    text: "Chênh lệch tăng năng suất và tăng lương phản ánh:\nA. Sự cạnh tranh không lành mạnh\nB. Chính sách tiền lương chưa hợp lý\nC. Giá trị thặng dư bị chiếm đoạt tăng\nD. Trình độ quản lý doanh nghiệp thấp",
    answer: false,
    correct: "C",
  },

  // PHẦN 7: TỔNG HỢP
  {
    text: "Nguồn gốc của giá trị thặng dư là:\nA. Sự khác biệt giá cả giữa các thị trường\nB. Lao động sống trong thời gian thặng dư\nC. Đầu tư vào máy móc thiết bị hiện đại\nD. Khả năng tổ chức sản xuất hiệu quả",
    answer: false,
    correct: "B",
  },

  {
    text: "Điều đặc biệt của hàng hóa sức lao động:\nA. Không thể tách rời khỏi con người\nB. Tạo ra nhiều giá trị hơn chi phí mua nó\nC. Có thể được đào tạo và nâng cao\nD. Chịu ảnh hưởng của yếu tố tâm lý",
    answer: false,
    correct: "B",
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
