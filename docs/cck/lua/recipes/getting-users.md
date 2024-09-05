# How to get Players in an Instance

## Getting Player Count
```lua
-- Pull get the number of users in an instance
... = PlayerAPI.PlayerCount
-- You can also use:
... = #PlayerAPI.AllPlayers
```

## Getting All Players
```lua
-- Pull in all the users in an instance, including you.
... = PlayerAPI.AllPlayers
```

## Getting All Remote Players
```lua
-- Pull in all the users in an instance, excluding you.
... = PlayerAPI.RemotePlayers
```

## Local Player
```lua
-- Get just you.
... = PlayerAPI.LocalPlayer
```