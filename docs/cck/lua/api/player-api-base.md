# PlayerApiBase

The PlayerApiBase as the name indicates it's the base for all the player instances:

- [LocalPlayerApi](player-api-remote.md)
- [RemotePlayerApi](player-api-remote.md)

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

## **Methods**

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
