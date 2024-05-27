
# Component Name:

CVR Global Material Property Updater

# Description Overview:

A component that updates material properties across all objects that use that same material.

# Functionality:

**Material** (Project Files Reference, Material)

- The material you wish to change the properties of.

**Property Name** (Auto-Populated Dropdown)

- A selection of all available properties within the material.

**Property Type** (Read-Only Feedback)

- Gives you a readout of what kind of value the selected property is. The available types are (Integer) (Fake Integer (Float)), (Float), and (Vector).

(Integer)  **Property Integer Value** (Integer)

- The integer value of the property.

(Fake Integer (Float)) **Property Fake Integer (Float) Value** (Integer)

- The integer value of the property. Gets written as a float to the material.

(Float) **Property Float Value** (Float)

- The float value of the property.

(Vector) **Property Vector Value** (Vector4)

- The X, Y, Z, and W values of the property, each section is entered as a float.


# Common Usecases

Setting material properties for all objects that use that material in a world. Setting properties on a material that is not used in a classic renderer.

Changing the shininess of the world when it rains for all materials.

# Notes

When using a the property type Vector, it will be shown as a Vector4. This applies even when a property does not use all of the vector fields.

