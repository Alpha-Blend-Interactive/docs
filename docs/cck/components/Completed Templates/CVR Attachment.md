
# Component Name:

CVR Attachment

# Description Overview:

A component that allows a user to attach and object to all kinds of things.

# Functionality:

**Attachment Type** (Multi-Select Dropdown)

- Which attachable types the component can attach to.

- Nothing
- Everything
- Bone
	- Attaches to unity humanoid bone references.
- Tracker
	- Attaches to tracking points such as left and right controller.
- Snapping Point
	- Attaches to snapping points.

**Bone Type** (Multi-Select Dropdown)

- Which bones the component can attach to when using the Bone attachment type.

- Nothing
- Everything
- Hips
- Spine
- Chest
- Upper Chest
- Neck
- Head
- Left Upper Leg
- Left Lower Leg
- Left Foot
- Right Upper Leg
- Right Lower Leg
- Right Foot
- Left Shoulder
- Left Arm
- Left Forearm
- Left Hand
- Right Shoulder
- Right Arm
- Right Forearm
- Right Hand
- Root

**Tracker Type** (Multi-Select Dropdown)

- Which tracker the component can attach to when using the Tracker attachment type.

- Nothing
- Everything
- Main Camera
	- The main camera for the game.
- Right Hand
	- The right hand controller.
- Left Hand
	- The left hand controller.
- Additional Tracker
	- Any additional tracker, such as for full-body tracking.

**Snapping Point Types** (Reorderable List)

- Element (String)
	- The name of the snapping point to attach to.

**Use Fixed Position Offset** (Bool)

- Attaches the object to the attachment point at the set of X Y and Z coordinates in the Position Offset section.

**Use Fixed Rotation Offset** (Bool)

- Attaches the object to the attachment point with the set of X Y and Z rotations in the Rotation Offset section.

**Position Offset** (Axis)

- The X Y and Z coordinates for the Use Fixed Position Offset Bool.

**Rotation Offset** (Axis)

- The X Y and Z rotations for the Use Fixed Position Offset Bool.

**Max Attachment Distance** (Float)

- The maximum distance the object can be to attach.

**On Attach()** (Reorderable List)

- When the object attaches to something, activates all method calls locally.

**On Deattach()** (Reorderable List)

- When the object Deattaches from something, activates all method calls locally.

# Common Usecases

To make objects attach to a person, such as a hat.

# Notes

Almost all bones in the Bone Type section are Unity Humanoid Rig only. The main exception being Root, which is available for all rigging types.