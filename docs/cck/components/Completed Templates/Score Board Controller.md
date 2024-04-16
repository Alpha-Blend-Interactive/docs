# Component Name:

Score Board Controller

# Description Overview:

game world component that keeps track of score in team games

# Functionality:

- __Script__ (greyed out)
  
	 references self

- __Game instance controller__

 - Selection for GO with Game Instance Controller to be used

-  __Round Timers__

	- Reorderable list (text elements): used to target text field for time remaining/time elapsed (khodrin says remaining only but is unsure. also countdown to round start when waiting for players)

- __Round Status__
  
	- Reorderable list (text elements): used to target text field for round status (not sure of use)

- __Team Elements__
  
	- Reorderable list (sub-elements)
		- Player lists (reorderable list, text elements): for listing player names(?)
		- Team Score (reorderable list, text elements): used to target a text field for displaying team score
    
# Behaviors:

__Game Instance Controller__

- looks for Game Instance Controller

__Round Timers__

- Selection for Unity Text component(s) for displaying remaining round time

__Round Status__

- Unity text component for labelling round status. displays game states:
	- 0, "waiting for players"
	- 5, "ready up"
	- 7, "Round starting"
	- 10, "game in progress"
__Team Elements__

	__Player List__:
	- Unity Text component that displays the name of players on a given team

	__Team Score:__

	- Unity Text component that displays the current score for a given team

# Common Usecases

animating scoreboards
- maybe another usecase, needs further discussion

# Notes

Requires Game Instance Controller component to function
