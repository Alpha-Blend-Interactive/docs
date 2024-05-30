# Teleport from Water

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