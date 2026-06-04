// Design a HashMap without using any built-in hash table libraries. To be specific, your design should include these functions:

// put(key, value): Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
// get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// remove(key): Remove the mapping for the value key if this map contains the mapping for the key.

class myHasmap {

    constructor() {
        this.mapArray = new Array(1000001).fill(-1);
    }
   
    put(key, value) {
        this.mapArray[key] = value;
    }
    get(key) {
        return this.mapArray[key];
    }
    remove(key) {
        this.mapArray[key] = -1;
    }

}

const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1)); // Output: 1
console.log(hashMap.get(3)); // Output: -1 (not found)
hashMap.put(2, 1);
console.log(hashMap.get(2)); // Output: 1 (updated value)
hashMap.remove(2);
console.log(hashMap.get(2)); // Output: -1 (removed)