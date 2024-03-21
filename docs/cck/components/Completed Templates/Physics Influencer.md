# Component Name:

Physics Influencer

# Description Overview:

Allows a prop to be influenced by the gravity and buoyancy systems ingame (possibly additional physics systems if added later as well)

# Functionality:

__Change Center Of Mass__
- Center of mass (transform)
- Update Continuously
__Buoyancy__
- Density
- Volume
- Recalculate Density and Volume
- Air Drag
- Air Angular Drag
- Fluid Drag
- Fluid Angular Drag
__Local Gravity__
- Force Align Upright
# Behaviors:

## Change Center of mass
__Center of mass__:
- Allows creator to change the calculated CoM away from the center of collider/rigidbody used
- needs a transform to function, typically an empty gameobject
__Update Continuously__
- updates CoM calculation every fixedupdate frame -at time of writing not implemented on game side
## Buoyancy
__Density:__ 
- Calculated density based on collider volume and rigidbody mass
- Doesn't actually do anything itself
- Updated with __Recalculate Density and volume__
__Volume:__
- Calculated volume based on collider area on affected GO
- Doesn't actually do anything itself
- Updated with __Recalculate Density and volume__
__Recalculate Density and Volume:__
- Updates density and volume fields for a clear indication of the buoyant behavior
- Does not update behavior on upload (may be incorrect, need clarification -PY)
__Air drag__
- Resistance to forward motion outside of a fluid volume
__Air Angular drag__
- Resistance to turning outside of a fluid volume
__Fluid Drag__
- Resistance to forward motion inside a fluid volume
__fluid Angular Drag__
- Resistance to turning inside a fluid volume
## Local Gravity
__Force Align Upright__
- Causes affected game object to always align it's local coordinate plane with the current gravity vector

# Common Usecases

Applying buoyancy or gravity to props to allow them to interact with thos built-in physics systems.
Buoyancy is commonly used to make ships, but can also be used for flotsam or other waterborne objects, and potentially submersibles.
Gravity is mostly used to allow objects to either reorient to, or orbit gravitational bodies. this is very open-ended and allows for creator experimentation to some extent.

# Notes

- Requires both a collider and rigidbody on affected gameobject to function
- density is animatable by animating the rigidbody's mass
- volume theoretically animatable, but currently not actually (requires unity explorer or playing in-editor according to khodrin)