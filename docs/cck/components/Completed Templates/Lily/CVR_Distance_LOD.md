
# Component Name:

CVR Distance LOD

# Description Overview:

A component to help utilize simplified LOD's on objects.

# Functionality:

**3D Distance** (Bool)

- When using 3D Distance, the component will take your X, Y, and Z Coordinates into account when calculating distance. Otherwise will just utilize the X and Z Coordinates.

**Groups** (Expandable List)

- **Game Object** (Scene Reference)
	- The game object to Show/Hide
- **Min Distance** (Float)
	- When closer than this distance, hides the game object.
- **Max Distance** (Float)
	- When further than this distance, hides the game object.

# Common Usecases

Trees. Small props in the world.

# Notes

When an object is within both distances it is shown, outside of those distances it is hidden.