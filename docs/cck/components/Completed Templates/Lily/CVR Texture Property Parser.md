

# Component Name:

CVR Texture Property Parser

# Description Overview:

This component allows you to read pixels from a texture and drive(vroom vroom) numeric properties.

# Functionality:

**Texture Type** (Dropdown)

- Local Texture
	- Sets the component to use a (Local Texture)
- Global Texture
	- Sets the component to use a (Global Texture)

(Local Texture) **Texture** (Project Files Reference, Render Texture)

- Selects the texture to read from.

(Global Texture) **Texture Name** (String)

- The name of a global texture to read from.

**Tasks** (Submenu)

- **X Position** (Integer)
	- The X (Left-Right) position of the pixel to read.
- **Y Position**
	- The Y (Up-Down) position of the pixel to read.
- **Color Channel** (Dropdown)
	- The color channel to read.
- **Min Value** (Float)
- **Max Value** (Float)
	- The Minimum and maximum value to send based on the brightness of the pixel.
- **Target** (Scene Reference, GameObject)
	- The target to populate the component section
- **Component** (Auto-Populated Dropdown)
	- The specific component to get properties from
- **Properties** (Auto-Populated Dropdown)
	- The property to set the resulting value to.

# Common Usecases

Audio Link. Drive GameObject via Shader.

# Notes

{Any useful information not covered in other sections}