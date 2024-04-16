# Component Name:

Object Health

# Description Overview:

{A short description of the component and its intended use}

# Functionality:

__Reference ID__

__Health__

- Health Base Amount
- Health Max Amount

__Health Regeneration__

- Health Regeneration Delay
- Health Regeneration Rate
- Health Regeneration Cap

__Armor__

- Armor Base Amount
- Armor Max Amount

__Armor Regeneration__

- Armor Regeneration Delay
- Armor Regeneration Rate
- Armor Regeneration cap

__Shield__

- Shield Base Amount
- Shield Max Amount

__Shield Regeneration__

- Shield Regeneration Delay
- Shield Regeneration Rate
- Shield Regeneration Cap

__Down Behavior__

- Down Behavior
	- Destroy
	- Respawn After Time
	- Respawn On Round Start
	- Respawn On Round End
	- Respawn On Game Start
	- Respawn On Game End
- Respawn Time
- Respawn Point
- Connected Game Instance

# Behaviors:

__Regeneration Values:__

- __Regeneration Delays__:
	- Time in seconds before the value begins to regenerate. 0 makes recovery instantaneous.
- __Regeneration Rates:__
	- points per second that the value regenerates. 0 disables regen.
- __Regeneration Caps:__
	- Maximum points a given value can regenerate to (can be different from overall maximum)
__Core Values:__
- __Base Amount:__
	- Number of points a value starts with
- __Max Amount:__
	- Maximum Number of points a value can have

__Down Behavior:__
- Dropdown:
	- Destroy
		- Removes the object from the game area
	- Respawn After Time
		- Respawns the player in the game area after a set time
	- Respawn On Round Start
		- Respawns the object in the play area at the start of a new round
	- Respawn On Round End
		- Respawns the object in the play area at the end of a round 
	- Respawn On Game Start
		- Respawns the object in the play area at the start of a new match
	- Respawn On Game End
		- Respawns the object in the play area at the end of a match
- __Respawn Time__

	- Time (in seconds) between death and respawn
  
- __Respawn Point__
  
  	- Respawn point transform

- __Connected Game Instance__
  
	- Game instance controller handling the Object health component

# Common Usecases

# Notes
Currently missing events in template
