
# Component Name:

CVR Spawnable Trigger
# Description Overview:

A component to detect compatible CVR Pointer components and manipulate values

# Functionality:
**Area Size** (Vector 3)

- The X, Y and Z values that determine the size of the trigger.

**Area Offset** (Vector 3)

- The X, Y and Z values that determine the center of the trigger.

(Simple) **Parameter** (Dropdown)

- A selection of your Spawnables Synced values.

(Simple) **Setting Value** (Float)

- Sets the value when a compatible pointer enters the trigger.

**Enabled Advanced Mode** (Bool)

- Enables Advanced Mode, hiding the (Simple) setting and enabling the (Advanced) settings.

(Advanced) **Allowed Types** (Reorderable Expandable List)

- Element 0 (String)
	- Filters the trigger to use pointers whose type matches the list.

(Advanced) **Enabled Particle Interaction** (Bool)

- Allows the trigger to interact with particles that have a pointer.

- (Advanced) **On Enter Trigger** (Expandable List)
	- **Parameter** (Dropdown)
		- A selection of your Spawnables Synced values.
	- **Setting Value** (Float)
		- The value to set the setting to when a pointer enters the trigger.
	- **Delay** (Float)
		- Delays setting the value in seconds.
	- **Hold Time** (Float)
		- The amount of time a pointer must be in the trigger to activate it in seconds.
	- **Update Method** (Dropdown)
		- Override
			- Overrides the current value with the value in the Setting Value.
		- Add
			- Adds the Setting Value to the current value.
		- Subtract
			- Subtracts the Setting Value from the current value.
		- Toggle
			- Sets the current value to the Setting Value, sets it back to the previous number when triggered again.
- (Advanced) **On Exit Trigger** (Expandable List)
	- **Parameter** (Dropdown)
		- A selection of your Spawnables Synced values.
	- **Setting Value** (Float)
		- The value to set the setting to when a pointer exits the trigger.
	- **Delay** (Float)
		- Delays setting the value in seconds.
	- **Update Method** (Dropdown)
		- Override
			- Overrides the current value with the value in the Setting Value.
		- Add
			- Adds the Setting Value to the current value.
		- Subtract
			- Subtracts the Setting Value from the current value.
		- Toggle
			- Sets the current value to the Setting Value, sets it back to the previous number when triggered again.
- (Advanced) **On Stay Trigger** (Expandable List)
	- **Parameter** (Dropdown)
		- A selection of your Spawnables Synced values.
	- **Update Method** (Dropdown)
		- Set From Position
			- Changes the value based on how far forward or back it is. (Position/Distance)
		- Add
			- Adds to the value each second. (Add/Subtract)
		- Subtract
			- Subtracts from the value each second. (Add/Subtract)
		- Set From Distance
			- Changes the value based on how close the pointer is to the center of the trigger. (Position/Distance)
	- (Position/Distance) **Min Value** (Float)
		- The minimum value when the pointer is towards the front/outside of the trigger.
	- (Position/Distance) **Max Value** (Float)
		- The minimum value when the pointer is towards the back/center of the trigger.
	- (Add/Subtract) **Change Per Sec** (Float)
		- The amount to add/subtract each second from the value.

(Advanced) **Sample Direction** (Dropdown)

- Sets the spawnables sample direction for the Set From Position update method.

- X Positive
- Y Positive
- Z Positive
- X Negative
- Y Negative
- Z Negative
# Common Usecases

Physical button presses. Detecting when something enters/leaves an area.
# Notes

Documentation note: this may change in the future