// Implement an LRU cache with serialization and evolving constraints
// 👉 LRU cache = store limited items + remove least recently used
// Now interview adds:

// 🔶 “with serialization and evolving constraints”
// This means:
// 1. Serialization
// 👉 “Can your cache be saved and restored?”
// Real-world examples:

// Save cache before app reload
// Send cache over API
// Persist in localStorage
// 2. Evolving Constraints
// 👉 “Can your cache handle new rules later?”

// Examples:
// Items expire after time (TTL)
// Cache limited by memory, not count
// Different eviction rules
// ✅ LRU behavior
// ✅ TTL (expiry)- time to live "evolving constraints" (TTL)
// ✅ Eviction (capacity)
// ✅ Serialization + Deserialization
// Each entry looks like:

// {
//   key: {
//     value: "A",
//     expiry: 1710000000000
//   }
// }
// . Serialization (Saving the State)
// Serialization is the process of converting a "live" data structure (like your Map)
//  into a format that can be stored or transmitted (like a String).
// In your code: JSON.stringify([...this.cache]).
// The Problem: You can’t save a JavaScript Map directly to a database or local storage
// because those systems only understand strings.
// The Solution: You spread the Map into an Array of Arrays [[key, value], [key, value]]. This array format is "JSON-safe," meaning it can be turned into a string and saved to a file or sent over an API.
// 2. Deserialization (Restoring the State)
// Deserialization is the reverse: taking that stored string and turning it back into a
// functional object in memory.
// In your code: new Map(JSON.parse(data)).
// The Process: You take the "dead" string, parse it back into a JavaScript Array, and pass that array into the Map constructor.
// The Result: The cache is "re-hydrated." It restores all the keys, values, expiry timestamps, and—most importantly—the exact LRU order they were in before.
//“I extended my LRU cache to store metadata like expiry, 
// which allows TTL-based invalidation. 
// I also serialize the Map as an array to preserve order and reconstruct it later.”
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const entry = this.cache.get(key);

    if (entry.expiry && Date.now() > entry.expiry) {
      this.cache.delete(key);
      return -1;
    }
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }
  put(key, value, ttl = null) {
    const expiry = ttl ? Date.now() + ttl : null;

    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, { value, expiry });
  }

  //Convert cache → string
  //Map cannot be directly JSON-stringified
  //     Solution:
  // Convert Map → Array then json.stringify
  serialize() {
    const mapArray = [...this.cache];
    return JSON.stringify(mapArray);//👉 Now cache can be:saved,sent, persisted
  }
  //Rebuild cache from saved data "[[1,{"value":"A","expiry":null}]]"
  deserialize(data) {
    const parsed= JSON.parse(data)
    this.cache = new Map(parsed) ;
  }
}

const myCache = new LRUCache(2);

myCache.put(1, "A", 500);
myCache.put(2, "B", 1000);

console.log(myCache.get(1)); // "A"

myCache.put(3, "C", 1000);

console.log(myCache.get(1)); // Likely "A" (still not expired)

// Serialize
const saved = myCache.serialize();
console.log("Serialized:", saved);

// Deserialize
myCache.deserialize(saved);

console.log(myCache.get(3)); // "C"

