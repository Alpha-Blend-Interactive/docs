
# Component Name:

CVR Mirror

# Description Overview:

A component that pairs with the Mirror Material to control the reflection and resolution of the mirror.

# Functionality:

**General Settings** (Collapsible Menu)

- **Disable Pixel Lights** (Bool)
	- Disables Pixel Lighting in the mirror. (https://docs.unity3d.com/550/Documentation/Manual/LightPerformance.html)
- **Texture Size** (Float)
	- Controls the resolution scale of the mirror.
- **Reflect Layers** (Dropdown)
	- Controls what layers are visible in the mirror. (This dropdown is built based on the layers in your unity project, which is why I'm not listing them. We can list them once we get to documentation. - Lily)

- **Advanced Settings** (Collapsible Menu)

- **Clear Flags** (Dropdown)
	- Skybox
		- Uses the Skybox as the background, and adds a new section for a Custom (Skybox).
	- Color
		- Uses a simple color as the background, and adds a new section for a (Color).

(Skybox) **Custom Skybox** (Material)

- Overrides the skybox used in the mirror when using the Skybox clear flag. Leave blank to use the skybox in the world.

(Color) **Custom Color** (Color Selector)

- Sets the color of the background for the mirror when using the Color clear flag.

**Clip Plane Offset** (Float)

- Sets the clipping plane for the mirror.

**Frames Needed To Update** (Float)

- Sets the number frames before the mirror will update.

# Common Usecases

Putting mirrors in your world, along with toggles to change how they render.

# Notes

Mirrors can be in "legacy mode", this can be fixed with a simple button press near the top of the component.