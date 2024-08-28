# Parameter Stream Input types

## __General__
- Time Seconds:
The current system time in seconds without the date according to the following formula:
hours * 3600 + Minutes * 60 + Seconds + Milliseconds / 1000

- Time Seconds Utc:
The current UTC time in seconds without the date according to the following formular
hours * 3600 + Minutes * 60 + Seconds + Milliseconds / 1000

- Device Mode:
0 when in desktop mode, 1 when in VR

- Headset On Head:
1 when the headset is on head, 0 when the headset is off the head

- Zoom Factor:
the current zoom input between 0 and 1, where 0 is no zoom and 1 is fully zoomed in

- Zoom Factor Curve:
the resulting zoom curve between 0 and 1. same as above but with some easing

- Time Since Headset Removed:
the time since the headset was removed in seconds

- Time Since Local Avatar Loaded:
the time since the local avatar was loaded in seconds

- Local World Download Percentage:
the current download percentage of world download 0 to 1. only active while loading another world

- Local FPS:
The current frames per second

- Local Ping:
The current ping in ms to the gameserver (updates at 10Hz)

- Local Player Count:
The number of players in the current instance including the local player

- Local Time Since First World Join:
The number of seconds since the first world join in this session

- Local Time Since World Join:
The number of seconds since the last world join

- Local Player Muted:
the current mute state of the microphone. 1 is muted, 0 is unmuted

- Local Player Hud Enabled:
the current visibillity state of the HUD. 1 is enabled, 0 is disabled

- Local Player Nameplates Enabled:
the current visibillity state of nameplates. 1 is enabled, 0 is disabled

- Local Player Height:
The currently set player height in the settings in meters

- Local Player Left Controller Type:
The type of the left VR controller
0: None
1: Other
2: Vive
3: MixedReality
4: HPMotion
5: Index
6: Oculus
7: Pico
8: XRHands

- Local Player Right Controller Type:
The type of the right VR controller
0: None
1: Other
2: Vive
3: MixedReality
4: HPMotion
5: Index
6: Oculus
7: Pico
8: XRHands

- Local Player Full Body Enabled:
If Fullbody is active. 1 if active, otherwise 0. To be considered active, the game needs to detect at least the number of trackers that is required by your ik settings

- Current instance Type:
Returns a value based on the current instance
0: Public
1: Friends of Friends
2: Friends
3: Groups
4: Everyone Can Invite
5: Owner Must Invite

## __Eye Tracking__

- Eye Movement Left X:
The left eye horizontal position -1 to 1

- Eye Movement Left Y:
The left eye vertical position -1 to 1

- Eye Movement Right X:
The right eye horizontal position -1 to 1

- Eye Movement Right Y:
The right eye vertical position -1 to 1

- Eye Blinking Left:
the left eye blink progress 0 to 1, where 0 is open and 1 is closed

- Eye Blinking Right:
the right eye blink progress 0 to 1, where 0 is open and 1 is closed



## __Lip Sync__

- Viseme Level:
the current viseme loudness 0 to 1


## __Input__

- Trigger Left Value:
how far the left trigger is pulled in VR 0 to 1

- Trigger Right Value:
how far the right trigger is pulled in VR or on a gamepad from 0 to 1.
1 if the left mouse button is pressed

- Grip Left Value:
how far the left grip is pulled in VR 0 to 1

- Grip Right Value:
how far the right grip is pulled in VR from 0 to 1.
how far the left trigger is pulled on a gamepad from 0 to 1.
1 if the right mouse button is pressed

- Gripped Object Left:
1 if an object is held in the left hand in VR

- Gripped Object Right:
1 if an object is held in the right hand in VR or on Desktop

## __Avatar__

- Avatar Height:
the current avatar viewpoint height in meters

- Avatar Upright:
the current players camera height relative to the avatars view height. 0 to 1, where one is standing at the default height

## __Transform__

- Transform Global Position X:
The global X position of the gameObject the parameter stream is on

- Transform Global Position Y:
The global Y position of the gameObject the parameter stream is on

- Transform Global Position Z:
The global Z position of the gameObject the parameter stream is on

- Transform Global Rotation X:
The global X rotation of the gameObject the parameter stream is on

- Transform Global Rotation Y:
The global Y rotation of the gameObject the parameter stream is on

- Transform Global Rotation Z:
The global Z rotation of the gameObject the parameter stream is on

- Transform Local Position X:
The local X position of the gameObject the parameter stream is on

- Transform Local Position Y:
The local Y position of the gameObject the parameter stream is on

- Transform Local Position Z:
The local Z position of the gameObject the parameter stream is on

- Transform Local Rotation X:
The local X rotation of the gameObject the parameter stream is on

- Transform Local Rotation Y:
The local Y rotation of the gameObject the parameter stream is on

- Transform Local Rotation Z:
The local Z rotation of the gameObject the parameter stream is on

## __Fluid Volume__

- Fluid Volume Submerged:
1 if the player is submerged in water, 0 otherwise
if not used on an avatar, a PhysicsInfluencer is needed

- Fluid Volume Depth:
the distance below a fluid surface in meters
if not used on an avatar, a PhysicsInfluencer is needed

- Fluid Volume Time Since Entered:
The time since a fluid volume was entered
if not used on an avatar, a PhysicsInfluencer is needed

- Fluid Volume Time Since Exit:
The time since a fluid volume was exited
if not used on an avatar, a PhysicsInfluencer is needed

## __Input Car__

- Input Car Steering:
the current steering input from -1 to 1
A and D on desktop
left stick left/right in VR and on Gamepad

- Input Car Accelerate:
the current accelerate input from 0 to 1
W on desktop
right hand trigger in VR
right trigger on Gamepad

- Input Car Brake:
the current brake input from 0 to 1
S on desktop
left hand trigger in VR
left trigger on Gamepad

- Input Car Handbrake:
the current handbrake input from 0 to 1
Space on desktop
pulling the right stick back in VR
south face Button on Gamepad

- Input Car Boost:
the current boost input from 0 to 1
F on desktop
pushing the right stick forward in VR
east face Button on Gamepad

## __Input__

- Input Movement X:
The horizontal movement input -1 to 1

- Input Movement Y:
The vertical movement input -1 to 1

- Input Look X:
The horizontal look input -1 to 1

- Input Look Y:
The vertical look input -1 to 1

- Input Jump:
the current jump input from 0 to 1

## __Seed__

- Seed Owner:
A seed value (huge number) generated from the player wearing the avatar or spawning a prop

- Seed Instance:
A seed value (huge number) generated from the instance id of a spawned prop
