# PlayerAPI

- LocalPlayer (This returns a [LocalPlayerApi](player-api-local.md) instance)
  - `Access to Teleport, AddForce, etc.`

- AllPlayers (This returns [PlayerApiBase](player-api-base.md))
  - `List of all Player entities (includes LocalPlayerApi).`

- RemotePlayers (This returns a list of [RemotePlayerApi](player-api-remote.md))
  - `List of all *Remote* Player entities (excludes LocalPlayerApi).`

- PlayerCount
  - `Returns player count (includes local player).`

- FindPlayerByUsername(string username) (This returns an instance of [PlayerApiBase](player-api-base.md))
  - `Returns player entity by username (can find Local player).`

- FindPlayerByUserId(string userId) (This returns an instance of [PlayerApiBase](player-api-base.md))
  - `Returns player entity by id (can find Local Player).`
