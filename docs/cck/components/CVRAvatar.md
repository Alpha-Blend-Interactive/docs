# CVR Avatar <div class="whitelisted" data-list="A"></div>

The CVR Avatar Component is necessary for making an avatar upload. To use this component, the GameObject must have a [Unity Animator component](https://docs.unity3d.com/2021.3/Documentation/Manual/class-Animator.html) and the [CVR Asset Info](CVR Asset Info.md) component. If these two components aren't present when the CVR Avatar component is added, they will be generated automatically.

Additionally, the CVR Avatar component includes an automatic generator for fundamental advanced avatar settings, to aide in rapidly developing animators from scratch.

## Getting Started

write some shit here about new user bullshit
## UI

The CVR Avatar component has 7 sections spanning a variety of customization, setup, and safety settings. Please note that while some fields or list items can be animated, not all of them can.
### General Avatar Settings

!!! hint
	The Voice Parent and View/Voice position Auto buttons are only present if the avatar is configured for Unity's Humanoid Rig. More information on this can be found [here](https://docs.unity3d.com/Manual/UsingHumanoidChars.html)

![](../../assets/images/compdoc/GAS Generic.png) 
![](../../assets/images/compdoc/GAS Humanoid.png)

The General Avatar Settings menu has 3 settings, 2 of which are split into 3 sections for the X, Y, and Z position of the view and audio source. These settings function as follows:

- View Position: The point at which the in-game viewport camera originates. This can be edited from the inspector panel, or by grabbing the move gizmo's handle on the 🟢 (Green ball) in the scene view

- Voice Parent: Selects which bone the voice position rotates and translates with. The available options are Head, Left Hand, Right Hand, and Hips.

- Voice Position: The point at which player voice originates. This can be edited from the inspector panel, or by grabbing the move gizmo's handle on the 🔴 (Red ball) in the scene view
### Avatar Customization
### Eye Look Settings
### Eye Blink Settings
### Lip Sync Settings
### Advanced Tagging
### Advanced Settings
## Examples

Videos needed:
- animating blinking on/off
- nonstandard eye setup
- examples showing in-editor and in-game versions of each AAS item type
- (optionally) setup for eye/face tracking
- basic avatar setup guide
## Notes