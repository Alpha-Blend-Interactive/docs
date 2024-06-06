# ChilloutVR Lua Scripting

ChilloutVR uses a [slightly-modified version](https://moonsharp.org) of [Lua](https://lua.org/about.html) to allow you to create dynamic, scripted behaviours for in-game avatars, props, and worlds.

!!! Note
    Keep in mind that the name of the language is spelled *Lua*, which is the Portugese word for *Moon*.  Lua is not an acronym, but a proper noun.

## About Lua

Lua is one of the oldest, but most-used purpose-made embedded scripting languages on the planet, and is used in many games and applications.  

While the syntax appears archaic, and lacks features that newer languages have, its simplicity gift it speed and efficiency unmatched by its competitors.

Alpha Blend Interactive spent considerable time looking at alternatives, and after much research, ultimately decided that Lua was the best fit for our needs.

We hope you enjoy creating with it!

## Tutorials

* [Getting Started](./getting-started.md)
* [Your First Script](./hello-world.md)
* [API Reference](./api/index.md)

## Examples

* [Funny Cube](examples/funny-cube.md) - An internal test script that spins the object it's in
* [Disable GameObject at Home](examples/instances-disable-go-in-home.md) - Disable a GameObject at home.
* [Teleport from Water](examples/player-teleport-away-from-water.md) - Teleport when fully immersed in water.
* [Thumbs Up Player Launcher](examples/player-thumbs-up-launch.md) - Launch upward when doing 2x thumbs up gesture.
* [Viewpoint Raycast](examples/viewpoint-raycast.md) - Perform a raycast from the player's viewpoint.

## Recipes

* [Getting Users in an Instance](./recipes/getting-users.md)
* [Listening to Game Events](./recipes/listen-game-events.md)

<!-- * [Getting Props in an Instance](./recipes/getting-props.md) -->
<!-- * [Hooking Into CVR Events](./recipes/game-events.md) -->
