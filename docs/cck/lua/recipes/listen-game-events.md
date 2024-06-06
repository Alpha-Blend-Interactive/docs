# Listening to Events

This script will log some of the game events. You can check all available events at [Events](../api/events.md)

This script can be placed on `Worlds`, `Props`, and `Avatars`. But for `Props`, and `Avatars` it will only run for the
avatar wearer, and the prop spawned because of the `if` placed on each function.

The `--#region` and `--#endregion` are not needed, but some code editors might recognize them as blocks that you can
collapse and expand for better organization.

```lua

function Start()
    print("Starting the Listening to Events example script")
end

--#region Instances Events

function OnInstanceConnected()
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("We have Connected to an instance.")
end

function OnInstanceDisconnected()
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("We have Disconnected to an instance.")
end

function OnInstanceConnectionLost()
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("We have Lost Connection to an instance.")
end

function OnInstanceConnectionRecovered()
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("We have Recovered Connection to an instance.")
end

--#endregion

--#region Player Events

function OnPlayerJoined(remotePlayer)
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("A remote player has joined instance: " .. remotePlayer.Username)
end

function OnPlayerLeft(remotePlayer)
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("A remote player has left the Instance: " .. remotePlayer.Username)
end

--#endregion

--#region Avatar Events

function OnLocalPlayerAvatarLoaded(avatar, localPlayer)
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("The local player " .. localPlayer.Username .. " has Loaded INTO the avatar with the ID: " .. avatar.AvatarID)
end

function OnLocalPlayerAvatarClear(avatar, localPlayer)
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("The local player " .. localPlayer.Username .. " has Cleared OUT of the avatar with the ID: " .. avatar.AvatarID)
end

function OnRemotePlayerAvatarLoaded(avatar, remotePlayer)
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("The remote player " .. remotePlayer.Username .. " has Loaded INTO the avatar with the ID: " .. avatar.AvatarID)
end

function OnRemotePlayerAvatarClear(avatar, remotePlayer)
    if (RunningInProp and not IsSpawnedByMe) or (RunningInAvatar and not IsWornByMe) then return end
    print("The remote player " .. remotePlayer.Username .. " has Cleared OUT of the avatar with the ID: " .. avatar.AvatarID)
end

--#endregion

```