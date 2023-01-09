// Declare variables
let dealerHand = [randHand(2,11)];
let userHand = [randHand(4,21)];
let dealerScore = dealerHand[0];
let userScore = userHand[0];
let blackjack = 21;

// Choose random number
function randHand(x,y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

// Deal a new hand
function dealNew(arr, whoScore) {
  randNew = randHand(2,11)
  addNew = arr.push(randNew);
  whoScore += randNew;
  return whoScore;
}

// Ask user if they want to play
let gameStart = confirm("Do you want to play Blackjack?");
if (gameStart) {
  // Check if user already has Blackjack
  if (userScore === blackjack) {
    alert("Blackjack! You win!");
  // Begin user gameplay state
  } else {
    userLoop();
  }
}
else {
  alert("Game Over!");
}

// User gameplay state
function userLoop() {
  let hit = true;
  while (hit) {
    // Share both scores with user, invite to hit or stick
    if (userScore < blackjack) {
      hit = confirm(`
      Your hand is ${userHand.join(", ")} and your score is ${userScore}.
      Dealer score is ${dealerScore}.
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
      Your hand is ${userHand.join(", ")} and your score is ${userScore}.
      Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`);
      break;
    } 
    // User stick, begin dealer gameplay state
    else {
      hit = false;
      dealerLoop();
    }
  }
}

// Logic for when it is the dealer's turn to play
function dealerLoop() {
let hit = true;
  while (hit) {
    if (dealerScore <= userScore) {
      // Dealer always hits when his score is less than the users && less than 17
      if (dealerScore < 17) {
      alert(`
      Your hand is ${userHand.join(", ")} and your score is ${userScore}.
      Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.
      Dealer will draw a new card.`);
      dealerScore = dealNew(dealerHand, dealerScore);
      }
      // Dealer bust
      else if (dealerScore > 21){
        alert(`
        Dealer bust!
        Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`);
        break;
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
      Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`);
      break;
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
  // User win state
  if (userComp < dealComp) {
    alert(`
    You win! 
    Your hand is ${userHand.join(", ")} and your score is ${userScore}.
    Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`);
    return;
  }
  // Dealer win state
  else if (userComp > dealComp) {
    alert(`You lose! 
    Your hand is ${userHand.join(", ")} and your score is ${userScore}.
    Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`);
    return;
  }
  // Draw state
  else {
    alert(`You draw!
    Your hand is ${userHand.join(", ")} and your score is ${userScore}.
    Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`);
    return;
  }
}

// Save an output for the alert message contents
let output = `
Your hand is ${userHand.join(", ")} and your score is ${userScore}.
Dealer's hand is ${dealerHand.join(", ")} and dealer score is ${dealerScore}.`