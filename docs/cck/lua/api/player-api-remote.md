# RemotePlayerAPI

### Nameplate
- NameplatePosition
  - `Position of the remote player's nameplate in the world.`
- IsNameplateActive
  - `Indicates whether the nameplate is active or not.`


## Inherited from [Player API Instance](./player-api-base.md)

### Identity
- IsLocal
  - `Indicates if this is the local player. Always true for LocalPlayerAPI.`
- IsRemote
  - `Indicates if this is the remote player. Always true for RemotePlayerAPI.`
- Username
  - `Username of the remote player.`
- UserID
  - `Unique identifier for the remote player.`
- Avatar (Returns AvatarAPI)
  - `Get the player's Avatar API`

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

