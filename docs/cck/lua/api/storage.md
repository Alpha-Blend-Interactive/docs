# Storage

The `Storage` global provides access to the script's associated Persistence object.  The Persistence object is where your script can store simple forms of data on a user's computer.

## Bins

We provide two "storage bins:" The `Public` bin and the `Private` bin. Each bin is a property of the Storage global and are almost identical in terms of API. Each bin has a set amount of data that they can store, as well, to prevent malicious scripts from filling up the user's hard drive.

### Public

The Public bin is accessible as `Storage.Public`.  This bin's corresponding file on disk is user-editable, as it is stored as clear-text JSON.  This file is intended to be used for things the user may need to edit, such as configuration or tuning values.

#### Properties

| Name | Type | Notes |
| --- | --- | --- |
| `BytesAllowed` | `int` | <p>How many bytes are allowed for this storage bin, in total. Currently set to `4194304`, which corresponds to 4MiB.</p><p>Does not include data outside of your control that we add during the serialization process, such as encryption stuff, headers, section data, etc.</p> |
| `CurrentSize` | `int` | <p>Current reported size of this storage bin, in bytes.</p><p>Does not include data outside of your control that we add during the serialization process, such as encryption stuff, headers, section data, etc. </p> |
| `IsEncrypted` | `bool` | Whether this storage bin is encrypted on disk. Always `false` for Public bins. |
| `Path` | `string` | Path of the file on disk. |

#### Methods

| Name | Notes |
| --- | --- |
| `GetBoolean(string key) : bool?` | Get the value of a key as a `boolean`, or `nil` if the key is `nil` or not present. |
| `GetNumber(string key) : number?` | Get the value of a key as a `number`, or `nil` if the key is `nil` or missing. |
| `GetString(string key) : string?` | Get the value of a key as a `string`, or `nil` if the key is `nil` or missing. |
| `GetTable(string key) : table?` | Get the value of a key as a `table`, or `nil` if the key is `nil` or missing. |
| `HasValue(string key) : bool` | Determine if the given named `key` is present in the underlying `table`. |
| `Load() : void` | Loads data from disk, if present. |
| `Save() : void` | <p>If anything has changed (if the storage is marked dirty), save to disk.</p><p>A successful save will clear dirtiness.</p> |
| `SetBoolean(string key, bool? value) : void` | <p>Set the value of a key to a `boolean` or `nil`.</p><p>You will need to call `Save()` to commit this change to disk.</p> |
| `SetNumber(string key, number? value) : void` | <p>Set the value of a key to a `number` or `nil`.</p><p>You will need to call `Save()` to commit this change to disk.</p> |
| `SetString(string key, string? value) : void` | <p>Set the value of a key to a `string` or `nil`.</p><p>You will need to call `Save()` to commit this change to disk.</p> |
| `SetTable(string key, table? value) : void` | <p>Set the value of a key to a `table` or `nil`.</p><p>**IMPORTANT:** Any values in the provided table or subtables that are not `nil`, `number`, `boolean`, `table`, or `string` will be silently stripped during serialization!</p><p>You will need to call `Save()` to commit this change to disk.</p> |

### Private

The Private bin is accessible as `Storage.Private`.  This bin's corresponding file on disk is encrypted and stored as a binary format, as it is intended to be used for storing deliberately opaque data, such as a user's score in a game, character levels, *et cetera*.

#### Properties

| Name | Type | Notes |
| --- | --- | --- |
| `BytesAllowed` | `int` | <p>How many bytes are allowed for this storage bin, in total. Currently set to `4194304`, which corresponds to 4MiB.</p><p>Does not include data outside of your control that we add during the serialization process, such as encryption stuff, headers, section data, etc.</p> |
| `CurrentSize` | `int` | <p>Current reported size of this storage bin, in bytes.</p><p>Does not include data outside of your control that we add during the serialization process, such as encryption stuff, headers, section data, etc.</p> |
| `IsEncrypted` | `bool` | Whether this storage bin is encrypted on disk. Always `false` for Private bins. |
| `Path` | `string` | Path of the file on disk. |

#### Methods

| Name | Notes |
| --- | --- |
| `GetBoolean(string key) : bool?` | Get the value of a key as a `boolean`, or `nil` if the key is `nil` or not present. |
| `GetNumber(string key) : number?` | Get the value of a key as a `number`, or `nil` if the key is `nil` or missing. |
| `GetString(string key) : string?` | Get the value of a key as a `string`, or `nil` if the key is `nil` or missing. |
| `GetTable(string key) : table?` | Get the value of a key as a `table`, or `nil` if the key is `nil` or missing. |
| `HasValue(string key) : bool` | Determine if the given named `key` is present in the underlying `table`. |
| `Load() : void` | Loads data from disk, if present. |
| `Save() : void` | <p>If anything has changed (if the storage is marked dirty), save to disk.</p><p>A successful save will clear dirtiness.</p> |
| `SetBoolean(string key, bool? value) : void` | <p>Set the value of a key to a `boolean` or `nil`.</p><p>You will need to call `Save()` to commit this change to disk.</p> |
| `SetNumber(string key, number? value) : void` | <p>Set the value of a key to a `number` or `nil`.</p><p>You will need to call `Save()` to commit this change to disk.</p> |
| `SetString(string key, string? value) : void` | <p>Set the value of a key to a `string` or `nil`.</p><p>You will need to call `Save()` to commit this change to disk.</p> |
| `SetTable(string key, table? value) : void` | <p>Set the value of a key to a `table` or `nil`.</p><p>**IMPORTANT:** Any values in the provided table or subtables that are not `nil`, `number`, `boolean`, `table`, or `string` will be silently stripped during serialization!</p><p>You will need to call `Save()` to commit this change to disk.</p> |