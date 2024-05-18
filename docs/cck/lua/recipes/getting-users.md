# How to get Players in an Instance

## Getting Player Count
```lua
-- Pull get the number of users in an instance
CVR = require "CVR"
... = CVR.PlayersAPI.PlayerCount
-- You can also use:
... = #CVR.PlayersAPI.AllPlayers
```

## Getting All Players
```lua
-- Pull in all the users in an instance, including you.
CVR = require "CVR"
... = CVR.PlayersAPI.AllPlayers
```

## Getting All Remote Players
```lua
-- Pull in all the users in an instance, excluding you.
CVR = require "CVR"
... = CVR.PlayersAPI.RemotePlayers
```

## Local Player
```lua
-- Get just you.
CVR = require "CVR"
... = CVR.PlayersAPI.LocalPlayer
```