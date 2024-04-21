# Component Name:

Fluid Volume

# Description Overview:

Defines the bounds and fluid properties of a given volume

# Functionality:

__Volume Type__ (dropdown)

- Box
- Sphere

__Width/Length__

- X
- Y

__Depth__

__Place From Center__ (only for Box)

__Stream Type__ (dropdown)

- Directional
- Outwards

__Stream Angle__

__Stream Strength__

__Splash Particle System__ (particle system)

# Behaviors:

__Volume Type__ (dropdown)

- Determines the primitive shape the fluid volume will be

	- Box
		- Fluid volume will be a rectangular prism
	- Sphere
		- Fluid volume will be spherical, and always originates from the center of the transform

__Width/Length__

- X 
	- Multiple of scale along X axis
- Y
	- Multiple of scale along Z axis, in spite of the name

__Depth__

- For spheres, is a multiple of the largest scale axis
- For cubes, is a multiple of the Y axis scale

__Place From Center__ (only for Box)

- Toggles whether the fluid begins from the origin to the negative Y, or is equidistant from the origin on the Y axis

__Stream Type__ (dropdown)

- Directional
- Outwards

__Stream Angle__

__Stream Strength__

__Splash Particle System__ (particle system)

- particle system that plays when a player or object enters the fluid volume

# Common Usecases

making water on props or worlds interact with other props or players

# Notes

kinda fucky with gravity