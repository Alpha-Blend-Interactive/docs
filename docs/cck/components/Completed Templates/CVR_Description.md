
# Component Name:

CVR Description

# Description Overview:

A component to write down in-editor information. Useful for remembering how something was created, or for prefabs.

# Functionality:

**Description:**
- A text field for typing up information. Note: this only appears in the unity editor, and will not be uploaded with the content it's attached to.
**Documentation URL:**
- A text field for adding links when the info is locked.
**Icon Type:**
- Selects an icon to use once the info has been locked. Selectable icons are; None, Info, Warning, Error.
**Lock Info:**
- A button that when pressed, prevents further editing of the Description, Documentation URL, and Icon Type. This also will make the Icon Type visible next to the Description text field. It will also add a button labeled "Read more about this topic"
**Read More About This Topic:**
- A button that only appears once the Lock Info button has been pressed. When pressed it will open your primary web browser to the URL in the Documentation URL text field from earlier.
# Behaviors:

**Lock Info:**
- Once this button is pressed the component will change, and no more editable text fields will be visible. Instead, it will take any of the text fields that has been entered and display them.

# Common Usecases

**Info Sharing:**
- When creating content intended to be shared and opened in the unity editor; a user can include CVR Description components to help explain what each part of the content does, or warn users about potential issues should they want to edit the distributed content.

# Notes

Components can be reordered, so it's generally recommended to put your CVR Description components on the game object you wish to explain, or near the scripts on the same game object.