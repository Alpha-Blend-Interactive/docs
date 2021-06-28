# CVR World

### World Settings

#### Spawns:
**Size:**  
List size of how many spawn points your want to define in your world.

**Usage:**  
The transform position and rotation of the assigned game objects will be used as spawn points for players.

!!! info  
    Remember to place the spawn locations above the ground so players do not fall through or get stuck inside the ground collider.

!!! info  
    If there are configured no configured spawn points, the transform of the cvr world game object will be used instead.


#### Spawn Rule:
1. ***In Order:***  
   Each new player joining the world will be selected a new spawn point in Ascending order 1, 2, 3, 4 etc. in the spawn list.
2. ***Random:***  
   Each new player joining the world will be selected a random spawn location from the spawn list.

**Reference Camera:**  
Assign a camera here, to configure values, that will be applied to the players main camera ingame.

**Respawn Height:**  
The height in Y direction in the scene where the player will respawn when falling past this limit.

#### Object Respawn Behaviour:
1. ***Destroy:***  
   Destroys the object when falling past respawn height.

2. ***Respawn:***  
   Respawns the object when falling past respawn height.

### Optional Settings

#### Warp Points:
Define warp points that are accessible through the menu.

**Size:**  
!!! warning  
    **Warp Points** is not usable yet