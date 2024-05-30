# Thumbs Up Launcher

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