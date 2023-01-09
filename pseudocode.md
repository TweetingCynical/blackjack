# Blackjack

# Pseudocode for how to play Blackjack against the computer

* Declare variables needed for the game:
  - Initial array for dealer with random number between 2 and 11 for first card;
  - Initial array for user with random number between 4 and 21 for first card;
  - Set userScore and dealerScore to the index[0] stored in initial userHand and dealerHand respectively;
  - Set blackjack score to 21;
* Create function to handle producing a random number between two ints x and y inclusive;
* Ask user if they want to play;
  - If player choose yes && their score is already blackjack, display 'win' message;
  - Else enter userLoop to play under conditions for user;
* Create function to handle dealing a new card, no matter which player it is for (updating the correct player's array and score accordingly);
* Function for userLoop to manage whether to: 
  - hit => dealNew; (repeat while hit is true && not bust);
  - stick => revert to dealerLoop;
  - bust => game over message;
* Function for dealerLoop to manage whether to:
  - hit is true if dealerScore is less than 17 && less than userScore (repeat while hit is true && not bust);
  - stick if dealerScore is between 17 and 21 inclusive => revert to compareScores;
  - bust if dealerScore > 21;
* Function to manage comparing scores:
  - Compare each to blackjack target (21);
  - If user is closer, they win;
  - If dealer is closer, they win;
  - If userScore === dealerScore, draw;