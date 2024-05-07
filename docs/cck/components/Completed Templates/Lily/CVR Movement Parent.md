
# Component Name:

CVR Movement Parent

# Description Overview:

Enables players to move with the object they are standing on.

# Functionality:

**Parenting Settings** (Sectional Menu)

- **Orientation Mode** (Dropdown)
	- Disabled
		- The player does not rotate if the parent object rotates.
	- Rotate With Parent
		- The player does rotate if the parent object rotates.

- **Velocity Inheritance** (Dropdown)
	- None
		- The player inherits no speed upon leaving the movement parent.
	- Parent
		- The player inherits the speed of the parent upon leaving the movement parent.
	- Reference
		- The player inherits the speed relative to themselves upon leaving the movement parent.

# Common Usecases

Platformers, avatars with the capability of picking up other players, and hopping onto to moving vehicles without needing extra seats.

# Notes

Requires some kind of collider that a player can stand on.