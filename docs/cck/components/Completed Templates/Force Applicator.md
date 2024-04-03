# Component Name:

Force Applicator

# Description Overview:

Applies a force to a rigidbody in a creator-defined vector when active

# Functionality:

__Target__
- Rigidbody selector

__Force Vector__
- X (Newtons)
- Y (Newtons)
- Z (Newtons)
__Strength__
- Vector multiplier
__Only When Submerged__ (bool)

# Behaviors:
__Target__
- The intended rigidbody to apply force to
__Force Vector__
- All fields animatable
- X
	- Local X plane portion of force in Newtons
- Y
	- Local Y plane portion of force in Newtons
- Z
	- Local Z plane portion of force in Newtons

__Strength__
- Multiplies all vector values at once
- Animatable

__Only When Submerged__
- Even while active, only applies force while affected rigidbody is within a Fluid Volume

# Common Usecases

Primary use is for thrusters or propellers on boats and ships, but can be used anywhere you need or want a force applied
Common uses include:
- Watercraft props/thrusters
- Emulation of rocket motors
- aircraft propulsion such as planes, helicopters, or blimps

# Notes

Currently the IsActive checkbox does not exist. should be fixed in CCK 3.9
