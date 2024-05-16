# AvatarAPI

The AvatarAPI instance can be accessed via a player
instance ([Base](./player-api-base.md)/[Local](./player-api-local.md)/[Remote](./player-api-remote.md)). They have a
property named `Avatar`.

## **Properties**

- AvatarID
  - `Unique identifier for the avatar. Retrieves the avatar's asset object ID.`
- Height
  - `Returns the height of the avatar.`

## **Methods**

## Humanoid
- IsHuman
  - `Checks if the animator's avatar is humanoid.`
- HasBone(HumanBodyBones humanBone)
  - `Checks if the specified human body bone is present in the avatar.`
- GetBonePosition(HumanBodyBones humanBone)
  - `Gets the world position (Vector3) of a specified bone. Returns nil if missing.`
- GetBoneRotation(HumanBodyBones humanBone)
  - `Gets the world rotation (Quaternion) of a specified bone. Returns nil if missing.`
- GetBonePositionAndRotation(HumanBodyBones humanBone)
  - `Gets the world position and rotation (Tuple(Vector3, Quaternion)) of a specified bone. Returns nil if missing.`

## Parameters
- HasParameter(string parameterName)
  - `Checks if the specified parameter exists in the avatar's animator.`
- GetParameterAsBool(string parameterName)
  - `Retrieves a boolean parameter from the animator. Returns nil if the parameter does not exist.`
- GetParameterAsInt(string parameterName)
  - `Retrieves an integer parameter from the animator. Returns nil if the parameter does not exist.`
- GetParameterAsFloat(string parameterName)
  - `Retrieves a float parameter from the animator. Returns nil if the parameter does not exist.`
- SetParameter(string parameterName, bool parameterValue)
  - `Sets a boolean parameter in the animator.`
- SetParameter(string parameterName, int parameterValue)
  - `Sets an integer parameter in the animator.`
- SetParameter(string parameterName, float parameterValue)
  - `Sets a float parameter in the animator.`
