## Lua Script Globals

```
## Modules
- require
  - `Adding modules to be available to Lua script.`
  - Available Modules:
    - `System`
    - `UnityEngine`
    - `UnityEngine.AI`
    - `UnityEngine.UI`
    - `CVR`
    - `CVR.Network`
    - `CVR.CCK`
    - `TextMeshPro`
    - `RCC`
  - **Example:** `UnityEngine = require("UnityEngine")`

## Monobehaviour
- name
  - `Access to the attached gameobject name.`
- gameObject
  - `Access to the attached gameobject.`
- transform
  - `Access to the attached transform.`

## Luabehaviour
- Hash
  - `SHA512 hash of script text as Base64 string.`

- RunningOnServer
  - `True when running on server.`
- RunningOnClient
  - `True when running on client.`

- RunningInAvatar
  - `True when running on an avatar.`
- RunningInProp
  - `True when running on a prop.`
- RunningInWorld
  - `True when running in a world.`

- IsLocal
  - `Defined when running on an Avatar. True for the wearer. False for others.`
- IsSpawnedByMe
  - `Defined when running on a Prop. True for the spawner. False for others.`

- BoundObjects
  - `Access to the Bound Objects assigned on the CVRLuaClientBehaviour script in editor.`
  - **Example:** `local cube = BoundObjects.Cube` with "Cube" being the name assigned to that bound object in-editor.

## API Access
- PlayerAPI
  - `Access to the PlayerAPI.`
  - **Example:** `PlayerAPI.LocalPlayer.Respawn()`
- InstancesAPI
  - `Access to the InstancesAPI.`
  - **Example:** `print(InstancesAPI.Ping)`
```

## Lua API Reference

### InstancesAPI (Global)

```
## **Properties**

### Status
- Ping
  - `Ping to Game Server.`
- IsConnected
  - `Is the local player connected to the Game Server.`
- IsHomeInstance
  - `Is the current instance the local player's home world instance.`

### Instance Info
- InstanceID
  - `Current instance id.`
- InstanceName
  - `Current instance name (Display Name + ID).`
- InstancePrivacy
  - `Current instance privacy (Public, FriendsOfFriends, Friends, Group, EveryoneCanInvite, OwnerMustInvite).`
```

### PlayerAPI (Global)

```
## **Properties**

- LocalPlayer (This returns LocalPlayerApi)
  - `Access to Teleport, AddForce, etc.`

- AllPlayers (This returns PlayerApiBase)
  - `List of all Player entities (includes LocalPlayerApi).`

- RemotePlayers (This returns RemotePlayerApi)
  - `List of all *Remote* Player entities (excludes LocalPlayerApi).`

- PlayerCount
  - `Returns player count (includes local player).`

- FindPlayerByUsername(string username) (This returns PlayerApiBase)
  - `Returns player entity by username (can find Local player).`

- FindPlayerByUserId(string userId) (This returns PlayerApiBase)
  - `Returns player entity by id (can find Local Player).`
```

**PlayerApiBase** (Base of LocalPlayerApi & RemotePlayerApi)

```
## **Properties**

### Identity
- IsLocal
  - `Indicates if this is the local player. Always true for LocalPlayerApi.`
- IsRemote
  - `Indicates if this is the remote player. Always true for RemotePlayerApi.`
- Username
  - `Username of the remote player.`
- UserID
  - `Unique identifier for the remote player.`
- Avatar (Returns AvatarApi)
  - `Get the player's Avatar Api`

### Position and Orientation
- GetPosition()
  - `Current position of the remote player in world space.`
- GetRotation()
  - `Current rotation of the remote player in world space.`
- GetForward()
  - `The forward direction vector of the remote player.`

### View and Voice Points
- GetViewPointPosition()
  - `Position of the viewpoint in the world.`
- GetViewPointRotation()
  - `Rotation of the viewpoint in the world.`
- GetVoicePointPosition()
  - `Position of the voice point in the world.`
- GetVoicePointRotation()
  - `Rotation of the voice point in the world.`

### Gravity
- GetGravity()
  - `Current gravity vector affecting the remote player.`
- GetGravityDirection()
  - `Direction of the gravity affecting the remote player.`

### Core Parameters
- Core.MovementX
- Core.MovementY
- Core.GestureLeft
- Core.GestureLeftIdx
- Core.GestureRight
- Core.GestureRightIdx
- Core.Grounded
- Core.Crouching
- Core.Toggle
- Core.Prone
- Core.Emote
- Core.Flying
- Core.CancelEmote
- Core.Sitting
- Core.DistanceTo
- Core.Swimming
- Core.VisemeIdx
- Core.VisemeLoudness
```

**LocalPlayerApi** (Inherits PlayerApiBase)

```
## **Properties**

## Status
- IsAuthenticated
  - `Indicates if the player is authenticated.`
- ImmersionDepth
  - `How deeply the player is immersed in water, from 0 (not immersed) to 1 (fully immersed).`
- IsImmobilized
  - `Indicates if the player is immobilized.`
- IsFlyingWithNoClip
  - `Indicates if the player is flying with no clip mode enabled.`
- IsFlightAllowed
  - `Indicates if flying is allowed in the current world.`

## **Methods**

### Movement Control
- Respawn()
  - `Respawns the player.
- SetFlight(bool flightEnable, bool noClipEnabled)
  - `Sets flight and no clip modes for the player.`
- SetImmobilized(bool isImmobilized)
  - `Sets the immobilization status of the player.`
- AddForce(Vector3 force, ForceMode forceMode)
  - `Applies a force to the player.`
- LaunchCharacter(Vector3 launchVelocity, bool overrideVerticalVelocity, bool overrideLateralVelocity)
  - `Launches the player with a specific velocity.`
- ResetAllForces()
  - `Resets all forces currently applied to the player.`
- PauseGroundConstraint()
  - `Temporarily disables ground constraints, allowing the player to freely move off the ground.`

### Teleportation
- TeleportPlayerTo(Vector3 targetPos, bool interpolate, bool updateGround, bool preserveVelocity, Quaternion? rotationDifference)
  - `Teleports the player to a specified position with optional rotation difference.`
- TeleportPlayerTo(Vector3 targetPos, Vector3 targetEulerRot, bool interpolate, bool updateGround, bool preserveVelocity)
  - `Teleports the player to a specified position and rotation.`
- TeleportPlayerTo(Transform targetTransform, bool interpolate, bool updateGround, bool preserveVelocity)
  - `Teleports the player to a specified transform, orienting the player with it.`

### Avatar Management
- SwitchAvatar(string avatarId)
  - `Switches the player's avatar. AvatarSwitch Cooldown applies (3s).`
```

**RemotePlayerApi** (Inherits PlayerApiBase)

```
## **Properties**
- NameplatePosition
  - `Position of the remote player's nameplate in the world.`
- IsNameplateActive
  - `Indicates whether the nameplate is active or not.`
```

**AvatarApi** (Get from PlayerApiBase.Avatar)

```
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
```