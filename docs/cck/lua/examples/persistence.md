# Persistence

The following script is a short demonstration of a common use case for storing persistence data: A hypothetical RPG
game! (We've stripped out the actual RPG code to make things simpler to understand.)

For more information on the Storage API, please read our [Storage API Reference](../api/storage.md).

**This is stored on the user's computer, so it's not entirely secure!**

```lua
-- This is a world script, but you can use persistence on worlds, avatars, and props!

-- A table of the players in our game. In our case, we'll use a {user guid => data} structure.
PLAYERS = {}

-- Version of our game's public storage scheme, explanation below
LATEST_PUBLIC_VERSION = 5

-- Same for private storage
LATEST_PRIVATE_VERSION = 13

-- Game difficulty (you'd use constants here, like DIFFICULTY_EASY=1, _MEDIUM=2, _HARD=3; but let's be short and sweet for this example)
DIFFICULTY=2

-- Turn off Krampus mobs by defaults because they scared the American playtesters
KRAMPUS_ENABLED=false
function Start()
    print("HYPOTHETICAL-RPG V1.0")

    -- Print out some helpful debug info
    print("[Public Storage]")
    print("Path..........: " .. Storage.Public.Path)
    print("Bytes Allowed.: " .. tostring(Storage.Public.BytesAllowed))
    print("Bytes In Use..: " .. tostring(Storage.Public.CurrentSize))
    print("[Private Storage]")
    print("Path..........: " .. Storage.Private.Path)
    print("Bytes Allowed.: " .. tostring(Storage.Private.BytesAllowed))
    print("Bytes In Use..: " .. tostring(Storage.Private.CurrentSize))
    
    -- First, we'll load up our public configuration data.
    local public = Storage.Public
    --[[ WALL OF TEXT WARNING
    At this point, if there's an existing file. It should already be loaded into memory if it's there on disk. If it's NOT present on disk, we're just basically working with a blank file with no data.  We can add this later.
    
    So, a good way to check for file presence while also tracking changes to the data structure we make over time (like adding new stats or renaming our 'spel' list to 'spell'), we try to access a field called version. 
    
    Version is a number because we can just increment it one to say we're on a new version. If the save is less than the latest version, we know it's old and can throw it out, or manually upgrade it.
    ]]--
    local publicVersion = public.GetNumber("version")

    -- If we're starting a new save, it's simply nil, because the file is blank.
    if publicVersion == nil then
      -- Cool, new save! Let's fill in some defaults for the user.
      -- Tell the game this is the latest structure of our save file, since we're making it from scratch.
      public.SetNumber("version", LATEST_PUBLIC_VERSION)
      -- Set our defaults
      public.SetBoolean("krampus_enabled", KRAMPUS_ENABLED)
      public.SetNumber("difficulty", DIFFICULTY)
      -- And any other stuff you'd like can go here.
      -- The game will handle the saving to the actual file by itself.
    elseif publicVersion < LATEST_PUBLIC_VERSION then
      -- We could either reset here as above, or make an if-tree handling and upgrading every prior version of this save.  This is outside the scope of this example.
      print('ERROR: Public data is out of date! FIXME!')
    end

    -- So we have data.  Let's load it into our game configuration:
    DIFFICULTY = public.GetNumber("difficulty")
    KRAMPUS_ENABLED = public.GetBoolean("krampus")
    
    -- Let's load up our private storage now.
    -- This is where we're going to store more sensitive things, like player stats, save state, monster positions, quests, etc.
    local private = Storage.Private
    -- Check our version info
    local privateVersion = private.GetNumber("version")
    if privateVersion == nil then
        -- New save! Build defaults and save. Don't do class selection or anything here, this is just scaffolding for later.
        -- Ideally, this would be player GUID instead of name, and a full-featured "class" with functions, and then you'd just simplify it in SaveGame(), but we're getting ahead of ourselves.
        PLAYER["Example"] = {
            level=0,
            hp=0,
            mana=0,
            inventory=["sword", "rat flail"],
            gold=10
        }
        SaveGame()
    elseif privateVersion < LATEST_PRIVATE_VERSION then
        -- Upgrade saves here
      print('ERROR: Private data is out of date! FIXME!')
    end
    
    -- And load it all into memory.
    PLAYERS = private.GetTable("players")

    -- Other game startup stuff
end

-- ... Other game stuff ...

-- A function to just dump the game state into our save.
function SaveGame()
    private.SetNumber("version", LATEST_PRIVATE_VERSION)
    -- Remember that if you feed SetTable a table with functions/coroutines/etc, it will silently eat them and you won't get them back when it loads the table later. Allowing Lua to store arbitrary code to a user's computer would be... bad, so we had to make some compromises.
    private.SetTable("players", PLAYERS)
end
```

## Accessing other's content public bin

You can also access other's content public bin, although this doesn't allow to write, only read.

For more information on the Readonly Public Bin API,
check [Public Bin Readonly API Reference](../api/storage.md#public-bin-readonly)

```lua
UnityEngine = require("UnityEngine")
CCK = require("CVR.CCK")
CVR = require("CVR")

NUMBER_FIELD = "num"
ASSET_TYPE = CVR.CVRContentType.Spawnable
ASSET_GUID = "f566d0c9-155a-4280-9eb6-7792f66b5597"

function Start()
    local publicBin = Storage.GetPublicStorage(ASSET_TYPE, ASSET_GUID)
    -- Checks if that content has a bin file and it contains data
    if not publicBin.HasData then
        print("Failed to find a public bin for the asset ", ASSET_TYPE, " and guid ", ASSET_GUID)
        return
    end
    if not publicBin.HasValue(NUMBER_FIELD) then
        print("The public bin has no value for the key: ", NUMBER_FIELD, " on asset ", ASSET_TYPE, " and guid ", ASSET_GUID)
    else
        local value = publicBin.GetNumber(NUMBER_FIELD)
        print("Current Number: ", value)
    end
end
```