# Component Name:

CVR Parameter Stream

# Description Overview:

Component that gets data that is not otherwise accessible and provides it to Animators, directly to AAS settings, spawnable values, or variable buffers.

# Functionality:

__Stream Configuration__

- Stream Type
	- World
	- Spawnable
	- Avatar
- Update mode (Dropdown) (World or Spawnable only)
	- Nothing
	- Everything
	- Update When Held
	- Update When Attached
	- Update When Controlled
- Stream Entries (reorderable list)
	- World and spawnable:
		- Input (dropdown)
			- See [Parameter Stream Input Types](ParameterStreamInputTypes.md)
		- Output (dropdown)
			- Animator
				- Parameter (parameter search)
			- Variable Buffer (World only)
			- Custom Float (Spawnable Only)
				- Synced Value (search)
		- Target (GameObject)
		- Application Type (dropdown)
			- Override
			- Add to Current
			- Add to static
				- Static Value (float)
			- Subtract from Current
			- Subtract from Static
				- Static Value (float)
			- Subtract with Current
			- Subtract with Static
				- Static Value (float)
			- Multiply With Current
			- Multiply With Static
				- Static Value (float)
			- Compare Less Than
				- Static Value (float)
			- Compare Less Than Equals
				- Static Value (float)
			- Compare Equals
				- Static Value (float)
			- Compare More Than Equals
				- Static Value (float)
			- Compare More Than
				- Static Value (float)
			- Mod
			- Power
	- Avatar:
		- Input (dropdown)
			- See [Parameter Stream Input Types](ParameterStreamInputTypes.md)
		- Output (dropdown)
			- Animator
			- Sub-Animator
		- Target (GameObject)
		- Parameter (search)
	- Application Type (dropdown)
		- Override
		- Add to Current
		- Add to static
			- Static Value (float)
		- Subtract from Current
		- Subtract from Static
			- Static Value (float)
		- Subtract with Current
		- Subtract with Static
			- Static Value (float)
		- Multiply With Current
		- Multiply With Static
			- Static Value (float)
		- Compare Less Than
			- Static Value (float)
		- Compare Less Than Equals
			- Static Value (float)
		- Compare Equals
			- Static Value (float)
		- Compare More Than Equals
			- Static Value (float)
		- Compare More Than
			- Static Value (float)
		- Mod
		- Power

# Behaviors:

__Stream Configuration__

__Stream Type__

Unconfigurable and defined by the presence of the spawnable or avatar components, assumes world otherwise.

- World
- Spawnable
- Avatar

__Update mode (Dropdown) (World or Spawnable only)__

Determines when the stremed object is allowed to update.

- Nothing
	- Disables updating
- Everything
	- Always updates
- Update When Held
	- Updates when held by the player
- Update When Attached
	- Updates when attached to a player
- Update When Controlled
	- Updates while under the player's control (such as when using a seat)

- Stream Entries (reorderable list)
	- World and spawnable:
		- Input (dropdown)
			- See [Parameter Stream Input Types](ParameterStreamInputTypes.md)
		- Output (dropdown)
			- Animator
				- Outputs the Value to an Animator Controller Parameter
				- Parameter (parameter search)
			- Variable Buffer (World only)
				- Writes a new value to the selected buffer
			- Custom Float (Spawnable Only)
				- performs the application type to the selected synced value
				- Synced Value (search)
		- Target (GameObject)
			- Object with the matching component in the "Output" field that receives the value
		- Application Type (dropdown)
			- logic or arithmetic being applied to the input value to get the output value.
				- Override
					- Directly writes the input value to the output target
				- Add to Current
					- adds input value to current value of the output target
				- Add to static
					- adds input value to a defined static value
					- Static Value (float)
				- Subtract from Current
					- subtracts input value from the current value of the output target
				- Subtract from Static
					- Subtracts input value from a defined static value
					- Static Value (float)
				- Subtract with Current
					- subtracts input value with the current value of the output target
				- Subtract with Static
					- Subtracts input value with a defined static value
					- Static Value (float)
				- Multiply With Current
					- Multiplies input value with the current value of the output target
				- Multiply With Static
					- Multiplies input value with a defined static value
					- Static Value (float)
				- Compare Less Than
					- Returns 1 when input value is less than the static value, otherwise returns 0
					- Static Value (float)
				- Compare Less Than Equals
					- Returns 1 when input value is less than or equal to the static value, otherwise returns 0
					- Static Value (float)
				- Compare Equals
					- Returns 1 when input value is equal to the static value, otherwise returns 0
					- Static Value (float)
				- Compare More Than Equals
					- Returns 1 when input value is more than or equal to the static value, otherwise returns 0
					- Static Value (float)
				- Compare More Than
					- Returns 1 when input value is more than the static value, otherwise returns 0
					- Static Value (float)
				- Mod
					- Performs a modulo (remainder) function between input and static value
					- Static Value (float)
				- Power
					- Increases input value to the static value's exponent
					- Static Value (float)
	- Avatar:
		- Input (dropdown)
			- See [Parameter Stream Input Types](ParameterStreamInputTypes.md)
		- Output (dropdown)
			- Animator
				- Outputs the Value to the directly to the avatar's Animator Controller parameters
			- Sub-Animator
				- Outputs the Value to an Animator Controller Parameter for a sub-animator
		- Target (GameObject)
			- Object with the matching component in the "Output" field that receives the value (only for Sub-Animator output)
		- Parameter (search)
	- Application Type (dropdown)
		- same as application types for spawnables/worlds

# Common Usecases

controls for props, reacting to fluid volumes, custom visemes/eye tracking

# Notes

{Any useful information not covered in other sections}

