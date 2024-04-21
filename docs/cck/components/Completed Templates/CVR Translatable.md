# Component Name:

CVR Translatable

# Description Overview:

Component used for providing linguistic translations for text fields, Audio Clips, or whole Game Objects

# Functionality:

__Type__

- Audio Clip
- Text
- Game Object

__Component__

__Fallback Language__

- Dropdown

__Translations__ (reorderable list)

- Audio Clip
	- Language
	- Audio Clip
- Text
	- Language
	- Text
- Game Object
	- Language
	- Game Object

# Behaviors:

__Type__

- Audio Clip
	- For spoken audio
- Text
	- Uses a unity text object
- Game Object
	- Uses a unity game object

__Component__

- Only visible for Audio Clip and Text, Modifies the selected component with the contents of the Translations reorderable list

__Fallback Language__

- Only supports English currently

__Translations__

- Audio Clip
	- Language
		- available languages can be found [[Translatable Supported Languages |Here]]
	- Audio Clip
		- Audio clip that plays a dubbing in the selected language
- Text
	- Language
		- available languages can be found [[Translatable Supported Languages |Here]]
	- Text
		- Text to be dynamically replaced in the selected Unity Text Component
- Game Object
	- Language
		- available languages can be found [[Translatable Supported Languages |Here]]
	- Game Object
		- talk to khodrin, pretty sure it's only for tooltips -PY

# Common Usecases

Dynamically replaces tooltips, text fields, and audio samples in various languages

# Notes

Currently requires a language setting that is hidden from users