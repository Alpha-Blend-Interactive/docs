# A Word on Security

When you make a script, you take the security of everyone around you into your hands. To protect you, your reputation, and the gameplay of those using your worlds, avatars, and props, we ask that you follow the following guidelines. 

## Rule 0. Never Trust The Client

**This is the most important lesson you must learn.**

!!! warning
    CVR's client application has been designed to be as secure as possible, but **any sufficiently-motivated knowledgable attacker can modify The Client to perform malicious acts.** This means that people who want to do bad things with the CVR client can get into things.  Our network has been designed with this in mind, so attacks usually fail.

    However, because of this, *always assume people can see or modify client-side scripts.* **[NEVER TRUST THE CLIENT.](https://www.educative.io/courses/web-application-security-everyday-software-engineer/never-trust-the-client)**

Here's a frequent use-case:  An access keypad.

![A picture of a keypad we found on Google](../../assets/images/keypad.png)

### The Wrong Way

The easiest way to handle this would be to just throw the key into the script as a constant.

```lua
KEYCODE = '1234'
-- Start up and blank out the keypad.
function Start()
    boundObjects["Text"].text = ""
end

-- Receive key press from individual keys
function Receive(key)
    local t = boundObjects["Text"]
    -- The clear key
    if key == "C" then
        t.text = ""
        boundObjects["DoorHandle"].enable=false
        return
    end
    -- If enter key and the text is our keycode
    if key == "E" and t.text == KEYCODE then
        -- Open door
        boundObjects["DoorHandle"].enable=true
        t.text = ""
        return
    end
    t.text = t.text .. key
end

```

Unfortunately, anyone with Unity Explorer can pop open the script and see the `KEYCODE` variable.

### Slightly Less Wrong Way

Another way of handling this would be to obfuscate things.  Below is the same KEYCODE, but obfuscated.

```lua
KEYCODE = ((0x61e3d0d5/0x5192d6b+2.7755575615629e-17)+(0x1f694311/0x1955b30+-1.1102230246252e-16)+(0x16c0824/0x10b4595)+(0x6a60bf/0x6ff17e+6.6613381477509e-16)+(0x380f46a/0x21b7965+1.1102230246252e-16)+(0x1c50fa7c/0x2d1fded+-9.7144514654701e-17)+(0x114e7e9c/0xbc7a13+4.4408920985006e-16)+(0x1927996/0x1dc8a73+1.1102230246252e-16)+(0x10e9a2c9/0x1b385ba+-5.5511151231258e-16)+(0x11c04e45/0x1bbe5a6+4.1633363423443e-16)+(0x6d89129/0x188efea+5.5511151231258e-16)+(0x289c9e08/0x2b2ac3d+-1.5959455978987e-16)+(0x21401c1/0x56850a+2.7755575615629e-16)+(0x1c7febb5/0x1681ab4+-2.2204460492503e-16)+(0xfed92e/0x17e6bb+-8.8817841970013e-16)+(0x2d1a1d7b/0x2e0f894+2.2204460492503e-16)+(0x7fa3687/0x1667514+-3.3306690738755e-16)+(0x75867d1/0xc44d2d+8.8817841970013e-16)+(0x1d394686/0x1343e31+2.2204460492503e-16)+(0x2d16a30f/0x1402dbfa)+(0xe99a123d/0x8c36f46)+(0x2afc565b/0x30ef60e)+(0x220ec4eb/0x12bba2b+9.1593399531575e-16)+(0x1441e017/0x1611f09+-6.6613381477509e-16)+(0x368d4fcb/0x1fe2618+4.9960036108132e-16)+(0x4d666d3/0x1ea4914+-1.1102230246252e-16)+(0x27717f27/0x1938233+-2.0816681711722e-17)+(0x69f2384/0x3df46cd+1.1102230246252e-16)+(0x1719ad60/0x1e8c151+5.5511151231258e-17)+(0xa420faa/0x17697d7+-7.3378803033819e-16)+(0x38144896/0x289aca1+-1.6653345369377e-16)+(0x54b99a08/0x2d6ee39+2.2204460492503e-16)+(0xfe1b5af/0x351391f)+(0x42849bd6/0x2499517+1.8041124150159e-16)+(0x239166b6/0x209c123+-2.2204460492503e-16)+(0xdd31a45/0x135f00e+2.2204460492503e-16)+(0x2306c475/0x1d6050a+9.7144514654701e-17)+(0x30f26a23/0x260c4f0+-1.1102230246252e-16)+(0x134fad1d/0x2c28044+-2.2204460492503e-16)+(0x27088b5b/0x32d2eb1+-5.5511151231258e-17)+(0xf690566/0xf2128d+-7.7715611723761e-16)+(0x6e85671/0x1fc82d5+-3.3306690738755e-16)+(0xe8b82bd/0xd9c032+-3.7470027081099e-16)+(0x7166f56/0x23c6253+-3.6082248300318e-16)+(0x140b07c/0xadfc3f+4.4408920985006e-16)+(0x174c18ef/0x16d1670+-4.9960036108132e-16)+(0x1a735971/0x1010ea5+-4.9960036108132e-16)+(0x2185f975/0x410c927+-5.5511151231258e-17)+(0x29a2e94b/0x3f3a200+1.1102230246252e-16)+(0x10d3c919/0x1bf439c+1.1102230246252e-16)+(0x36d21f18/0x214764f+-3.885780586188e-16)+(0x1e1dda01/0x28e4fb5+-2.2204460492503e-16)+(0x4ae8b675/0x2870ffa)+(0x405a5c1f/0x2306cdc+2.2204460492503e-16)+(0x30113425/0x2b36963+-1.1102230246252e-16)+(0xc612a9c/0x12ae5ab+-3.3306690738755e-16)+(0x5cf98f0e/0x347d769)+(0xd34634f/0x1ae1810)+(0x107b30d9/0x26e34e4+-1.1102230246252e-16)+(0x6fcd17f/0x56114bc)+(0x7421fd/0x37e45a+2.7755575615629e-16)+(0x24d4eecd/0x1613c19+6.6613381477509e-16)+(0x1590688db/0xef01f8d+-1.3877787807814e-17)+(0x31df1eed/0x38037c2+1.1102230246252e-16)+(0x157f4475/0x1361d92)+(0x2d55216f/0x188e0e3+-4.4408920985006e-16)+(0x27d375f/0x25be78+7.7715611723761e-16)+(0xfa0be57/0x20110b0)+(0x3167bae1/0x1a86799+-6.6613381477509e-16)+(0xe8d9af6/0x1163ef3+9.9920072216264e-16)+(0x33154a21/0x1d96467+1.1102230246252e-16)+(0x1a6ac055/0x1267c0d+-2.2204460492503e-16)+(0x87e8fa6/0xffc3c3+8.8817841970013e-16)+(0xd17adfd/0x18504da)+(0x178b441/0x1093672+-6.6613381477509e-16)+(0x23de7ef3/0x1f3076b+-3.885780586188e-16)+(0x4b5f719/0x1888c60+-6.1062266354384e-16)+(0x53e346b7/0x2e0e9a3+1.6653345369377e-16)+(0x1de65674/0x1684261)+(0x6942ea7/0xbed5a3+9.9920072216264e-16)+(0x1983b3/0xeb81da+-6.8001160258291e-16)+(0x506682e/0x11d2923+-1.1102230246252e-16)+(0x1c385a29/0x159e7de+4.4408920985006e-16)+(0xc0bf85df/0xdf9d406+1.1102230246252e-16)+(0x147818ee/0x1372519+2.2204460492503e-16)+(0x391e6a/0x1f3cd1b+-4.1633363423443e-16)+(0x391c096/0x31cdf3+8.8817841970013e-16))
```

This probably looks very secure, but remember: clients can also *modify* scripts:

```lua
KEYCODE = ((0x61e3d0d5/0x5192d6b+2.7755575615629e-17)+(0x1f694311/0x1955b30+-1.1102230246252e-16)+(0x16c0824/0x10b4595)+(0x6a60bf/0x6ff17e+6.6613381477509e-16)+(0x380f46a/0x21b7965+1.1102230246252e-16)+(0x1c50fa7c/0x2d1fded+-9.7144514654701e-17)+(0x114e7e9c/0xbc7a13+4.4408920985006e-16)+(0x1927996/0x1dc8a73+1.1102230246252e-16)+(0x10e9a2c9/0x1b385ba+-5.5511151231258e-16)+(0x11c04e45/0x1bbe5a6+4.1633363423443e-16)+(0x6d89129/0x188efea+5.5511151231258e-16)+(0x289c9e08/0x2b2ac3d+-1.5959455978987e-16)+(0x21401c1/0x56850a+2.7755575615629e-16)+(0x1c7febb5/0x1681ab4+-2.2204460492503e-16)+(0xfed92e/0x17e6bb+-8.8817841970013e-16)+(0x2d1a1d7b/0x2e0f894+2.2204460492503e-16)+(0x7fa3687/0x1667514+-3.3306690738755e-16)+(0x75867d1/0xc44d2d+8.8817841970013e-16)+(0x1d394686/0x1343e31+2.2204460492503e-16)+(0x2d16a30f/0x1402dbfa)+(0xe99a123d/0x8c36f46)+(0x2afc565b/0x30ef60e)+(0x220ec4eb/0x12bba2b+9.1593399531575e-16)+(0x1441e017/0x1611f09+-6.6613381477509e-16)+(0x368d4fcb/0x1fe2618+4.9960036108132e-16)+(0x4d666d3/0x1ea4914+-1.1102230246252e-16)+(0x27717f27/0x1938233+-2.0816681711722e-17)+(0x69f2384/0x3df46cd+1.1102230246252e-16)+(0x1719ad60/0x1e8c151+5.5511151231258e-17)+(0xa420faa/0x17697d7+-7.3378803033819e-16)+(0x38144896/0x289aca1+-1.6653345369377e-16)+(0x54b99a08/0x2d6ee39+2.2204460492503e-16)+(0xfe1b5af/0x351391f)+(0x42849bd6/0x2499517+1.8041124150159e-16)+(0x239166b6/0x209c123+-2.2204460492503e-16)+(0xdd31a45/0x135f00e+2.2204460492503e-16)+(0x2306c475/0x1d6050a+9.7144514654701e-17)+(0x30f26a23/0x260c4f0+-1.1102230246252e-16)+(0x134fad1d/0x2c28044+-2.2204460492503e-16)+(0x27088b5b/0x32d2eb1+-5.5511151231258e-17)+(0xf690566/0xf2128d+-7.7715611723761e-16)+(0x6e85671/0x1fc82d5+-3.3306690738755e-16)+(0xe8b82bd/0xd9c032+-3.7470027081099e-16)+(0x7166f56/0x23c6253+-3.6082248300318e-16)+(0x140b07c/0xadfc3f+4.4408920985006e-16)+(0x174c18ef/0x16d1670+-4.9960036108132e-16)+(0x1a735971/0x1010ea5+-4.9960036108132e-16)+(0x2185f975/0x410c927+-5.5511151231258e-17)+(0x29a2e94b/0x3f3a200+1.1102230246252e-16)+(0x10d3c919/0x1bf439c+1.1102230246252e-16)+(0x36d21f18/0x214764f+-3.885780586188e-16)+(0x1e1dda01/0x28e4fb5+-2.2204460492503e-16)+(0x4ae8b675/0x2870ffa)+(0x405a5c1f/0x2306cdc+2.2204460492503e-16)+(0x30113425/0x2b36963+-1.1102230246252e-16)+(0xc612a9c/0x12ae5ab+-3.3306690738755e-16)+(0x5cf98f0e/0x347d769)+(0xd34634f/0x1ae1810)+(0x107b30d9/0x26e34e4+-1.1102230246252e-16)+(0x6fcd17f/0x56114bc)+(0x7421fd/0x37e45a+2.7755575615629e-16)+(0x24d4eecd/0x1613c19+6.6613381477509e-16)+(0x1590688db/0xef01f8d+-1.3877787807814e-17)+(0x31df1eed/0x38037c2+1.1102230246252e-16)+(0x157f4475/0x1361d92)+(0x2d55216f/0x188e0e3+-4.4408920985006e-16)+(0x27d375f/0x25be78+7.7715611723761e-16)+(0xfa0be57/0x20110b0)+(0x3167bae1/0x1a86799+-6.6613381477509e-16)+(0xe8d9af6/0x1163ef3+9.9920072216264e-16)+(0x33154a21/0x1d96467+1.1102230246252e-16)+(0x1a6ac055/0x1267c0d+-2.2204460492503e-16)+(0x87e8fa6/0xffc3c3+8.8817841970013e-16)+(0xd17adfd/0x18504da)+(0x178b441/0x1093672+-6.6613381477509e-16)+(0x23de7ef3/0x1f3076b+-3.885780586188e-16)+(0x4b5f719/0x1888c60+-6.1062266354384e-16)+(0x53e346b7/0x2e0e9a3+1.6653345369377e-16)+(0x1de65674/0x1684261)+(0x6942ea7/0xbed5a3+9.9920072216264e-16)+(0x1983b3/0xeb81da+-6.8001160258291e-16)+(0x506682e/0x11d2923+-1.1102230246252e-16)+(0x1c385a29/0x159e7de+4.4408920985006e-16)+(0xc0bf85df/0xdf9d406+1.1102230246252e-16)+(0x147818ee/0x1372519+2.2204460492503e-16)+(0x391e6a/0x1f3cd1b+-4.1633363423443e-16)+(0x391c096/0x31cdf3+8.8817841970013e-16))
print("KEYCODE="..tostring(KEYCODE))
```
```
KEYCODE=1234.0
```

!!! Note
    It may be tempting to use encryption, but you'll run into the same problem.

### The Secure Way

The most secure way of doing this is with a *cryptographic hash* (like the ones listed [here](https://github.com/philanc/plc/tree/master) under Hash), which is a cryptologically secure (theoretically) one-way method of encrypting strings.

For example:

```lua
-- Blake2B in 64 bytes, encoded to hex
KEYCODE_BLAKE2B_HEX = "da77bd2a1d857d88b31de27536b81df7f005027d4f847667df13a0569b6048e0454ce9480827789547cc174060c4f388866ebb0209929b0de414cc9ac571c421"
-- ...

-- Check hash of the entered string against our known hash
if blake2b.hash({string.byte(boundObject["Text"].text,1,-1)}, 64) == KEYCODE_BLAKE2B_HEX then
    -- Open door
end
```

## Rule 1. Scope

Other scripts can call/access your script's global functions/variables. If you have some code that you want to keep to
your own script, you should use the `local` keyword. For example:

```lua
-- This function can be run by external scripts, which can cause a player to cheat and give himself money 
-- if they are able to get a reference to your script
function IncrementMoneys(amount)
    print("Incrementing money to this player!")
    ...
end
```

```lua
-- This function can NOT be run by external scripts, because external scripts can only run Global functions.
local function SaferIncrementMoneys(amount)
    print("Incrementing money to this player (a bit more safely)!")
    ...
end
```

So the rule of the thumb is give your code the least scope possible they need to work.

## More to come

Other rules of thumb coming soon!