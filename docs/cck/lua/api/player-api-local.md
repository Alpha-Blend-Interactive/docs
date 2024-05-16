# LocalPlayerApi

### Status
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

### Movement Control
- Respawn()
  - `Respawns the player.`
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

## Inherited from [Player API Instance](./player-api-base.md)

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
