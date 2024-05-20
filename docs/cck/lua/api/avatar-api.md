# AvatarAPI

The `AvatarAPI` instance can be accessed via a player instance ([PlayerAPIBase](player-api.md)). They have a property named `Avatar`.

## Static Functions

| Name                                                | Description                                    |
|-----------------------------------------------------|------------------------------------------------|
| `LocalAvatar` <br>(Returns [AvatarAPI](#AvatarAPI)) | Access the Local Player's avatar API reference |

## Avatar Properties

| Property                                       | Description                                                                    |
|------------------------------------------------|--------------------------------------------------------------------------------|
| `AvatarID`                                     | Unique identifier for the avatar. Retrieves the avatar's asset object ID.      |
| `Wearer` <br>(Returns [AvatarAPI](#AvatarAPI)) | Reference to the avatar's wearer Player's [PlayerAPIBase](player-api.md)       |
| `IsLoaded`                                     | Returns whether an avatar is loaded or not.                                    |
| `Height`                                       | Returns the height of the avatar.<br/>Defaults to 1.6m if no avatar is loaded. |
| `IsHuman`                                      | Checks if the animator's avatar is humanoid.                                   |

## Avatar Bones

| Method                                                 | Description                                                                                                    |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `HasBone(HumanBodyBones humanBone)`                    | Checks if the specified human body bone is present in the avatar.                                              |
| `GetBonePosition(HumanBodyBones humanBone)`            | Gets the world position (Vector3) of a specified bone. Returns nil if missing.                                 |
| `GetBoneRotation(HumanBodyBones humanBone)`            | Gets the world rotation (Quaternion) of a specified bone. Returns nil if missing.                              |
| `GetBonePositionAndRotation(HumanBodyBones humanBone)` | Gets the world position and rotation (Tuple(Vector3, Quaternion)) of a specified bone. Returns nil if missing. |

## Animator Parameters

| Method                                                              | Description                                                                                                    |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `HasParameter(string parameterName)`                                | Checks if the specified parameter exists in the avatar's animator.                                             |
| `GetParameterAsBool(string parameterName)`                          | Retrieves a boolean parameter from the animator. Returns nil if the parameter does not exist.                  |
| `GetParameterAsInt(string parameterName)`                           | Retrieves an integer parameter from the animator. Returns nil if the parameter does not exist.                 |
| `GetParameterAsFloat(string parameterName)`                         | Retrieves a float parameter from the animator. Returns nil if the parameter does not exist.                    |
| `SetParameter(string parameterName, bool/float/int parameterValue)` | Sets an animator parameter to a set value.<br/>Internally will cast to the type actually used by the Animator. |