Currently copied Verbatim from DMs with NotAKid

**Some LUA Globals & Wrapped Classes**

```-- Modules:
System = require "System"
UnityEngine = require "UnityEngine"
CVR = require "CVR"
CCK = require "CVR.CCK"
Network = require "CVR.Network"
RCC = require "RCC"

-- Context: All
runningOnServer = True when running on server. False when not runningOnClient = True when running on client. False when not runningInAvatar = True when the script is running on an avatar. False when not
runningInProp = True when the script is running on a prop. False when not
runningInWorld = True when the script is running in a world. False when not

-- CVRWorldAPI
-- Context: All
world = {
	GetAllPlayers = Returns list of all network players wrapped as ScriptSafeCVRPlayer
	GetAllProps = Returns list of all network props wrapped as ScriptSafeCVRProp
	WorldID = Returns MetaPort.Instance.CurrentWorldId
	InstanceID = Returns MetaPort.Instance.CurrentInstanceId
	InstanceName = Returns MetaPort.Instance.CurrentInstanceName
	InstancePrivacy = Returns MetaPort.Instance.CurrentInstancePrivacy
	InstanceOwner = Returns MetaPort.Instance.ownerId
	Ping = Returns MetaPort.Instance.currentPing
}

--Context: Avatar
isLocal = True when running on the local avatar. False when running on a remote avatar. Nil when not running on an avatar
playerController = Access to BetterBetterCharacterController when running on the local avatar. Nil when running on a remote avatar

-- Context: Prop
isMine = True when running on a prop you own (you are the spawner). False when running on a prop you do not own (you did not spawn it). Nil when not running on a prop

-- Context: World
syncOwner = True when on the child of a CVRObjectSync component, with you being the active syncOwner. False when on the child of a CVRObjectSync component, with you not being the active syncOwner. Nil when not running in-world or child of CVRObjectSync

-- Access to all bound objects
-- Context: All
boundObjects = This can be anything from audio clips, prefabs, GameObjects, MonoBehaviours, etc., as long as they inherit from UnityEngine.Object

-- Context: All
gameObject = Access to the GameObject the active CVRLuaClientBehaviour script is on
transform = Access to the Transform the active CVRLuaClientBehaviour script is on
name = Object.Name of the CVRLuaClientBehaviour- should return the attached GameObject name by default
hash = SHA512 hash of all the script text as a base64 string
cast = Allows you to cast to different types? (not sure)

-- Safely Wrapped Classes --

-- Context: All
ScriptSafeCVRPlayer = {
	ID = Returns the player Uuid
	Username = Returns player Username
	StaffTag = Returns player ApiUserStaffTag (empty on users & devs, not tested on mods)
	Rank = Returns player ApiUserRank ("User", "Developer", "Moderator", "Legend")

	-- Context: World
	position = {
		get = Return players PlayerObject position
		set = Set players PlayerObject position *???!*
	},

	-- Context: World
	rotationEuler = Returns players rotation in Euler
	-- Context: World
	rotation = {
		get = Return players rotation as Quaternion
		set = Set players rotation from Quaternion *???!*
	},
	-- Context: World
	IsBlockedByClient = Returns true if player is blocked by local player
}

-- Context: All
ScriptSafeCVRProp = {
	InstanceId = Returns the uuid of the spawnable instance (believe this is `p+guid~randomshithere`
	ObjectId = Returns the guid of the prop ?
	Name = Returns the GameObject name of the CVRSpawnable component
	SpawnedBy = Returns the uuid of user who spawned the spawnable
	SyncedBy = Returns the uuid of user who is currently syncing the prop
	CustomFloats = Returns a read-only collection of custom float values
	
	-- Context: World
	position = Returns the world position of the spawnable
	rotationEuler = Returns the world rotation of the spawnable in Euler angles
	rotation = Returns the world rotation of the spawnable as a Quaternion
}
```

