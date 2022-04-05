# CVR Global Material Property Updater
Updates a materials' property for globally. This means it will change the value for every e.g. mesh or component that
uses this material.

### Properties

##### Material
The [Material](https://docs.unity3d.com/ScriptReference/Material.html) to be modified.

##### Property Type
The data type of the property. Changing this, will provide different value fields or the type.

##### Property Name
The variable/property name in the shader.

!!! tip "How to find the name?"
         You can find this value by looking at the shaders code.
         Most shaders have those values at the very top, so it should
         be easy to find, when not having to many shader properties.

##### Value
This is the value that is being applied to the shader.

!!! hint Update rate
         The value is applied on the material whenever it changes.