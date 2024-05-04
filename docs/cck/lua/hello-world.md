# Hello World for Lua

A tradition in the programming community is to introduce a new language by having you write a simple program that just spits out "Hello, world!"

We will walk you through this process with CVR Lua Scripting and explain what each part means.  Don't worry, while it looks long and boring, it's relatively painless. Experienced programmers can skim through this and not miss much, but new programmers may wish to read the whole thing in it's entirety to understand concepts and terminology.

## The Component

First, we need to create the component that actually hosts and runs the script.

1. In Unity Editor, create a new cube in the scene: *GameObject* &gt; *3D Object* &gt; *Cube*
1. Click on the cube to select it.
1. Create a new CVRSpawnable component in the cube: 
    1. At the bottom of the Inspector tab, press *Add Component*.
    1. Search for `cvrlua` and click on *CVR Lua Client Behaviour*.

## The Script
Now that we have somewhere to put the script, let's make the actual script.

1. Create a new folder in your project called Lua.  This isn't required, but may help you organize things.
1. Create a new folder in Lua called Hello World.  Again, not entirely necessary.
1. Right-click the folder and select *Create* &gt; *CVR Lua Script*.
1. Name it `helloworld.lua`.
1. Open **your project** with VSCode.
1. In your VSCode project window in VSCode, locate and open `helloworld.lua`.

## Programming

You should now have a file that looks like this:
```lua
-- Start is called before the first frame update
function Start()
    
end

-- Update is called once per frame
function Update()

end
```

Here, we see two features of Lua: Functions, and comments.

### What am I Looking At?

*Functions* are sections of code that can be referenced and executed by other code by name.  Each function must start with `function`, one or more whitespace characters, then an *identifier* that must follow some naming rules (no whitespace, can't start with a number), and is followed by a number of *arguments* inside of two parentheses. After these, the function can contain zero or more *statements*. Finally, the *keyword* `end` marks the end of the function.

Functions can be passed different kinds of *arguments* of many different types, like numbers, sequences of characters (called *strings*), tables (which can be in the form of lists or with more structure), or other types.  After processing the arguments, each function can *return* a value.  In the script above, you see two function *definitions*: `Start()`, and `Update()`.

You'll also notice two dashes (`--`) followed by some remark.  These are called *comments*, and are ignored by the scripting engine.  The purpose of comments are simply to provide a way for programmers to leave notes in their code.  They are not required in any way, and can be placed pretty much anywhere. The most typical locations for these are to be on their own lines, or at the end of a line.

CVR *Lua Behaviours* are something that start once your prop, avatar, or world object is instantiated by CVR, and persist until the object in question is destroyed.  They fill the same niche as a Unity MonoBehaviour.

When the script starts, `Start()` is called by Unity.  Therafter, as long as the script is marked as active, it will receive `Update()` calls from Unity.  These calls are made multiple times per second.

### Completing the Objective

Let's move right along.  

We want to just output "Hello, world!" to console.  So, let's do that.

1. In Start(), between the end of the parentheses, type in `print` followed by a space.
    * `print()` just prints to console.
1. Type in `"Hello, world!"`
    * This is a *string* containing the characters we wish to display.

And you're done!

Let's take a step back and look at what we've accomplished and try to make sense of it:
```lua
-- Start is called before the first frame update
function Start()
   print "Hello, world!" 
end

-- Update is called once per frame
function Update()

end
```

First, something to keep in mind: Lua allows for simplified function calls.  That means that for simple situations, it's OK to write `print("Hello, world!")` as  `print "Hello, world!"`  Features like this are called *syntax sugar* and exist to make life a bit easier.  Under the hood, each way of writing this function call do the same thing: They are functionally and syntactically identical.

What we added is an expression called a "function call".  We called a *built-in* function called `print()`, which takes a single string as a parameter.

If print were written in Lua, it'd look something like this:
```lua
function print(input_string)
    -- Some code here to send the input to logs and console.
end
```

In reality, it's part of the scripting engine and written (in our case) in C#. All it does in CVR is log the provided message to your game log, and add a message to your in-game console.

Each argument is *positional*, so an argument specified at position 1 in your function call will arrive at position 1 in the called function.  In this case, our call of `print("Hello, world")` will set the `input_string` argument to "Hello, world!", and the function can use that argument however it likes.

## Uploading

Now, go through the usual process of adding a CVRSpawnable to the prop and uploading it to the game.

When you spawn it in-game, it should print to your game logs.

Congratulations!  You've made your first script.