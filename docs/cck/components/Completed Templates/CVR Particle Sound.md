# Component Name:

CVR Particle Sound

# Description Overview:

A component meant to play sounds from particles when they spawn or are killed.

# Functionality:

**Particle System**

**Spawn Sound** (Reorderable List)

**Die Sound** (Reorderable List)

**Spawn Playback Volume** (Float)

**Die Playback Volume** (Float)

**Spawn Audio Source Reference** 

**Die Audio Source Reference**
# Behaviors:

**Spawn/Die Playback Volume** 

affects the volume multiplicatively with the referenced Audio Source.
# Common Usecases

Commonly these components are used to play randomized non-synced audio from particles. Primarily hit effects and sounds for weaponry.

# Notes

Particles for the CVR particle sound component must be set to world space simulation.