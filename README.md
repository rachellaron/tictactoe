# Animal Crossing Tic Tac Toe
Inspired by Animal Crossing by nintendo

# Welcome to the famous Tic Tac Toe Game
https://rachellaron.github.io/tictactoe/

# How to Play
If your unfamiliar with how to play Tic Tac Toe, use the boxes provided and click inside them to display your X or O symbol. 3 in a line will automatically make you the winner!

# Behind the Scenes (How it was built)
This game was built using
- HTML
- CSS
- JAVASCRIPT 
- Icons done by FontAwesome 

# Extra Features
You have the option to play music while playing the game, the music is from the original Animal Crossing New Horizons. You can also pause while playing. 
When you have finished playing, click the reset button and it will reload the page for you.

# Planning 
- Beginning Steps

    *My Understanding*

    1. Display a webpage with a header & Div Container that contains the Tic Tac Toe Game
    2. User clicks on one of the boxes and it displays an X, then user clicks on another Box and it displays an O 
    3. If the gird has a line of either X or O's the user wins. 
    - Row One, Two or Three
    - Column One, Two or Three
    - Diagonal Left & Right

    4. Display a message saying either X(user One) or O(user two) has won 

    5. Show button to play again

    *Elements I need*

    - `<header>`
    - `<div class="">`
    - `<div id="">`
    - `<button>`
  
    *Coding Version*
    ```jsx
    1. Set Up Board
        - Each Row have a class
        - define which rows can be won with their classes
    2. A way for users to click to add their X or their O
    3. Check to see if the user has won
        - Has the user got 3 in a row?
            - Get all values in that Row
            - Use querySelectorAll to find that class
                - Repeat process till we can find values in a row, column or diagonal
                - else Draw
    4. Display restart button
    ```

    Another way 
    ```jsx
    1. Set up Board 
    2. Get index of each board element([0],[1])
    3. Define which index's are winning - var array = [0, 1, 2] , [3, 4, 5] 
    4. User Clicks on specific box element (Index)
    	- Check to see if the clicked boxes relate to board index
    	- else 'draw'
    5. Display restart button
    ```
# Extras that can be included
1. User opens web page
2. Shows mobile application
3. Has Music Playing (music icon in top right to turn off or on)
4. Beginning Screen has 3 options - Single Player, Multiplayer & Play Local
    - Single & Multi (Use Math.random & have computer to play against the user)
5. Once player has entered game, showcase a scroll horizontal of 6 Icons to choose from 
    - X, O, Emoji, Animal Crossing Character x3
6. Once Character has been chosen screen will show game same as the first version 
7. Have 3 menu bar options at the bottom, Menu, Restart Game& Game Options
    - Game Options, will have Icon Change, Time Limits, Board Same, Name Etc.

WireFrame Planning was done on Figma. Simple Mobile App Design

# Known Bugs 
- When the user clicks the reload button it reloads the whole game instead of a certain frame
- If you have won, you are able to click the other boxes to keep playing. 


