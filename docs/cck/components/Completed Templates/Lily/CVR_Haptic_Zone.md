
# Component Name:

CVR Haptic Zone

# Description Overview:

A component that creates and area to interact with the CVR Haptic Area Chest.

# Functionality:

**Trigger Form** (Dropdown)

- Box
	- Sets the trigger to be (Box) shaped.
- Sphere
	- Sets the trigger to be (Sphere) shaped.

**Trigger Center** (Vector3)

- The X, Y, and Z Coordinates that dictate the center of the component.

(Box) **Trigger Bounds** (Vector3)

- The X, Y, and Z values representing the size of the box trigger.

(Sphere) **Trigger Radius** (Float)

- The size of the sphere trigger from the center.

**On Enter** (Bool)

- Enables the trigger to vibrate the haptic vest sections that enter it.

- **Intensity** (Float)
	-  The intensity to vibrate the vest, decays after a short while.

**On Stay** (Bool)

- Enables the trigger to vibrate the haptic vest sections that stay in it.

- **Intensity** (Float)
	- The intensity to vibrate the vest.
- **Timing** (Dropdown)
	- Once
		- Triggers the vest at the intensity and shortly decays in intensity.
	- Continuous
		- Constantly vibrates the vest at the selected intensity.
	- Random
		- Vibrates the vest randomly
		- **Chance** (Float)
			- The chance each tick to vibrate the vest at the selected intensity for a single tick. With 0 being a 0% chance and 1 being a 100% chance.

**On Exit** (Bool)

- Enables the trigger to vibrate the haptic vest sections that exit it.

- **Intensity** (Float)
	- The intensity to vibrate the vest, decays after a short while.



# Common Usecases

Rumbling haptics during explosions. Making you think it's a spider because Khodrin is an actual monster.

# Notes

You can manually place a CVR Haptic Area Chest component within a world to trigger haptics on a person, should their avatar lack the CVR Haptic Area Chest component.