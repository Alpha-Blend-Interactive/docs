# Component Name:

Player Material Parser

# Description Overview:

World and prop component for bone transforms for all players.

# Functionality:

- __Target Material__: material to be controlled by the component
- __Player Root Positions__: auto-populated
- __Player Hip Positions__: auto-populated
- __Player Head Positions__: auto-populated
- __Player Left Hand Positions__: auto-populated
- __Player Right Hand Positions__: auto-populated
- __Player Chest Positions__: auto-populated
- __Player Left Foot Positions__: auto-populated
- __Player Right Foot Positions__: auto-populated
# Behaviors:

__Target material:__ 

- selects material to feed data to shader for

__Player *X* Positions:__

- inputs to be fed to shader. provides positional data for that bone position for all players

# Common Usecases

water shaders- for getting ripple/splash effects
snow shaders- snow displacement
minimaps- 3D position data

# Notes

The W component of Root will contain the Avatar Viewpoint height.
