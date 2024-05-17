
  
# Component Name:

CVR Audio Driver

# Description Overview:

A component to easily swap the selected sounds in a Unity Audio Source component.

# Functionality:

**Playback** (Collapsible Menu)

- **Play On Switch** (Bool)
	- Causes the audio to automatically start playing when a new audio is selected.
- **Selected Audio Clip** (Integer)
	- An animatable field to select audio from the Audio Clips section. Starts with 0.

**Audio** (Collapsible Menu)

- **Audio Source** (Scene Reference)
	- The audio source for the component to edit during runtime.
- **Audio Clips** (Expandable List)
	- **Element** (Audio Clip Reference)
		- The audio to use for the Audio Driver. Starts with 0 for the first entry.

# Common Usecases

Setting up synced audio without having many audio sources, for example, a soundboard prop.

# Notes

Note: You can also play sounds by invoking Play (Integer) in a unity animation event.