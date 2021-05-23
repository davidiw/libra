initSidebarItems({"enum":[["Capability","Represents actions"],["Error",""],["Identity","Id represents a Diem internal identifier for a given process. For example, safety_rules or key_manager. It is up to the Storage and its deployment to translate these identifiers into verifiable material. For example, the process running safety_rules may have a token that is intended for only safety_rules to own. The specifics are left to the implementation of the storage backend interface layer."],["Storage","This is the Diem interface into secure storage. Any storage engine implementing this trait should support both key/value operations (e.g., get, set and create) and cryptographic key operations (e.g., generate_key, sign and rotate_key). This is a hack that allows us to convert from SecureBackend into a useable T: Storage. This boilerplate can be 100% generated by a proc macro."]],"fn":[["from_base64",""],["to_base64",""]],"struct":[["GetResponse","A container for a get response that contains relevant metadata and the value stored at the given key."],["GitHubStorage","GitHubStorage leverages a GitHub repository to provide a file system approach to key / value storage.  This is not intended for storing private data but for organizing public data."],["InMemoryStorage","InMemoryStorage represents a key value store that is purely in memory and intended for single threads (or must be wrapped by a Arc<RwLock<>>). This provides no permission checks and simply is a proof of concept to unblock building of applications without more complex data stores. Internally, it retains all data, which means that it must make copies of all key material which violates the Diem code base. It violates it because the anticipation is that data stores would securely handle key material. This should not be used in production."],["NamespacedStorage","This provides a light wrapper around KV storages to support a namespace. That namespace is effectively prefixing all keys with then namespace value and “/” so a namespace of foo and a key of bar becomes “foo/bar”. Without a namespace, the key would just be “bar”. This matches how this library implements namespaces for Vault."],["OnDiskStorage","OnDiskStorage represents a key value store that is persisted to the local filesystem and is intended for single threads (or must be wrapped by a Arc<RwLock<>>). This provides no permission checks and simply offers a proof of concept to unblock building of applications without more complex data stores. Internally, it reads and writes all data to a file, which means that it must make copies of all key material which violates the Diem code base. It violates it because the anticipation is that data stores would securely handle key material. This should not be used in production."],["Permission","Maps an identity to a set of capabilities"],["Policy","Dictates a set of permissions"],["PublicKeyResponse",""],["VaultStorage","VaultStorage utilizes Vault for maintaining encrypted, authenticated data for Diem. This version currently matches the behavior of OnDiskStorage and InMemoryStorage. In the future, Vault will be able to create keys, sign messages, and handle permissions across different services. The specific vault service leveraged herein is called KV (Key Value) Secrets Engine - Version 2 (https://www.vaultproject.io/api/secret/kv/kv-v2.html). So while Diem Secure Storage calls pointers to data keys, Vault has actually a secret that contains multiple key value pairs."]],"trait":[["CryptoKVStorage","CryptoKVStorage offers a CryptoStorage implementation by extending a key value store (KVStorage) to create and manage cryptographic keys. This is useful for providing a simple CryptoStorage implementation based upon an existing KVStorage engine (e.g. for test purposes)."],["CryptoStorage","CryptoStorage provides an abstraction for secure generation and handling of cryptographic keys."],["KVStorage","A secure key/value storage engine. Create takes a policy that is enforced internally by the actual backend. The policy contains public identities that the backend can translate into a unique and private token for another service. Hence get and set internally will pass the current service private token to the backend to gain its permissions."]]});