# CVR Global Shader Updater
This component can be used to define global [Shader](https://docs.unity3d.com/Manual/Shaders.html) properties.
This means shaders can access those global variables, and you can also update those variables on runtime by e.g, an animation.

### Properties

##### CVR_CCK_Global_1-4
You have four different variables, each being a [Vector3](https://docs.unity3d.com/ScriptReference/Vector3.html).
The name those variables have is `CVR_CCK_Global_` + `number` of the variable. You can identify your variable number,
by looking at the variable name.