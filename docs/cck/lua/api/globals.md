# Globals

Here you have properties and functions available to every script.

## Modules
- require()
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
- [PlayerAPI](./player-api.md)
  - `Access to the PlayerAPI.`
  - **Example:** `PlayerAPI.LocalPlayer.Respawn()`
- [InstancesAPI](instances-api.md)
  - `Access to the InstancesAPI.`
  - **Example:** `print(InstancesAPI.Ping)`
