# Component Name:

FPR Exclusion

# Description Overview:

(tentatively) subcomponent of CVR Avatar that allows you to exclude meshes or transforms from the first person render view

# Functionality:

__Is Shown__

__Target__
- Unlabeled Mode Dropdown
	- Cut: completely removes selected transforms from render
	- Shrink: scales transforms to 0, doesn't create a hole in the mesh from player viewpoint
__Influenced Transforms__

  
# Behaviors:

__Is Shown__:
- Toggles whether the targeted gameobject should be included or exempt from the First person render hiding
- Animatable

__Target__:
- selects the transform to be managed by the component. when bones, selects root of chain.
	- For SkinnedMeshRenderers, it will hide the related bones from first person.
	    - This is configurable using the Shrink / Cut options.
	- If the SMR or MR root transform is included, it will hide the entire renderer.
	    - This does not get affected by Shrink / Cut, as it is completely hidden.
- Dropdown:
	- selects cut or shrink hiding mode (presumably only functions if __Is Shown__ is false)
	- Shrink is default

__Influenced Transforms__:
- Representation of what transforms will be affected by this exclusion. This is not configurable in-editor, as this is automatically gathered on client.
- When this foldout is opened a line gizmo will render along the chain of bones. Green is shown, Red is hidden.

# Common Usecases

Replacement for the First Person Render options added in ex1. Instead of it being built into the CVRAvatar component, this functionality is now achieved in its own component. For hiding (or showing) elements for or from the first person view, such as snouts, hair, horns, hats, etc.
Theoretically, could also be used to have a different first-person appearance from what others see.

# Notes

- shrink just scales bone to 0 so it closes any hole it would have left
- cut will do a hard cut wherever a bone had weight paint on, basically deleting it
- was separated from the CVR Avatar for the following reasons:
	- Less stuff to blast new users with when making their first avatar.
	- Less bloat in the avatar component. Keeps things modular and maintainable.
	- Ability to toggle at runtime due to it now being individually animatable.
- You are able have nested FPRExclusions. The avatars headbone has an FPRExclusion generated if one does not already exist, so a user may take control over the head-hiding behaviour completely if they so choose.
