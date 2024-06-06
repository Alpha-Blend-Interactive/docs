# AvatarAPI

Accessible via the `AvatarAPI` [Global](globals.md). This API provides access to the Local [Avatar](#avatar)

## Static Functions

| Name                                                   | Description                                         |
|--------------------------------------------------------|-----------------------------------------------------|
| `LocalAvatar : Avatar` <br>(Returns [Avatar](#avatar)) | Access the Local Player's Avatar instance reference |

## Avatar

The `Avatar` instances can be accessed via:
- The `AvatarAPI.LocalAvatar` [Global](globals.md)
- The player instance ([Player](player-api.md)). They have a property named `Avatar`

### Properties

| Property                                          | Description                                                               |
|---------------------------------------------------|---------------------------------------------------------------------------|
| `AvatarID : string`                               | Unique identifier for the avatar. Retrieves the avatar's asset object ID. |
| `Wearer : Avatar` <br>(Returns [Avatar](#avatar)) | Reference to the avatar's wearer Player's [Player](player-api.md)         |
| `IsLoaded : bool`                                 | Returns whether an avatar is loaded or not.                               |
| `IsHuman : bool`                                  | Checks if the animator's avatar is humanoid.                              |

### Methods

| Method                       | Description                                                                                     |
|------------------------------|-------------------------------------------------------------------------------------------------|
| `GetHeight() : float`        | Returns the height of the avatar.<br/>Returns the viewpoint height if the avatar is not loaded. |
| `GetInitialHeight() : float` | Returns the initial height of the avatar.<br/>Defaults to 1.6m if no avatar is loaded.          |

### Avatar Bones

| Method                                                                       | Description                                                                                                    |
|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `HasBone(HumanBodyBones humanBone) : bool`                                   | Checks if the specified human body bone is present in the avatar.                                              |
| `GetBonePosition(HumanBodyBones humanBone) : Vector3`                        | Gets the world position (Vector3) of a specified bone. Returns nil if missing.                                 |
| `GetBoneRotation(HumanBodyBones humanBone) : Quaternion`                     | Gets the world rotation (Quaternion) of a specified bone. Returns nil if missing.                              |
| `GetBonePositionAndRotation(HumanBodyBones humanBone) : Vector3, Quaternion` | Gets the world position and rotation (Tuple(Vector3, Quaternion)) of a specified bone. Returns nil if missing. |
| `GetBoneTransform(HumanBodyBones humanBone) : Transform`                     | Gets the transform of a specified bone. Returns nil if missing.                                                |

### Animator Parameters

| Method                                                                     | Description                                                                                                    |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `HasParameter(string parameterName) : bool`                                | Checks if the specified parameter exists in the avatar's animator.                                             |
| `GetParameterAsBool(string parameterName) : bool`                          | Retrieves a boolean parameter from the animator. Returns nil if the parameter does not exist.                  |
| `GetParameterAsInt(string parameterName) : int`                            | Retrieves an integer parameter from the animator. Returns nil if the parameter does not exist.                 |
| `GetParameterAsFloat(string parameterName) : float`                        | Retrieves a float parameter from the animator. Returns nil if the parameter does not exist.                    |
| `SetParameter(string parameterName, bool/float/int parameterValue) : void` | Sets an animator parameter to a set value.<br/>Internally will cast to the type actually used by the Animator. |