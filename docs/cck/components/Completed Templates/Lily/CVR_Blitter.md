


# Component Name:

CVR Blitter

# Description Overview:

A component that can combine a Render Texture with a Material, and outputs it to another Render Texture.

# Functionality:

**Script** (Read-Only Script Type)

- The indicator of what script this is.

**Origin Texture** (Project Files Reference, Render Texture)

- The source texture for the component.

**Destination Texture** (Project Files Reference, Render Texture)

- The texture to output to.

**Blit Material** (Project Files Reference, Material)

- The material to combine with the Origin Texture before sending to the Destination Texture.

**Clear Every Frame** (Bool)

- Clears the destination texture by filling it with Color.clear.



# Common Usecases

Saving a camera preview into another render texture. Apply a camera filter for a still.

# Notes

Documentation note: Khodrin said this will get something later, will need to revisit. - Lily