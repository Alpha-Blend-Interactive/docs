# Lua Behaviour

Accessible via the `Script` [Global](globals.md).

This entity inherits from MonoBehaviour, as such inherits some of its members.

### Properties

| Name                         | Description                                        |
|------------------------------|----------------------------------------------------|
| `Hash` : string              | SHA512 hash of script text as Base64 string        |
| `TypeLabel` : string         | Returns the script type label                      |
| `ScriptName` : string        | Name of the script asset                           |
| `IsScriptInitialized` : bool | Whether this script instance is initialized or not |

### Methods

| Method                                                              | Description                                                                                                                                                                                                                                                                             |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Crash(string)` : void                                              | Crashes the script preventing stopping it's execution (the behaviour still exists)                                                                                                                                                                                                      |
| `Destroy(string)` : void                                            | Destroys the script, while actually getting rid of the behavior                                                                                                                                                                                                                         |
| `CallGlobalFunction(string name, arg1, arg2, ...) : value\|nil`<br> | Call a global function on the LuaBehaviour with the name provided. You can send as many arguments as you want (or even none).<br>This can used to call global functions on other scripts<br>Note: If you don't want other scripts from calling your script's functions, make them Local |
| `GetGlobalBoolean(string name) : boolean\|nil`                      | Get the given global boolean variable, or nil if it doesn't exist.                                                                                                                                                                                                                      |
| `GetGlobalNumber(string name) : number\|nil`                        | Get the given global number variable, or nil if it doesn't exist.                                                                                                                                                                                                                       |
| `GetGlobalString(string name) : string\|nil`                        | Get the given global string variable, or nil if it doesn't exist.                                                                                                                                                                                                                       |
| `GetGlobalTable(string name) : Table\|nil`                          | Get the given global table variable, or nil if it doesn't exist.                                                                                                                                                                                                                        |
| `GetGlobals() : Table`                                              | Get a table of all the globals in the script.                                                                                                                                                                                                                                           |
