# Object Health
Adding this component gives the GameObject properites for the Combat System. Best used alongside the **Damage** and **Game Instance Controller** components.

### Properties

##### Reference ID

##### Health
+ **Health Base Amount:** This is the default Health the GameObject starts with at the begining of a Game or Round.
+ **Health Max Amount:** This is the Maximum amount of Health the GameObject can have at any given time.

##### Health Regeneration
+ **Health Regeneration Delay:** The time in seconds before the GameObject starts regenerating Health.
+ **Health Regeneration Rate:** The amount of Health the GameObject recovers per second.
+ **Health Regeneration Cap:** The amount of Health that regeneration will stop.

##### Armor
+ **Armor Base Amount:** This is the default Armor the GameObject starts with at the begining of a Game or Round.
+ **Armor Max Amount:** This is the Maximum amount of Armor the GameObject can have at any given time.

##### Armor Regeneration
+ **Armor Regeneration Delay:** The time in seconds before the GameObject starts regenerating Armor.
+ **Armor Regeneration Rate:** The amount of Armor the GameObject recovers per second.
+ **Armor Regeneration Cap:** The amount of Armor that regeneration will stop.

##### Shield
+ **Shield Base Amount:** This is the default Armor the GameObject starts with at the begining of a Game or Round.
+ **Shield Max Amount:** This is the Maximum amount of Armor the GameObject can have at any given time.

##### Shield Regeneration
+ **Shield Regeneration Delay:** The time in seconds before the GameObject starts regenerating Shield.
+ **Shield Regeneration Rate:** The amount of Shield the GameObject recovers per second.
+ **Shield Regeneration Cap:** The amount of Shield that regeneration will stop.

##### Down Behavior
This will determine how to handle the GameObject when it's health reaches 0.
+ **DownBehavior**
  - **Destroy:** Deletes the GameObject.
  - **Respawn After Time:** Respawns the GameObject after the amount in seconds.
  - **Respawn After Round Start:** Only Applicable when the Game Instance Controller is present in the scene; will respawn the GameObject when the round starts.
  - **Respawn After Round End:** Only Applicable when the Game Instance Controller is present in the scene; will respawn the GameObject when the round ends.
  - **Respawn After Game Start:** Only Applicable when the Game Instance Controller is present in the scene; will respawn the GameObject when the game starts.
  - **Respawn After Game End:** Only Applicable when the Game Instance Controller is present in the scene; will respawn the GameObject when the game ends.
+ **Respawn Time:** Only Applicable if the Respawn After Time behavior is used; the amount in seconds before the GameObject Respawns.
+ **Repsawn Point:** The GameObject Transform property that the Object Health GameObject will respawn at.
+ **Connected Game Instance** Only Applicable when the Game Instance Controller is present in the scene; The Game Instcance Controller component that the GameObject is effected by.

### Events
These are hooks that can be triggered by the Combat System.
+ **Down Event:** This event will trigger when the GameObject's health reaches 0.
+ **Respawn Event:** This event will trigger when the GameObject respawns.
