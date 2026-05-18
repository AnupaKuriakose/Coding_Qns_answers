// //https://leetcode.com/problems/lru-cache/description/
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// //lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
// 2. Why no let and how is it collected?
// Class Syntax (Why no let)
// In JavaScript classes, you do not use let, const, or var to declare properties.
// Inside the constructor: Using this.capacity creates an instance property. 
// It belongs specifically to the object created by new LRUCache().
// Outside the constructor: Modern JS allows Class Fields (e.g., capacity = 0; at the top),
//  but still without let.
// Scope and Garbage Collection (GC)
// Using this.capacity does not make the variable global.
// Scope: The property is scoped to the specific instance of the class. If you have cacheA and cacheB, they each have their own independent capacity and cache Map.
// Garbage Collection: These properties are not global. They are eligible for Garbage Collection as soon as the instance variable (e.g., myCache) goes out of scope or is set to null.

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // To make it "Recently Used", delete and re-insert it
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, data) {
    // 1. If key exists, delete it so we can re-insert at the "end" (most recent)
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // 2. If at capacity, delete the "first" item (least recently used)
    if (this.cache.size >= this.capacity) {
      // The keys().next().value trick gets the oldest key in the Map
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, data);
  }
}

const myCache = new LRUCache(2); // Set capacity to 2

myCache.put(1, "A");
myCache.put(2, "B");
console.log(myCache.get(1)); // Returns "A", moves 1 to the end (most recent)
myCache.put(3, "C"); 