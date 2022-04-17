# CVR GI Material Updater

!!! warning "Memory Leak"
    Realtime Global Illumination has a massive memory leak in Unity 2019.4.
    This was fixed in unity version 2019.4.30 and upwards. 
    Consider not using, or enabling the component while the ChilloutVR is still on 2019.4.28.

Calls `UpdateGIMaterials` on the same game objects [Renderer](https://docs.unity3d.com/ScriptReference/Renderer.html), there for requires some sort of [Renderer](https://docs.unity3d.com/ScriptReference/Renderer.html).

This can be used to have realtime global illumination on emissive objects.