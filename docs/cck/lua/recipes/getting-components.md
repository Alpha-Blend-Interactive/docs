# Getting Components

This script demonstrates how to use various methods to access components.

It showcases the different approaches for retrieving components attached to a GameObject or its children/parents.

Some methods have an optional parameter to dictate whether to include disabled Components or not. If not provided, it 
will **ignore disabled** Components by default. The components are:

- GetComponentInChildren
- GetComponentInParent
- GetComponentsInChildren
- GetComponentsInParent

**Note:** These methods can be expensive performance wise, use with caution.

```lua
UnityEngine = require "UnityEngine"

function Start()

    -- Define the source as the current GameObject
    -- You can also use 'transform' as the source since both GameObjects and Components share the same methods
    local source = gameObject;
    -- local source = transform;

    -- Example 1: GetComponent
    -- Attempts to retrieve the Transform component attached to the current GameObject
    local transformComponent = source.GetComponent("UnityEngine.Transform")
    print("component.GetComponent(\"UnityEngine.Transform\"): ", transformComponent, ", IsNull: ", transformComponent == nil)

    -- Example 2: GetComponentInChildren
    -- Attempts to retrieve the Transform component from the current GameObject or any of its children
    transformComponent = source.GetComponentInChildren("UnityEngine.Transform")
    print("component.GetComponentInChildren(\"UnityEngine.Transform\"): ", transformComponent, ", IsNull: ", transformComponent == nil)

    -- Example 3: GetComponentInChildren (include inactive children)
    -- Attempts to retrieve the Transform component from the current GameObject or any of its children, including inactive ones
    transformComponent = source.GetComponentInChildren("UnityEngine.Transform", true)
    print("component.GetComponentInChildren(\"UnityEngine.Transform\", true): ", transformComponent, ", IsNull: ", transformComponent == nil)

    -- Example 4: GetComponentInParent
    -- Attempts to retrieve the Transform component from the current GameObject or any of its parents
    transformComponent = source.GetComponentInParent("UnityEngine.Transform")
    print("component.GetComponentInParent(\"UnityEngine.Transform\"): ", transformComponent, ", IsNull: ", transformComponent == nil)

    -- Example 5: GetComponents
    -- Retrieves all Transform components attached to the current GameObject
    local transformComponents = source.GetComponents("UnityEngine.Transform")
    print("source.GetComponents(\"UnityEngine.Transform\"): ", transformComponents, ", IsNull: ", transformComponents == nil, ", Count: ", #transformComponents)
    for index, idxTransform in ipairs(transformComponents) do
        print(string.format(" - Entry %d: Transform: %s, IsNull: %s", index, tostring(idxTransform), tostring(idxTransform == nil)))
    end

    -- Example 6: GetComponentsInChildren
    -- Retrieves all Transform components from the current GameObject and its children
    transformComponents = source.GetComponentsInChildren("UnityEngine.Transform")
    print("source.GetComponentsInChildren(\"UnityEngine.Transform\"): ", transformComponents, ", IsNull: ", transformComponents == nil, ", Count: ", #transformComponents)
    for index, idxTransform in ipairs(transformComponents) do
        print(string.format(" - Entry %d: Transform: %s, IsNull: %s", index, tostring(idxTransform), tostring(idxTransform == nil)))
    end

    -- Example 7: GetComponentsInParent
    -- Retrieves all Transform components from the current GameObject and its parents
    transformComponents = source.GetComponentsInParent("UnityEngine.Transform")
    print("source.GetComponentsInParent(\"UnityEngine.Transform\"): ", transformComponents, ", IsNull: ", transformComponents == nil, ", Count: ", #transformComponents)
    for index, idxTransform in ipairs(transformComponents) do
        print(string.format(" - Entry %d: Transform: %s, IsNull: %s", index, tostring(idxTransform), tostring(idxTransform == nil)))
    end

    -- Example 8: TryGetComponent
    -- Safely attempts to retrieve the Transform component and checks if it was successful
    local hasTransform
    hasTransform, transformComponent = source.TryGetComponent("UnityEngine.Transform")
    print("source.TryGetComponent(\"UnityEngine.Transform\"): ", transformComponent, ", IsNull: ", transformComponent == nil, ", hasComponent: ", hasTransform)
end
```