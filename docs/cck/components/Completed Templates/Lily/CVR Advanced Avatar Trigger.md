
# Component Name:

CVR Advanced Avatar Trigger

# Description Overview:

A component to detect compatible CVR Pointer components and manipulate a wide range of values.

# Functionality:

**Trigger Mode** (Dropdown)

- Simple
	- Sets the component to (Simple) mode.
- Advanced
	- Sets the component to use (Advanced) mode.

 **Area Configuration** (Collapsible Menu)

- **Area Size** (Vector 3)
	- The X, Y and Z values that determine the size of the trigger.
- **Area Offset** (Vector 3)
	- The X, Y and Z values that determine the center of the trigger.

**Interaction Filter** (Collapsible Menu)

- **Local Interaction** (Bool)
	- The trigger will interact with pointers from you.
- **Network Interaction** (Bool)
	- The trigger will interact with pointers from other players.
- **Particle Interaction** (Bool)
	- The trigger will interact with particles that have a pointer.

(Simple) **Trigger Settings** (Collapsible Menu)

- **Setting Name** (String)
	- The name of the setting in your Avatar Advanced Settings.
- **Setting Value** (Float)
	- The value to set the setting to when a pointer enters the trigger.

(Advanced) **Allowed Filter** (Collapsible Menu)

- **Allow Filter Mode** (Dropdown)
	- Type
		- Sets the filter mode to (Type)
	- Reference
		- Sets the filter mode to (Reference)
- (Type) **Allowed Types** (Expandable String List)
	- Filters the trigger to only use pointers with the same Type as the list.
- (Reference) **Allowed Pointers** (Expandable Reference List)
	- Filters the trigger to only use pointers in the reference list.

(Advanced) **Trigger Tasks** (Collapsible Menu)

- **On Enter Trigger** (Expandable List)
	- **Setting Name** (String)
		- The name of the setting in your Avatar Advanced Settings.
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
- **On Exit Trigger** (Expandable List)
	- **Setting Name** (String)
		- The name of the setting in your Avatar Advanced Settings.
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
- **On Stay Trigger** (Expandable List)
	- **Setting Name** (String)
		- The name of the setting in your Avatar Advanced Settings.
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
# Common Usecases

Toggles that other players can trigger. Headpat interaction. Boop interaction.

# Notes

Documentation note: These may change in the future