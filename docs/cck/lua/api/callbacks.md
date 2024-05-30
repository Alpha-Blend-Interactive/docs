# Callbacks

Most of Unity's MonoBehaviour callbacks are forwarded to your Lua script. You can define these functions in your script to handle these events.

### General Callbacks
| Callback        | Description                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------|
| `Awake()`       | Called when an enabled script instance is being loaded.                                              |
| `Start()`       | Called on the frame when a script is enabled before any `Update` methods are called the first time.  |
| `Update()`      | Called every frame if enabled.                                                                       |
| `FixedUpdate()` | Called for physics calculations.                                                                     |
| `LateUpdate()`  | Called every frame if enabled.                                                                       |
| `OnEnable()`    | Called when the object becomes enabled and active.                                                   |
| `OnDisable()`   | Called when the script becomes disabled.                                                             |
| `OnDestroy()`   | Called when the script is destroyed.                                                                 |

#### Note: In ChilloutVR, `UnityEngine.Time.fixedDeltaTime` is set based on the **target** refresh rate, clamped between 30hz and 144hz. This means that FixedUpdate will be called at a variable rate, but the time between calls will be consistent.

### Collision Callbacks
| Callback                          | Description                                                                                                 |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------|
| `OnCollisionEnter(collision)`     | Called when this collider/rigidbody starts touching another rigidbody/collider.                             |
| `OnCollisionStay(collision)`      | Called once per frame for every collider or rigidbody touching another collider or rigidbody.               |
| `OnCollisionExit(collision)`      | Called when this collider/rigidbody stops touching another rigidbody/collider.                              |
| `OnCollisionEnter2D(collision)`   | Called when an incoming collider makes contact with this object's collider (2D physics only).               |
| `OnCollisionStay2D(collision)`    | Called each frame where a collider on another object is touching this object's collider (2D physics only).  |
| `OnCollisionExit2D(collision)`    | Called when a collider on another object stops touching this object's collider (2D physics only).           |

### Trigger Callbacks
| Callback                          | Description                                                                                                    |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------|
| `OnTriggerEnter(other)`           | Called when a GameObject collides with another GameObject.                                                     |
| `OnTriggerStay(other)`            | Called once per physics update for every collider other that is touching the trigger.                          |
| `OnTriggerExit(other)`            | Called when the collider other stops touching the trigger.                                                     |
| `OnTriggerEnter2D(collision)`     | Called when another object enters a trigger collider attached to this object (2D physics only).                |
| `OnTriggerStay2D(collision)`      | Called each frame where another object is within a trigger collider attached to this object (2D physics only). |
| `OnTriggerExit2D(collision)`      | Called when another object leaves a trigger collider attached to this object (2D physics only).                |

### Mouse Callbacks
| Callback                          | Description                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------|
| `OnMouseDown()`                   | Called when the user presses the mouse button while over the Collider.         |
| `OnMouseDrag()`                   | Called when the user clicks on a Collider and is still holding down the mouse. |
| `OnMouseEnter()`                  | Called when the mouse enters the Collider.                                     |
| `OnMouseExit()`                   | Called when the mouse is no longer over the Collider.                          |
| `OnMouseOver()`                   | Called every frame while the mouse is over the Collider.                       |
| `OnMouseUp()`                     | Called when the user releases the mouse button.                                |
| `OnMouseUpAsButton()`             | Called when the mouse is released over the same Collider as it was pressed.    |

### Application Callbacks
| Callback                          | Description                                                                 |
|-----------------------------------|-----------------------------------------------------------------------------|
| `OnApplicationQuit()`             | Called before the application quits.                                        |
| `OnApplicationPause(pause)`       | Called when the application pauses or resumes on losing or regaining focus. |
| `OnApplicationFocus(focus)`       | Called when the player gets or loses focus.                                 |

### Animator Callbacks
| Callback                          | Description                                              |
|-----------------------------------|----------------------------------------------------------|
| `OnAnimatorMove()`                | Called on an `Animator` move.                            |
| `OnAnimatorIK(layerIndex)`        | Called for setting up animation IK (inverse kinematics). |

### Particle Callbacks
| Callback                          | Description                                                                               |
|-----------------------------------|-------------------------------------------------------------------------------------------|
| `OnParticleCollision(other)`      | Called when a particle hits a Collider.                                                   |
| `OnParticleSystemStopped()`       | Called when all particles in the system have died, and no new particles will be born.     |
| `OnParticleTrigger()`             | Called when any particles in a Particle System meet the conditions in the trigger module. |
| `OnParticleUpdateJobScheduled()`  | Called when a Particle System's built-in update job has been scheduled.                   |

### Transform Callbacks
| Callback                           | Description                                                       |
|------------------------------------|-------------------------------------------------------------------|
| `OnTransformParentChanged()`       | Called when a direct or indirect parent of the transform changes. |
| `OnTransformChildrenChanged()`     | Called when the list of children of the transform changes.        |
| `OnBeforeTransformParentChanged()` | Called before the transform's parent changes.                     |

### Rendering Callbacks
| Callback                             | Description                                                                              |
|--------------------------------------|------------------------------------------------------------------------------------------|
| `OnBecameVisible()`                  | Called when the renderer becomes visible by any camera.                                  |
| `OnBecameInvisible()`                | Called when the renderer is no longer visible by any camera.                             |
| `OnWillRenderObject()`               | Called for each camera if the object is visible and not a UI element.                    |
| `OnRenderObject()`                   | Called after the camera has rendered the scene.                                          |
| `OnPreCull()`                        | Called before a camera culls the scene.                                                  |
| `OnPreRender()`                      | Called before a camera renders the scene.                                                |
| `OnPostRender()`                     | Called after a camera has finished rendering the scene.                                  |
| `OnRenderImage(source, destination)` | Called after a camera has finished rendering, allows modifying the Camera's final image. |

### Canvas Callbacks
| Callback                            | Description                                             |
|-------------------------------------|---------------------------------------------------------|
| `OnCanvasGroupChanged()`            | Called when the CanvasGroup changes.                    |
| `OnRectTransformRemoved()`          | Called when the RectTransform is removed.               |
| `OnRectTransformDimensionsChange()` | Called when the dimensions of the RectTransform change. |

### Joint Callbacks
| Callback                          | Description                                                                                          |
|-----------------------------------|------------------------------------------------------------------------------------------------------|
| `OnJointBreak(breakForce)`        | Called when a joint attached to the same game object breaks.                                         |
| `OnJointBreak2D(joint)`           | Called when a `Joint2D` attached to the same game object breaks.                                     |