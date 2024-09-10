# How to output text into UI

## TextMeshPro (version without canvas)

```lua
UnityEngine = require("UnityEngine")
TextMeshPro = require("TextMeshPro")

function Start()
    -- Bind the gameObject and use GetComponent
    local textGameObject = BoundObjects.textGameObject
    print(textGameObject)
    local textComponentFromGameObject = textGameObject.GetComponent("TMPro.TextMeshPro")
    print(textComponentFromGameObject)

    -- Change text
    textComponentFromGameObject.text = "TextMeshPro - Success"
end
```

## TextMeshPro (version with canvas)

```lua
UnityEngine = require("UnityEngine")
TextMeshPro = require("TextMeshPro")

function Start()
    -- Bind the gameObject and use GetComponent
    local textGameObject = BoundObjects.textGameObject
    print(textGameObject)
    local textComponentFromGameObject = textGameObject.GetComponent("TMPro.TextMeshProUGUI")
    print(textComponentFromGameObject)

    -- Change text
    textComponentFromGameObject.text = "TextMeshProUGUI - Success"
end
```

## Legacy Unity UI Text (not recommended)

```lua
UnityEngine = require("UnityEngine")

function Start()
    -- Bind the gameObject and use GetComponent
    local textGameObject = BoundObjects.textGameObject
    print(textGameObject)
    local textComponentFromGameObject = textGameObject.GetComponent("UnityEngine.UI.Text")
    print(textComponentFromGameObject)

    -- Change text
    textComponentFromGameObject.text = "Text (Legacy) - Success"
end
```
