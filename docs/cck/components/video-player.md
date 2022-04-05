# CVR Video Player

## General

##### Network Sync
Enables the network sync of the video player. This syncs the current video url and video time to others and allows
watching videos in sync with others.

##### Play On Awake
Will play the **Play On Awake Object** on start if no other video is playing. If no **Play On Awake Object** is set, the
first video of the first playlist will be used instead.

##### Use Interactive Library UI
Enabling this will enable our default video player ui. In order for this to work **UI Position/Parent** needs to be set.

##### UI Position/Parent
The parent of the video player ui. You can also move this object around in your scene, as the ui will be child object.  
This needs to be set inorder for the ui to work. You can use an empty game object to define its position.

##### Playback Speed
Defines how fast the video should be played.

???+ tip "Playback speed explained"  
    A playback speed of **1** equals **1 second** of video played per **1 second**. (**x1**)  
    A playback speed of **2** equals **2 second** of video played per **1 second**. (**x2**)

##### Projection Texture
The [RenderTexture](https://docs.unity3d.com/Manual/class-RenderTexture.html) which will be used to display the video output.  
We recommend using the render texture generated by the **Create Sample Render Texture**.

???+ tip "Resolution"
    If needed, you can modify the render textures resolution by clicking on it in your project and changing the resolution
    to your needs. By changing the resolution you can also define the aspect ratio of the render texture.
    The video play will automatically adjust to the render textures resolution and aspect ratio. This means it will fill
    empty pixels with black and fit the video inside while centering it as well.


## Audio

##### Playback Volume
The current playback volume. It can be used to modify the current volume during playback or to set the start/default
playback volume.

##### Audio Playback Mode
Set an audio output mode which will heavily impact or change the way audio is output.

!!! tip "Runtime Changing"
    You may change the Audio Playback Mode on runtime via the variable using e.g. unity ui.

You have the following options to chose from:

###### Direct
This will output the audio in a direct way using 2D Audio Sources. No special setup required, works out of the box.

###### Audio Source
This will use the provided **Custom Audio Source** to determine its settings such as fall of range (min, max) and more.

???+ tip "How it works"
    The video player will automatically generate a child object on runtime which will contain the actual audio source
    used by the video player. It will copy various settings from the referenced audio source.
    This means the game object of the referenced audio source can also be turned off and moved as it will inherit to the child.

###### Room Scale
!!! warning "Experimental Feature"

The **Room Scale** Audio Playback Mode should only be used when playing 5.1 or 7.1 audio.
As well as a specific setup of such speakers, audio sources, is required for it to output good results.
Stereo Audio will render degraded when using the room scale output mode.  

!!! tip "Get Started"
    You may use the provided "**Room Scale Audio Setup**" Prefab to get an idea of how it should be configured.

!!! warning "Advanced Usage"
    Only use this mode if you know what you are doing

##### Custom Audio Source
Reference Audio Source used by the [**Audio Source Playback Mode**](#audio-source).

##### Room Scale Audio Sources
A list of audio speakers used by the **Room Scale Audio Mode**.
You can define as many speakers as you want, but must assign them to a role/type.


## Playlists

##### Play On Awake Object
Can be set by clicking **Set as Play On Awake Object** on a specific video.  
Used to play this video on start or awake if no other video is playing and **Play on Startup** is enabled.
Can be removed by clicking the **Remove Play On Awake Object** button bellow.


## Events
You can hook into different events, that will be triggered by the video player.

##### Started Playback
Triggered whenever a video playback started.

##### Finished Playback
Triggered whenever a video finished playing.

##### Paused Playback
Triggered whenever a video gets paused.

##### Set Url
Triggered whenever a new video url gets set.


## Supported Media
All supported media formats and codecs can be found here: [Renderheads AVPro Supported Media](https://www.renderheads.com/content/docs/AVProVideo/articles/supportedmedia.html) 