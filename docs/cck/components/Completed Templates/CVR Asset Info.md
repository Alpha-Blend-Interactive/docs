# Component Name:

CVR Asset Info

# Description Overview:

Subcomponent attached to CVR Spawnable, CVR Avatar, and CVRWorld that defines the UID that an asset is uploaded as. This allows the user to make updates to a single ID or produce new in-game assets from a single object in the editor.

# Functionality:

__Unique Identifier__

__Re-Attach GUID__ (text)

(when attached) __Detach asset unique identifier__

(when attached) __Copy asset unique identifier__

# Behaviors:

__Unique Identifier__  (text)

- identifier (in text) used to determine the ID the gameobject will be uploaded to/as

__Re-Attach GUID__

- Attaches the ID in the __Unique Identifier__ field to the current gameobject

(when attached) __Detach asset unique identifier__

- Detaches GUID (but leaves last in field) so that it can be changed

(when attached) __Copy asset unique identifier__

- Copies GUID so that it can be used on another asset or stored (for example, 1 asset being uploaded to two accounts)
# Common Usecases

Required for all game asset uploads, modifying the UID field is useful for making experimental versions or uploading directly to another account without remaking an asset from scratch

# Notes

N/A