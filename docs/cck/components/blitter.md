# CVR Blitter <div class="whitelisted" data-list="W"></div>
Allows the use of Unity's [Graphics.Blit](https://docs.unity3d.com/ScriptReference/Graphics.Blit.html). This component 
recommended for advanced users only.

### Properties

##### Origin Texture
Select a [RenderTexture](https://docs.unity3d.com/Manual/class-RenderTexture.html) that should be used for the input.

##### Destination Texture
Select a [RenderTexture](https://docs.unity3d.com/Manual/class-RenderTexture.html) that should be used for the output.

##### Blit Material
A Material that should be used during the blit process. This will modify the output texture.

##### Clear Every Frame
Enabling this, will clear the [RenderTexture](https://docs.unity3d.com/Manual/class-RenderTexture.html) every frame.