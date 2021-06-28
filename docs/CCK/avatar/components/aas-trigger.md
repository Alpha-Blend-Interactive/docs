# CVR Advanced Avatar Trigger
With this component you can modify your advanced avatar settings parameter values when a **[CVR Pointer](pointer.md)** 
enters the indicated trigger area. Size and placement can be adjusted with the settings bellow.  
The trigger area will move together with its parented armature bone or game object.

### Properties

**Area Size:**  
X/Y/Z Size of your area.

**Area Offset:**  
X/Y/Z Offset from the GameObject center location.

**Setting Name:**  
Parameter name of the setting to be modified.

**Setting Value:**  
The value the setting will be set to when triggered.

### Advanced Mode

**Network Interactable:**  
Allows network players to interact with your trigger.

#### On Enter Trigger & On Exit Trigger
Actions when CVR Pointer Enters or Exits set trigger area.

**Setting Name:**  
Parameter name of the setting to be modified.

**Setting Value:**  
Set value that will override, added to or subtracted from the current parameter value.

**Delay:**  
Delay before the trigger action is executed

**Update Method:**  
+ **Override** (Overrides the parameters value with the setting value)  
+ **Add** (Adds the setting value to the parameters value)  
+ **Subtract** (Subtracts the settings value from the parameters value)  