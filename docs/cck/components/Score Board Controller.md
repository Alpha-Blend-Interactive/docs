#  Score Board Controller
Adding this component will allow you to display information about the Game Instance Controller in a Unity UI Canvas.
> As of 2024r176 Text UI is limited to Unity's legacy Text UI components. This may change in the future.

### Properties
These are properties that are controlled by the Game Instance Controller.

+ **Game Instance Controller:** The Game Insatance Controller component the Score Board Controller is controlled by.
+ **Round Timers:** This is a List of text components that can display the time of the current round.
+ **Round Status:** This is a List of text components that can display the round satus of the game.
  - **Waiting For Players**
  - **Players Ready**
  - **Game Starting**
  - **Game in Progress**
+ **Team Elements:** This is a list of elements in order of the Team Index in the Game Instance Controller.
  - **Player Lists:** This is a list of Text components that can display player names of the players in a Team.
  - **Team Score:** This is a list of Text components that can display the Team's current score.
