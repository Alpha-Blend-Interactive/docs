
# Component Name:

CVR Pickup Object

# Description Overview:

The CVR Pickup Object is a component to allow objects to be picked up by the player.
# Functionality:

**Grip Type** (Dropdown)

- Free
	- Allows the player to grab the object without the object snapping or rotating to their hand.
- Origin
	- Allows the player to grab the object and have it snap to their hand based on the Grip Origin.

**Grip Origin** (Transform Reference)

- A transform reference that is used by the Grip Type Dropdown when set to Origin. 

**Disallow Theft** (Bool)

- A bool that prevents a player from grabbing the object when another player is already holding the object.

**Maximum Grab Distance** (Float)

- An input field to set the maximum distance a player can grab the object from.

**Snapping References** (Reorderable List)

- Element (Collapsible List)
	-  Reference Point (Transform Reference)
		- References the point that the object will use as its center point when snapping to the snapping point.
	- Allowed Type (String)
		- The name of the snapping point the object should attach to.

**Auto Hold** (Bool)

- Makes the object automatically held in the players hand, preventing them from dropping the object unless they press the keybind on desktop (Default G) or in VR (Default Right Grip + Right Stick Down)

**Update With Physics** (Bool)

- Updates the object with force instead of moving with the hand each frame.

**IK Reference** (Transform Reference)

- A transform that a desktop users hand will reach up to and attempt to grab when holding an object. (Not implemented yet, poke Khodrin)

# Common Usecases

Anything in which a player would need to pick up the object, like a throwable ball or a weapon.

# Notes

When setting a grip origin game object, you can make another game object as a child and name it \[Desktop] to create a grip that exists for desktop users only.