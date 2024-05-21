
# Component Name:

CVR Distance Constraint

# Description Overview:

A component to prevent a desired ridgidbody from exiting a designated area.

# Functionality:

**Script** (Read-Only Script Type)

- The indicator of what script this is.

**Target** (Scene Reference)

- The gameobject the constraint should try to stay within distance of.

**Min Distance** (Float)

- The minimum distance the object can be from the reference. It will push it away if it gets closer to this distance.

**Max Distance** (Float)

- The maximum distance the object can be from the reference. It will pull it closer if it gets further than this distance.

**Current Distance** (Read-Only Debug Float)

- A output for the current distance to the reference point, to help understand how far away your 2 points are.

# Common Usecases

Tether Ball. Ridgidbody based follower. (Im grasping at straws here I don't think people have used it much - lily)

# Notes

Documentation note: Look I'm probably incompetent, I've never actually gotten the distance constraint to work. So we should probably peek at it and make an example of its use. - Lily