```   
public static class InstancesApi
    {
        #region Public Static Members
        
        public static Action OnConnected;
        public static Action OnDisconnected;
        public static Action OnConnectionLost;
        public static Action OnConnectionRecovered;
        
        /// <summary>
        /// Is the local player connected to the Game Server
        /// </summary>
        public static bool IsConnected
            => NetworkManager.Instance != null
               && NetworkManager.Instance.GameNetwork != null
               && NetworkManager.Instance.GameNetwork.ConnectionState == ConnectionState.Connected;
        
        /// <summary>
        /// Ping to Game Server
        /// </summary>
        public static int Ping => MetaPort.Instance.currentPing;
        
        /// <summary>
        /// Is the current instance the local player's home world instance
        /// </summary>
        public static bool IsHomeInstance => MetaPort.Instance.IsHomeInstance;
        
        /// <summary>
        /// Current instance id
        /// </summary>
        public static string InstanceID => MetaPort.Instance.CurrentInstanceId;

        /// <summary>
        /// Current instance name 
        ///    (Display Name + ID)
        /// </summary>
        public static string InstanceName => MetaPort.Instance.CurrentInstanceName;

        /// <summary>
        /// Current instance privacy
        /// (Public, FriendsOfFriends, Friends, Group, EveryoneCanInvite, OwnerMustInvite)
        /// </summary>
        public static string InstancePrivacy => MetaPort.Instance.CurrentInstancePrivacy;

        // TODO: we need the Game Server to provide this information to clients
        //public static string InstanceOwner => MetaPort.Instance.CurrentInstanceOwnerId;

        // public static PlayerApi GetInstanceOwner()
        //     => PlayerApi.FindPlayerByUserId(MetaPort.Instance.CurrentInstanceOwnerId);
        
        #region Static Members

        [HideFromScripting]
        internal static void Initialize()
        {
            CVRGameEventSystem.Instance.OnConnected.AddListener((_) => OnConnected?.Invoke());
            CVRGameEventSystem.Instance.OnDisconnected.AddListener((_) => OnDisconnected?.Invoke());
            CVRGameEventSystem.Instance.OnConnectionLost.AddListener((_) => OnConnectionLost?.Invoke());
            CVRGameEventSystem.Instance.OnConnectionRecovered.AddListener((_) => OnConnectionRecovered?.Invoke());
        }
        
        #endregion

        #endregion
    }
```

```
public class RemotePlayerApi : PlayerApi
    {
        #region Overrided Properties

        public override bool IsRemote => true;

        public override string Username => _playerEntity.Username;
        public override string UserId => _playerEntity.Uuid;

        public override Vector3 GetPosition => _puppetMaster.transform.position;
        public override Quaternion GetRotation => _puppetMaster.transform.rotation;
        public override Vector3 GetForward => _puppetMaster.transform.forward;

        public override Vector3 GetViewPointPosition => _puppetMaster.GetViewWorldPosition();
        public override Quaternion GetViewPointRotation => _puppetMaster.GetViewWorldRotation();

        public override Vector3 GetVoicePointPosition => _puppetMaster.GetVoiceWorldPosition();
        public override Quaternion GetVoicePointRotation => _puppetMaster.GetVoiceWorldRotation();
        
        public override Vector3 GetGravity => _puppetMaster.GetPlayerGravity();
        public override Vector3 GetGravityDirection => _puppetMaster.GetPlayerGravityDirection();

        #endregion

        #region Public Properties

        /// <summary>
        /// Gets the remote player nameplate position
        /// </summary>
        public Vector3 GetNameplatePosition => _puppetMaster.GetNamePlateWorldPosition();

        /// <summary>
        /// Whether the nameplate is active or not
        /// </summary>
        public bool IsNameplateActive => PlayerNameplate.ShouldDisplayNameplate();

        #endregion

        #region Internal Behavior

        [HideFromScripting]
        private readonly CVRPlayerEntity _playerEntity;

        [HideFromScripting]
        private readonly PuppetMaster _puppetMaster;

        [HideFromScripting]
        public RemotePlayerApi(CVRPlayerEntity playerEntity)
        {
            _playerEntity = playerEntity;
            _puppetMaster = playerEntity.PuppetMaster;
            AvatarAnimatorManager = playerEntity.PuppetMaster.animatorManager;
        }

        #endregion

    }
```

