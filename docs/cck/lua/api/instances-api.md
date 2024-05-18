# InstancesAPI

Accessible via the `InstancesAPI` [Global](globals.md). This API provides access to information about the currently connected instance.

## Static Properties

| Name            | Description                                                                                                            |
|-----------------|------------------------------------------------------------------------------------------------------------------------|
| `Ping`          | Ping to Game Server.                                                                                                   |
| `IsConnected`   | Is the local player connected to the Game Server.                                                                      |
| `IsHomeInstance`| Is the current instance the local player's home world instance.                                                        |
| `InstanceID`     | Current instance id.                                                                                                   |
| `InstanceName`   | Current instance name. <br>(Display Name + ID)                                                                         |
| `InstancePrivacy`| Current instance privacy as string. <br>(Public, FriendsOfFriends, Friends, Group, EveryoneCanInvite, OwnerMustInvite) |

## Examples

Disable a GameObject if the current instance is the players home instance.

```lua

-- Start is called before the first frame update
function Start()
    -- Get the bound GameObject
    local targetGameObject = BoundObjects.TargetGameObject
    if not targetGameObject then
        print("Error! Target GameObject not bound.")
        return
    end

    -- Check if the current instance is the home instance
    local isHomeInstance = InstancesAPI.IsHomeInstance

    if isHomeInstance then
        targetGameObject:SetActive(false)
        print("The current instance is the home instance. Disabling the target GameObject.")
    else
        print("The current instance is not the home instance. The target GameObject remains active.")
    end
end

```