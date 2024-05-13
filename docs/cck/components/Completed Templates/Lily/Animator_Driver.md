  
# Component Name:

Animator Driver

# Description Overview:

An animator component that is used to change values by animator states.

# Functionality:

**Local Only** (Bool)

- Sets the animator driver to only run on the owner of the prop or wearer of the avatar. (Need clarification if this can be used in worlds - Lily)

**On Enter Tasks** (Expandable List)

- Manipulates the values when entering the state.

- **Parameter** (String)
	- The name of the parameter you want to manipulate. Has a dropdown on the right to make a quick selection.
- **Operation** (Dropdown)
	- Set
		- Sets the value from the A Type section.
	- Addition
		- Sets the value by adding A and B.
	- Subtraction
		- Sets the value by subtracting B from A.
	- Multiplication
		- Sets the value by multiplying A by B.
	- Division
		- Sets the value by dividing A by B.
	- Modulo
		- Sets the value as the remainder from dividing A by B.
	- Power
		- Sets the value by multiplying A by itself B number of times.
	- Log
		- Sets the value as the number of times A needs to be multiplied by itself to reach B.
	- Equal
		- Sets the value to True If A and B are equal.
	- Not Equal
		- Sets the value to True If A and B are not equal.
	- Less Then 
		- Sets the value to True If A is less than B.
	- Less Equal
		- Sets the value to True if A is less than or equal to B.
	- More Then
		- Sets the value to True if A is greater than B.
	- More Equal
		- Sets the value to True if A is greater than or equal to B.

- **A Type** (Dropdown)
	- Static
		- Sets the mode for A to (Static)
	- Parameter
		- Sets the mode for A to (Parameter)
	- Random
		- Sets the mode for A to (Random)

- (Static) **A Value** (Float)
	- A direct, unchanging value to use for A.

- (Parameter) **A Parameter** (String)
	- The parameter to use as value A.

- (Random) **A Min** (Float)
	- The minimum value that the value can be.
- (Random) **A Max** (Float)
	- The maximum value that the value can be.

- **B Type** (Dropdown)
	- Static
		- Sets the mode for B to (Static)
	- Parameter
		- Sets the mode for B to (Parameter)
	- Random
		- Sets the mode for B to (Random)

- (Static) **B Value** (Float)
	- A direct, unchanging value to use for B.

- (Parameter) **B Parameter** (String)
	- The parameter to use as value B.

- (Random) **B Min** (Float)
	- The minimum value that the value can be.
- (Random) **B Max** (Float)
	- The maximum value that the value can be.

**On Exit Tasks** (Expandable List)

- Manipulates the values when exiting the state.

- **Parameter** (String)
	- The name of the parameter you want to manipulate. Has a dropdown on the right to make a quick selection.
- **Operation** (Dropdown)
	- Set
		- Sets the value from the A Type section.
	- Addition
		- Sets the value by adding A and B.
	- Subtraction
		- Sets the value by subtracting B from A.
	- Multiplication
		- Sets the value by multiplying A by B.
	- Division
		- Sets the value by dividing A by B.
	- Modulo
		- Sets the value as the remainder from dividing A by B.
	- Power
		- Sets the value by multiplying A by itself B number of times.
	- Log
		- Sets the value as the number of times A needs to be multiplied by itself to reach B.
	- Equal
		- Sets the value to True If A and B are equal.
	- Not Equal
		- Sets the value to True If A and B are not equal.
	- Less Then 
		- Sets the value to True If A is less than B.
	- Less Equal
		- Sets the value to True if A is less than or equal to B.
	- More Then
		- Sets the value to True if A is greater than B.
	- More Equal
		- Sets the value to True if A is greater than or equal to B.

- **A Type** (Dropdown)
	- Static
		- Sets the mode for A to (Static)
	- Parameter
		- Sets the mode for A to (Parameter)
	- Random
		- Sets the mode for A to (Random)

- (Static) **A Value** (Float)
	- A direct, unchanging value to use for A.

- (Parameter) **A Parameter** (String)
	- The parameter to use as value A.

- (Random) **A Min** (Float)
	- The minimum value that the value can be.
- (Random) **A Max** (Float)
	- The maximum value that the value can be.

- **B Type** (Dropdown)
	- Static
		- Sets the mode for B to (Static)
	- Parameter
		- Sets the mode for B to (Parameter)
	- Random
		- Sets the mode for B to (Random)

- (Static) **B Value** (Float)
	- A direct, unchanging value to use for B.

- (Parameter) **B Parameter** (String)
	- The parameter to use as value B.

- (Random) **B Min** (Float)
	- The minimum value that the value can be.
- (Random) **B Max** (Float)
	- The maximum value that the value can be.

# Common Usecases

Changing values in an animator. Simple math driven animations/actions. Complex math driven animations/actions.

# Notes

You can run animator drivers locally using the IsLocal parameter without having to use the Local bool. (See Lily for an example and explanation.)