```
public abstract class PlayerApi
    {

        #region Public Static Members

        /// <summary>
        /// Called when a remote Player joins the instance
        /// </summary>
        public static Action<RemotePlayerApi> OnPlayerJoined;

        /// <summary>
        /// Call when a remote Player leaves the instance
        /// </summary>
        public static Action<RemotePlayerApi> OnPlayerLeft;

        public static LocalPlayerApi LocalPlayer => _localPlayer;
        public static ReadOnlyCollection<PlayerApi> AllPlayers => AllPlayersInternal.AsReadOnly();
        public static ReadOnlyCollection<RemotePlayerApi> RemotePlayers => RemotePlayersInternal.AsReadOnly();
        public static int PlayerCount => AllPlayersInternal.Count;
        
        public static PlayerApi FindPlayerByUsername(string username)
        {
            foreach (PlayerApi player in AllPlayersInternal)
                if (player.Username == username) return player;
            return null;
        }
        
        public static PlayerApi FindPlayerByUserId(string userId)
        {
            foreach (PlayerApi player in AllPlayersInternal)
                if (player.UserId == userId) return player;
            return null;
        }

        #endregion

        #region Public Members

        /// <summary>
        /// Called when the avatar for this player Loads
        /// </summary>
        public Action<AvatarApi> OnAvatarLoaded;

        /// <summary>
        /// Call when the avatar for this player Clears
        /// </summary>
        public Action<AvatarApi> OnAvatarClear;

        #region Public Properties

        /// <summary>
        /// Whether this is the local player or not
        /// </summary>
        public virtual bool IsLocal => false;

        /// <summary>
        /// Whether this is a remote player or not
        /// </summary>
        public virtual bool IsRemote => false;


        /// <summary>
        /// The Player's Username
        /// </summary>
        public abstract string Username { get; }

        /// <summary>
        /// The Player's Unique ID
        /// </summary>
        public abstract string UserId { get; }


        /// <summary>
        /// Get the player's Avatar Api
        /// </summary>
        public AvatarApi Avatar { get; private set; }


        #region Position & Rotations

        /// <summary>
        /// Player position in world space
        /// </summary>
        public abstract Vector3 GetPosition { get; }

        /// <summary>
        /// Player rotation in world space
        /// </summary>
        public abstract Quaternion GetRotation { get; }

        /// <summary>
        /// Normalized vector representing the forward (blue axis) of the Player in world space
        /// </summary>
        public abstract Vector3 GetForward { get; }

        /// <summary>
        /// Player's viewpoint position in world space
        /// </summary>
        public abstract Vector3 GetViewPointPosition { get; }

        /// <summary>
        /// Player's viewpoint rotation in world space
        /// </summary>
        public abstract Quaternion GetViewPointRotation { get; }

        /// <summary>
        /// Player's voice point position in world space
        /// </summary>
        public abstract Vector3 GetVoicePointPosition { get; }

        /// <summary>
        /// Player's voice point rotation in world space
        /// </summary>
        public abstract Quaternion GetVoicePointRotation { get; }

        #endregion

        #region Gravity

        /// <summary>
        /// Player's current gravity
        /// </summary>
        public abstract Vector3 GetGravity { get; }
        
        /// <summary>
        /// Player's current gravity direction
        /// </summary>
        public abstract Vector3 GetGravityDirection { get; }
        
        #endregion
        
        // Todo:
        // GetDeviceType

        #region Core Parameters

        public float GetMovementX => AvatarAnimatorManager.MovementX;

        public float GetMovementY => AvatarAnimatorManager.MovementY;

        public bool IsGrounded => AvatarAnimatorManager.Grounded;

        public bool IsCrouching => AvatarAnimatorManager.Crouching;

        public bool IsProne => AvatarAnimatorManager.Prone;

        public bool IsFlying => AvatarAnimatorManager.Flying;

        public bool IsSitting => AvatarAnimatorManager.Sitting;

        public bool IsSwimming => AvatarAnimatorManager.Swimming;

        public float GetGestureRight => AvatarAnimatorManager.GestureRight;

        public float GetGestureLeft => AvatarAnimatorManager.GestureLeft;

        public int GetToggleId => AvatarAnimatorManager.Toggle;

        public int GetEmoteId => AvatarAnimatorManager.Emote;

        public bool IsCancelingEmote => AvatarAnimatorManager.CancelEmote;

        public float GetDistanceTo => AvatarAnimatorManager.DistanceTo;

        public int GetVisemeIdx => AvatarAnimatorManager.VisemeIdx;

        public float GetVisemeLoudness => AvatarAnimatorManager.VisemeLoudness;

        #endregion

        #endregion

        #endregion
```