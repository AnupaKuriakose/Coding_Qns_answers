// We use 2 things:

// 1. HashMap
// key → node reference
// 2. Doubly Linked List
// HEAD <-> ...nodes... <-> TAIL
// 👉 Rules:
// Head.next = Most Recently Used (MRU)
// Tail.prev = Least Recently Used (LRU)
// Your version (Map)
// [2, 1, 3]
// ^         ^
// LRU      MRU
// Classic version (DLL)
// head <-> 3 <-> 1 <-> 2 <-> tail
//           MRU         LRU
//https://www.geeksforgeeks.org/dsa/lru-cache-implementation-using-double-linked-lists/

class Node {
  constructor(key, value, expiry) {
    this.key = key;
    this.value = value;
    this.expiry = expiry;
    this.prev = null;
    this.next = null;
  }
}