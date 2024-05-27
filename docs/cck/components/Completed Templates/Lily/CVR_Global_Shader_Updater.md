
# Component Name:

CVR Global Shader Updater

# Description Overview:

A component that updates the global shader properties that shaders can use.

# Functionality:

**Update Values** (Bool)

- Enables the component to update the global shader values.

- **CVR_CCK_Global_1** (Vector4)
	- The X, Y, Z, and W values for the global property.
- **CVR_CCK_Global_2** (Vector4)
	- The X, Y, Z, and W values for the global property.
- **CVR_CCK_Global_3** (Vector4)
	- The X, Y, Z, and W values for the global property.
- **CVR_CCK_Global_4** (Vector4)
	- The X, Y, Z, and W values for the global property.

**Update Texture** (Bool)

- Enables the component to update a globally accessible texture.

- **Render Texture** (Project Files Reference, Render Texture)
	- The Render Texture to be made globally available to shaders
- **Property Name** (String)
	- The name to make the Render Texture available to shader globals.

# Common Usecases

Making procedural textures available globally.

# Notes

Technical Component. Me brain hurt. - Lily