# Gun Controller <div class="whitelisted" data-list="W"></div>
This component is used as a quick way to make a ranged weapon for the Combat System.

### Properties

+ **Particle System:** The Unity Particle system component that is used by the GameObject.
+ **Shoot Sounds:** List of audio files that are randomized and used when the GameObject is shooting.
+ **Reload Sounds:** List of audio files that are randomized and used when the GameObject is reloading.
+ **Empty Shoot Sounds:** List of audio files that are randomized and used when the GameObject is shooting but no ammo is available.
+ **Magazine Size:** The amount of ammo that is available before needing to reload.
+ **Ammo Capacity:** The amount of ammo available to be reloaded into a magazine.
+ **Firing Mode**
  - **Single:** This Firing Mode requires the the GameObject to stop shooting before being able to shoot again.
  - **Half Auto:** This Firing Mode will fire the amount of ammo equal to the Firing Rate property; after, the GameObject will need to stop shooting before being able to shoot again.
  - **Full Auto:** This Firing Mode will fire a continuous stream of ammo equal to the Firing Rate property per second; until the GameObject stops shooting, or runs out of ammo in the magazine.
+ **Firing Rate:** The amount of ammo per second that can be shot.
+ **Reload Time:** The amount of time in seconds that reloading the magazine takes.
+ **Hit Detection:**
  - **Particle:** This Hit Detection will use the Particle System Collision property for collision.
  - **RayCast:** This Hit Detection will use a RayCast to detect collision. This is instant.
+ **Hit Mask:** The  Unity Collision Matrix layers that the Gun Controller can hit.

### Methods
These are methods that can be accessed using Custom Triggers in the Interactable component. These methods are important in order to use the Gun Controller.

+ **GrantMagazineAmmo:** Will add ammo to the magazine, this will not surpass the Magazine Size property.
+ **GrantReserveAmmo:** Will add ammo to the Ammo Capacity, this will not surpass the Ammo Capacity property.
+ **Reload:** Will reload the magazine of the GameObject.
+ **Shoot:** Will make the GameObject shoot once every time its called.
+ **ShootDown:** Will make the GameObject shoot until ShootUp is called or magazine Size reaches 0.
