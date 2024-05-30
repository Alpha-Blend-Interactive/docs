# Disable GO at Home

Disable a GameObject if the current instance is the players home instance.

```lua

-- Start is called before the first frame update
function Start()
    -- Get the bound GameObject
    local targetGameObject = BoundObjects.TargetGameObject
    if not targetGameObject then
        print("Error! Target GameObject not bound.")
        return
    end

    -- Check if the current instance is the home instance
    local isHomeInstance = InstancesAPI.IsHomeInstance

    if isHomeInstance then
        targetGameObject:SetActive(false)
        print("The current instance is the home instance. Disabling the target GameObject.")
    else
        print("The current instance is not the home instance. The target GameObject remains active.")
    end
end

```
