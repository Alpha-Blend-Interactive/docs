# CVR Interactable

##### Tooltip
A tooltip text which will be displayed when hovering over the trigger.

## Triggers
The list of triggers defined for this **Interactable**.

### Trigger Type
Every trigger has a type selected, which defines how it will be or can get triggered.

#### General Properties
Properties which are valid for all the different types.

##### Broadcast Type
Defines how the triggered action should be networked to other players in the instance.

+ **Local Not Networked**  
  Not Networked, execution is local only
+ **Global Networked**  
  Execution networked to all other players in the instance
+ **Global Instance Owner Only**  
  Same as **Global Networked**, but only allowed to be triggered by the current instance owner
+ **Global Networked All Instance Moderators**  
  Same as **Global Networked**, but only allowed to be triggered by all the instance moderators

!!! info "Buffered Network Types"
    The suffix Buffered means, the execution will be synced to late joiners (execution count saved on server side). 

##### Delay (Seconds)
Sets a delay in seconds before the action will be executed.


#### On Grab
Triggered when a player grabs the object


#### On Drop
Triggered when a player drops the object


#### On Interact Down
A player interacts with the object by e.g., pointing at the object and pressing Left Click

##### Distance
The maximum distance a player can be apart from the object, but still interact with the interactable.


#### On Interact Up
Triggered when e.g., releasing the Left Click button

##### Distance
The maximum distance a player can be apart from the object, but still interact with the interactable.


#### On Enter Trigger
Collider with **is trigger** set, enters the collider of the interactable

##### Layer
The triggering object must be on one of the selected layers.


#### On Exit Trigger
Collider with **is trigger** set, exits / leaves the collider of the interactable

##### Layer
The triggering object must be on one of the selected layers.


#### On Enter Collider
Collider with **is trigger** **_not_** set, enters the collider of the interactable

##### Layer
The triggering object must be on one of the selected layers.


#### On Exit Collider
Collider with **is trigger** **_not_** set, exits / leaves the collider of the interactable

##### Layer
The triggering object must be on one of the selected layers.


#### On Enable
Triggered when enabling the game object.


#### On Disable
Triggered when disabling the game object.


#### On Timer
Simple scheduler for actions.

##### Seconds
Set the time in seconds for the timer.

##### Mode
+ **Once On Enable**
  The action will be executed after **x seconds** once.
+ **Repeat**
  The action will be executed every **x seconds** repeatedly.
+ **Deactivate Self** 
  Executes the action after **x seconds** and deactivates its own game object afterwards.
  
#### On Particle Hit
Triggered whenever a particle hits the trigger collider.

#### On Variable Buffer Update
Triggers whenever the variable saved in the selected [CVR Variable Buffer](../world/components/variable-buffer.md) changes.


#### On Variable Buffer Comparison

##### Type
You can select how you want to compare your variable.

+ **Buffer -> Static**  
  Compare the buffer value with a static value (**Value 2**)
+ **Buffer -> Buffer**  
  Compare the buffer value with another buffers (**Value 2**) value
  
##### Value 1
The first variable to be used in comparison. Select a [CVR Variable Buffer](../world/components/variable-buffer.md) here.

##### Comparitor
Choose the operator you want to use in comparison. You can choose from the following:

+ **==** Equal to
+ **>=** Greater than or equal to
+ **>** Greater than
+ **<** Less than
+ **<=** Less than or equal to
+ **!=** Not equal to

##### Value 2
The second value you want to compare your variable to.
If **Buffer -> Static** is selected, you need to enter a float number here. (e.g., 13.37)
If **Buffer -> Buffer** is selected, you need to select a second [CVR Variable Buffer](../world/components/variable-buffer.md)


#### On Cron
Can be used to define cron jobs. You can learn more about [Cron here](https://en.wikipedia.org/wiki/Cron).

##### Cron String
Paste a valid cron string here.


#### On Pointer Enter
Triggered whenever a players pointer enters the trigger.


#### On World Trigger



#### On Custom Trigger