# BaseballGame
Number guessing game with a twist using basic baseball terms.

## About the Game
The page is a game where the user guesses a random three digit number that has distinct digits. The rules are quite simple. If the player matches the number and order of a digit, it is strike. If the player matches a number but is not in the correct place, it is a ball. Using these hints the player should be able to match the number.  
It is designed to count the number of guesses it takes and stores the value and placed in the ranking which stores the top 10 players.  

## Version Updates
Version 1.0.0  
Create basic frame using html and css. 
That is add title, place holder for input and buttons. Also set background image.
Next todo:
- create place holder for scoreboard(Ball Strike Out) and guessing history.
- add anchors for how to play, about, rank on footer.
- adjust size and margin accordingly

Version 1.0.1
- Change text font
- Make style changes for index.html

Version 1.0.2
- Add JavaScript for buttons
- Add forms for input number and limit to 3 digit numbers
- Create basic algorithm for game
- Deploy site https://yjyoo773.github.io/BaseballGame/

Version 1.0.3
- Full function of input
- When pressing ok, input number and score result is displayed on guess history

Version 1.0.4
- Change input so can be done pushing buttons => maybe make keyboards possible too?
- scoreboard position fixed

Version 1.0.5
- When user matches number refresh page to start again
- Create reset button to clear input
- Functionalize Scoreboard lights

Version 1.0.6
- Utilize pop up for how to play and add description for how to play
- Move footer to header for better visualization

Version 1.0.7
- Create element to input player name
- Design such that when inputting name, hides the element and shows number input elements

Version 1.0.8
- Prevent from empty inputs to be entered for player name and number guessed
- Create local storage
- When player wins game, name and number of guesses is stored in local storage in sorted order

Version 1.1.0
- Create Ranking page
- Using local storage, now displays rankings of player

Version 1.1.1
- Redesign ranking table
- Remove scoreboard to make webpage mobile friendly

Version 1.1.2
- Change minor formatting overall to improve UI
- Create about-me page and format 
