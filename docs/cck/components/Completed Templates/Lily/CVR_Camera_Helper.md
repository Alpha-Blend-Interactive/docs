
  
# Component Name:

CVR Camera Helper

# Description Overview:

A component to help take screenshots and add filters to your Unity Camera.

# Functionality:

**Camera Settings** (Collapsible Menu)

 - **Camera** (Scene Reference)
	 - The camera reference for the component.
- **Mirroring Camera** (Bool)
	- Flips the camera output horizontally.

**Shader Settings** (Collapsible Menu)

- **Selected Shader** (Integer)
	- Selects the shader with the same numerical value from the Replacement Shaders list, starting with 0. -1 Selects no shader.
- **Replacement Shaders** (Reorderable, Expandable List.)
	- **Element 0** (Project Files Reference, Shader)
		- Chosen Shaders for Replacing Shaders of objects within the camera's view.

# Common Usecases

Custom cameras and weird effects. Saving a camera's view via screenshot.

# Notes

You can use Animation Events to call Take Screenshot(), which will cause the camera to generate a picture in your ChilloutVR Pictures folder.