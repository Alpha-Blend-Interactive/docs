# Viewpoint Raycaster

This shows how to perform a Raycast. For the example we're using the player's Viewpoint as the source of the ray.

This script is meant to be run on an Avatar and only for the Wearer, it will self-destruct otherwise.

We're setting the Raycast to only hit the Remote Player colliders, and the Water Layer.

The Raycast is only active if you set your Toggle to `1`, you can do this on the Big Menu.


```lua

-- Import necessary UnityEngine components
UnityEngine = require "UnityEngine"
local CVR   = require "CVR"

function Start()
    -- Check if this script is running on an Avatar
    if not RunningInAvatar then 
        -- If not, lets destroy the script to prevent wasting resources
        Script.Destroy("This script is only meant to run on Avatars only!")
        return;
    end

    -- Also check if we're the one wearing the avatar, no point in spamming other people's consoles
    if not IsWornByMe then 
        -- If not, lets destroy the script to prevent wasting resources
        Script.Destroy("This script is only meant to run on for the Avatar Wearer!")
        return;
    end
    
    print("Starting the Viewpoint Raycaster example!")
end

-- The bit32 is exposed without importing. It's useful to calculate bit operations

-- Calculate the layer mask for water
local onlyWaterMask = bit32.lshift(1, CVR.CVRLayers.Water)

-- Calculate the layer mask for the remote players
local onlyRemotePlayerMask = bit32.lshift(1, CVR.CVRLayers.PlayerNetwork)

-- Combine both masks into a single one
local onlyWaterAndRemotePlayerMask = bit32.bor(onlyWaterMask, onlyRemotePlayerMask)

-- Define the maximum distance for the raycast
local maxDistance = 100.0

function Update()

    -- Lets only fire raycasts when the Core parameter toggle is 1
    -- You can set the toggles on the Big Menu
    if PlayerAPI.LocalPlayer.Core.Toggle ~= 1 then return end

    -- Only raycast every 200 frames (let's not create a lot of spam)
    if UnityEngine.Time.frameCount % 200 ~= 0 then return end

    -- Get the position of the local player view point, since that's where we're going to shoot the raycast from
    local origin = PlayerAPI.LocalPlayer.GetViewPointPosition()

    -- Get the local player viewpoint Rotation and convert into a forward direction
    -- We can do this by multiplying the Quaternion with the forward vector
    -- This result in a Vector3 with with the direction of where the player is looking at
    local forward = PlayerAPI.LocalPlayer.GetViewPointRotation() * UnityEngine.Vector3.forward

    -- Shoot a raycast from the playe's view point, that can hit the layers water and remotePlayers, and hits colliders with IsTrigger enabled
    local hit, hitInfo = UnityEngine.Physics.Raycast(origin, forward, maxDistance, onlyWaterAndRemotePlayerMask, UnityEngine.QueryTriggerInteraction.Collide)

    -- Other examples:

    -- Shoot a raycast from the playe's view point, that can hit ONLY the water layers, and hits colliders with IsTrigger enabled
    -- local hit, hitInfo = UnityEngine.Physics.Raycast(origin, forward, maxDistance, onlyWaterMask, UnityEngine.QueryTriggerInteraction.Collide)

    -- Shoot a raycast from the playe's view point, that can hit all layers, and ignores colliders with IsTrigger enabled
    -- local hit, hitInfo = UnityEngine.Physics.Raycast(origin, forward, maxDistance, UnityEngine.Physics.AllLayers, UnityEngine.QueryTriggerInteraction.Ignore)

    print("Shooting the Raycast...")

    -- Check if the raycast hit something
    if hit then

        print("Raycast hit an object!")

        -- Access the hit information
        local hitPoint = hitInfo.point
        local hitNormal = hitInfo.normal
        local hitDistance = hitInfo.distance

        print("Hit point: " .. hitPoint.ToString() .. " | Hit normal: " .. hitNormal.ToString() .. " | Hit distance: " .. hitDistance)

    end
end

```

## Expected output

```
print: Starting the Viewpoint Raycaster example!
print: Shooting the Raycast...
print: Shooting the Raycast...
print: Shooting the Raycast...
print: Raycast hit an object!
print: Hit point: (-1.61, 1.72, 5.73) | Hit normal: (-0.86, 0.00, -0.51) | Hit distance: 1,0413384437561
print: Shooting the Raycast...

```