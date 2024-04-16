# Component Name:

Gun Controller

# Description Overview:

Controller for guns (Clarify, obviously -PY)

# Functionality:

__Reference ID__

__Particle System__
- Particle system selector field
  
__Shoot Sounds__
- Reorderable list (Audio clip)
  
__Reload Sounds__
- Reorderable list (Audio clip)
  
__Empty Shoot Sounds__
- Reorderable list (Audio clip)
  
__Magazine Size__

__Ammo Capacity__

__Firing Mode (Dropdown)__

- Single
- Half Auto
- Full Auto

__Firing Rate__

__Reload Time__

__Hit Detection (Dropdown)__

- Particle
- Raycast
  
__Hit Mask (dropdown)__

- Nothing
- Everything
- Default (Playerlocal)
- TransparentFX
- Ignore Raycast
- Water
- UI
- PassPlayer
- BlockPlayer
- PlayerLocal
- PlayerClone
- PlayerNetwork
- MirrorReflection
- Camera Only
- CVRReserved1
- CVRReserved2
- CVRReserved3
- additional 16 renamable collision masks

# Behaviors:

## __Particle System__

__Particle system selector field:__

- Particle system used for the visualization of the shot.
- Particle system must include the **Damage** script to function

## __Shoot Sounds__
- Reorderable list (Audio clip)
	- Sounds played when firing

__Reload Sounds__
- Reorderable list (Audio clip)
	- Sounds played when reloading

__Empty Shoot Sounds__
- Reorderable list (Audio clip)
	- Sound played when attempting to fire while weapon is empty

__Magazine Size__
- Maximum amount of ammunition that can be in a magazine

__Ammo Capacity__
- Total amount of ammunition for a weapon the player can carry

__Firing Mode (Dropdown)__
- Single
- Half Auto
- Full Auto

__Firing Rate__
- Rate of fire (in RPM)

__Reload Time__
- Time to reload (in seconds)

__Hit Detection (Dropdown)__
- Particle
	- Uses particle collision to detect hits
- Raycast
	- Uses a raycast to detect hits (ideal for hitscan)

__Hit Mask (dropdown)__
- Collision masks for determining what can actually be hit

# Common Usecases

Runs gun interactables as props or within worlds.

# Notes

makes gun creation easier
uses separate zoom package that improves zoom accuracy, captures unity position/direction on shot, should be lag-resistant
writes values to animimator such as: magazine stats, reload bool, and fire and dry fire 
allows for hitscan weapons
