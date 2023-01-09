// Declare variables
const dealerHand = [];
const userHand = [];
let dealerScore = 0;
let userScore = 0;
const blackjack = 21;
let output;
let userWins = 0;
let dealerWins = 0;

// Choose random number
function randHand(x,y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

// Deal a new hand
// arr relates to either dealerHand or userHand
// whoScore related to either dealerScore or userScore
function dealNew(arr, whoScore) {
  const randNew = randHand(2,11);
  // Push new hand to array
  arr.push(randNew);
  // Add new hand score to player's score
  return whoScore + randNew;
}

// User gameplay state
function userLoop() {
  let hit = true;
  while (hit) {
    output = generateScoreMsg(userHand, userScore, dealerHand, dealerScore);
    // Share both scores with user, invite to hit or stick
    if (userScore < blackjack) {
      hit = confirm(`
      ${output}
      Click Ok to Hit, or Cancel to Stick.`);
        // If user wants to hit, add dealNew to userHand and userScore
        if (hit) {
          userScore = dealNew(userHand, userScore);
        }
        else {
          dealerLoop();
        }
    } 
    // User bust
    else if (userScore > blackjack) {
      alert(`
      You are bust!
      ${output}`);
      dealerWins ++;
      end()
    } 
    // User stick, begin dealer gameplay state
    else {
      hit = false;
      dealerLoop();
    }
  }
}

// Dealer gameplay state
function dealerLoop() {
let hit = true;
  while (hit) {
    output = generateScoreMsg(userHand, userScore, dealerHand, dealerScore);
    if (dealerScore <= userScore) {
      // Dealer always hits when his score is less than the users && less than 17
      if (dealerScore < 17) {
      alert(`
      ${output}
      Dealer will draw a new card.`);
      dealerScore = dealNew(dealerHand, dealerScore);
      }
      // Dealer bust
      else if (dealerScore > 21){
      alert(`
      Dealer bust!
      ${output}`);
      userWins ++
      end()
      }
      // Dealer stick (17 or over && not bust)
      else {
        hit = false;
        compareScores();
      }
    }
    // Dealer bust
    else if (dealerScore > 21){
      alert(`
      Dealer bust!
      ${output}`);
      userWins ++;
      end()
    }
    // Dealer stick (17 or over && not bust)
    else {
      hit = false;
      compareScores();
    }
  }
}

// Compare the scores
function compareScores() {
  // Check how far each user is from 21
  let dealComp = blackjack - dealerScore;
  let userComp = blackjack - userScore;
  output = generateScoreMsg(userHand, userScore, dealerHand, dealerScore);
  // User win state
  if (userComp < dealComp) {
      alert(`
      You win! 
      ${output}`);
      userWins ++
      end()
  }
  // Dealer win state
  else if (userComp > dealComp) {
      alert(`
      You lose! 
      ${output}`);
      dealerWins ++;
      end()
  }
  // Draw state
  else {
      alert(`
      You draw!
      ${output}`);
      end()
  }
}

// Save an output for the alert message contents
function generateScoreMsg(userHand, userScore, dealerHand, dealerScore) {
  return `
      Your hand is ${userHand.join(", ")} and your score is ${userScore}.
      Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`;
}

function end() {
  dealerHand.length = 0;
  userHand.length = 0;
  dealerScore = 0;
  userScore = 0;
  alert(`You have ${userWins} win(s). Dealer has ${dealerWins} win(s).`)
  start()
}

function start() {
  // Ask user if they want to play
  let gameStart = confirm("Do you want to play Blackjack?");
  if (gameStart) {
    dealerHand.push(randHand(2,11));
    userHand.push(randHand(4,21));
    dealerScore = dealerHand[0];
    userScore = userHand[0];
    // Check if user already has Blackjack
    if (userScore === blackjack) {
      alert("Blackjack! You win!");
    // Begin user gameplay state
    } else {
      userLoop();
    }
  }
  else {
    alert(`Game Over!\nYou had ${userWins} win(s). Dealer had ${dealerWins} win(s).`);
    return;
  }
}

start()