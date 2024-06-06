# Lua Behaviour

Accessible via the `Script` [Global](globals.md).

This entity inherits from MonoBehaviour, as such inherits some of its members.

### Properties

| Name                         | Description                                         |
|------------------------------|-----------------------------------------------------|
| `Hash` : string              | SHA512 hash of script text as Base64 string         |
| `TypeLabel` : string         | Returns the script type label                       |
| `ScriptName` : string        | Name of the script asset                            |
| `IsScriptInitialized` : bool | Whether this script instance is initialized or not  |


### Methods

| Method                   | Description                                                                        |
|--------------------------|------------------------------------------------------------------------------------|
| `Crash(string)` : void   | Crashes the script preventing stopping it's execution (the behaviour still exists) |
| `Destroy(string)` : void | Destroys the script, while actually getting rid of the behavior                    |
