# PlayerAPI

Accessible via the `PlayerAPI` [Global](globals.md). This API provides access to all players in the world, including the local player.

## Static Functions
| Name                                                                                  | Description                                                    |
|---------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `FindPlayerByUsername(string username)` <br>(Returns [PlayerAPIBase](#PlayerAPIBase)) | Returns player entity by username.                             |
| `FindPlayerByUserId(string userId)` <br>(Returns [PlayerAPIBase](#PlayerAPIBase))     | Returns player entity by user id.                              |
| `IsFriendsWith(string userId)` <br>(Returns `bool`)                                   | Returns whether we're friends with the userId provided or not. |

## Static Properties
| Name                                                                        | Description                                                     |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------|
| `LocalPlayer` <br>(Returns [LocalPlayerAPI](#LocalPlayerAPI))               | Access to Teleport, AddForce, etc.                              |
| `AllPlayers` <br>(Returns [PlayerAPIBase](#PlayerAPIBase))                  | List of all Player entities (includes LocalPlayerAPI).          |
| `RemotePlayers` <br>(Returns a list of [RemotePlayerAPI](#RemotePlayerAPI)) | List of all *Remote* Player entities (excludes LocalPlayerAPI). |
| `PlayerCount`                                                               | Total connected player count. This includes the local player.   |

## PlayerAPIBase

Functions and properties accessible from both local and remote player objects.

### Properties
| Name                                                  | Description                                                            |
|-------------------------------------------------------|------------------------------------------------------------------------|
| `IsLocal`                                             | Indicates if this is the local player. Always true for LocalPlayerAPI. |
| `IsRemote`                                            | Indicates if this is a remote player. Always true for RemotePlayerAPI. |
| `Username`                                            | Username of the player.                                                |
| `UserID`                                              | Unique identifier for the player.                                      |
| `Avatar` <br>(Returns [Avatar](avatar-api.md#avatar)) | Get the player's Avatar Instance.                                      |

### Core Parameters

These parameters are set by ChilloutVR to drive the player's avatar animations. They may not be representative of the actual player's input in some situations.

| Name                    | Description                                                                                                       |
|-------------------------|-------------------------------------------------------------------------------------------------------------------|
| `Core.MovementX`        | Horizontal movement input value.<br/>Ranges from -1.0 to 1.0.                                                     |
| `Core.MovementY`        | Vertical movement input value.<br/>Ranges from -1.0 to 1.0.                                                       |
| `Core.GestureLeft`*     | Current gesture state of the left hand.<br/>Ranges from -1.0 to 6.0 with 0.0 to 1.0 as fist weight.               |
| `Core.GestureLeftIdx`*  | Current gesture without the analog fist weight.                                                                   |
| `Core.GestureRight`*    | Current gesture state of the right hand.<br/>Ranges from -1.0 to 6.0 with 0.0 to 1.0 as fist weight.              |
| `Core.GestureRightIdx`* | Current gesture without the analog fist weight.                                                                   |
| `Core.Crouching`        | Indicates if the player is crouching.                                                                             |
| `Core.Prone`            | Indicates if the player is prone.                                                                                 |
| `Core.Flying`           | Indicates if the player is flying.                                                                                |
| `Core.Sitting`          | Indicates if the player is sitting.                                                                               |
| `Core.Swimming`         | Indicates if the player is swimming.                                                                              |
| `Core.Grounded`         | Indicates if the player is on the ground.                                                                         |
| `Core.Toggle`           | Currently selected toggle state.<br/>Ranges from 0 to 8.                                                          |
| `Core.Emote`            | Target emote for the player to play.<br/>Ranges from 0 to 8 and returns to 0 within 0.1s of being set.            |
| `Core.CancelEmote`      | Trigger to cancel the current emote.<br/>True when in a state where an emote should not play.                     |
| `Core.VisemeIdx`**      | Index value representing the current viseme.<br/>Ranges from 0 to 14.                                             |
| `Core.VisemeLoudness`   | Loudness level for the current viseme.<br/>Ranges from 0.0 to 1.0.                                                |
| `Core.DistanceTo`       | Distance to the local player in meters.<br/>Always 0.0 for the local player. Defaults to -1.0 until first update. |

#### Gesture Values *

The gesture values are mapped as follows:

- `-1`: Open
- `0`: Idle
- `1`: Fist
- `2`: Thumbs Up
- `3`: Handgun
- `4`: Finger Point
- `5`: Peace
- `6`: RockNRoll

#### Viseme Index Values **

The viseme index values are mapped as follows:

- `0`: Sil
- `1`: PP
- `2`: FF
- `3`: TH
- `4`: DD
- `5`: KK
- `6`: CH
- `7`: SS
- `8`: NN
- `9`: RR
- `10`: AA
- `11`: E
- `12`: I
- `13`: O
- `14`: U

### Position and Orientation

| Name                         | Description                                    |
|------------------------------|------------------------------------------------|
| `GetPosition() : Vector3`    | Current position of the player in world space. |
| `GetRotation() : Quaternion` | Current rotation of the player in world space. |
| `GetForward(): Vector3`      | The forward direction vector of the player.    |

### View and Voice Points

| Name                                   | Description                               |
|----------------------------------------|-------------------------------------------|
| `GetViewPointPosition() : Vector3`     | Position of the viewpoint in the world.   |
| `GetViewPointRotation() : Quaternion`  | Rotation of the viewpoint in the world.   |
| `GetVoicePointPosition() : Vector3`    | Position of the voice point in the world. |
| `GetVoicePointRotation() : Quaternion` | Rotation of the voice point in the world. |

### Gravity

| Name                              | Description                                    |
|-----------------------------------|------------------------------------------------|
| `GetGravity() : Vector3`          | Current gravity vector affecting the player.   |
| `GetGravityDirection() : Vector3` | Direction of the gravity affecting the player. |

## RemotePlayerAPI

Functions and properties specific to remote players.

### Properties

| Name                          | Description                                                |
|-------------------------------|------------------------------------------------------------|
| `NameplatePosition : Vector3` | Position of the remote player's nameplate in the world.    |
| `IsNameplateActive : bool`    | Indicates whether the nameplate is active or not.          |

## LocalPlayerAPI

Functions and properties specific to the local player.

### Properties

| Name                        | Description                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------|
| `IsAuthenticated : bool`    | Indicates if the player is authenticated.                                                            |
| `ImmersionDepth : bool`     | How deeply the player is immersed in water. <br> Ranges from 0 (not immersed) to 1 (fully immersed). |
| `IsImmobilized : bool`      | Indicates if the player is immobilized.                                                              |
| `IsFlying : bool`           | Indicates if the player is flying or not.                                                            |
| `IsFlyingWithNoClip : bool` | Indicates if the player is flying with no clip mode enabled.                                         |
| `IsFlightAllowed : bool`    | Indicates if flying is allowed in the current world.                                                 |

### Movement

| Name                                                                                                   | Description                                                                                 |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| `Respawn()`                                                                                            | Respawns the player.                                                                        |
| `SetFlight(bool flightEnable, bool noClipEnabled)`                                                     | Sets flight and no clip modes for the player.                                               |
| `SetImmobilized(bool isImmobilized)`                                                                   | Sets the immobilization status of the player.                                               |
| `AddForce(Vector3 force, ForceMode forceMode)`                                                         | Applies a force to the player.                                                              |
| `LaunchCharacter(Vector3 launchVelocity, bool overrideVerticalVelocity, bool overrideLateralVelocity)` | Launches the player with a specific velocity.                                               |
| `ResetAllForces()`                                                                                     | Resets all forces currently applied to the player.                                          |
| `PauseGroundConstraint()`                                                                              | Temporarily disables ground constraints, allowing the player to freely move off the ground. |
| `GetControllerVelocity() : Vector3`                                                                    | Gets the current Player Controller velocity.                                                |
| `SetControllerVelocity(Vector3)`                                                                       | Sets the current Player Controller velocity.                                                |

### Position and Orientation

| Name                                | Description                                                                                                                                                                                      |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SetPosition(Vector3 targetPos)`    | Set current position of the player in world space without interpolation, nor grounding the player, nor preserving velocity. For more versatility use the [Teleportation methods](#teleportation) |
| `SetRotation(Quaternion targetRot)` | Set current rotation of the player in world space without interpolation, nor grounding the player, nor preserving velocity. For more versatility use the [Teleportation methods](#teleportation) |

### Teleportation

| Name                                                                                                                              | Description                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `TeleportPlayerTo(Vector3 targetPos, bool interpolate, bool updateGround, bool preserveVelocity, Quaternion? rotationDifference)` | Teleports the player to a specified position with optional rotation difference. |
| `TeleportPlayerTo(Vector3 targetPos, Vector3 targetEulerRot, bool interpolate, bool updateGround, bool preserveVelocity)`         | Teleports the player to a specified position and rotation.                      |
| `TeleportPlayerTo(Vector3 targetPos, Quaternion targetRot, bool interpolate, bool updateGround, bool preserveVelocity)`           | Teleports the player to a specified position and rotation.                      |
| `TeleportPlayerTo(Transform targetTransform, bool interpolate, bool updateGround, bool preserveVelocity)`                         | Teleports the player to a specified transform, orienting the player with it.    |

### Avatar Management

| Name                            | Description                                                                         |
|---------------------------------|-------------------------------------------------------------------------------------|
| `SwitchAvatar(string avatarId)` | Switches the player's avatar. <br>Limited to once every 3 seconds (global timeout). |

## Examples

#### Example 1
Launch the local player upward when both hands are doing a thumbs up gesture.

```lua

UnityEngine = require("UnityEngine")

-- Function to check if both hands of a player are doing a thumbs up gesture
local function isPlayerDoubleThumbsUp(player)
    return player.Core.GestureLeftIdx == 2 and player.Core.GestureRightIdx == 2
end

-- Update is called once per frame
function Update()
    local localPlayer = PlayerAPI.LocalPlayer -- Get the local player
    
    if localPlayer and isPlayerDoubleThumbsUp(localPlayer) then
        local upwardForce = UnityEngine.NewVector3(0, 1000, 0) -- Create an upward force vector
        localPlayer:AddForce(upwardForce, UnityEngine.ForceMode.Impulse)
        print("Dual thumbs up detected! Launching local player upward.")
    end
end

```

#### Example 2
Teleport the local player to a specific position when they are fully immersed in water.

```lua
UnityEngine = require("UnityEngine")

local function isPlayerFullyImmersed(player)
    return player.ImmersionDepth == 1
end

-- Update is called once per frame
function Update()
    local localPlayer = PlayerAPI.LocalPlayer -- Get the local player
    
    if localPlayer and isPlayerFullyImmersed(localPlayer) then
        local targetPosition = UnityEngine.NewVector3(0, 10, 0) -- Teleport to position (0, 10, 0)
        localPlayer:TeleportPlayerTo(targetPosition, false, true, false)
        print("Player fully immersed in water. Teleporting to (0, 10, 0).")
    end
end
```