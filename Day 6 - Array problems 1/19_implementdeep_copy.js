// Declare object to be cloned
const obj = {
    name: {
        firstName: "alice",
        lastName: null
    },
    address: {
        number: 12345,
        country: "London",
        pincode: 208027
    },
    email: "foo@bar.com",
    hobbies: ["singing", "dancing", "music"],
}

// Declare object to be cloned
const objTwo = {
    a: null,
    b: true
}


// Function to deep copy an existing object 
// and return new object
function deepCopy(obj) {

    // Declare object which will store the output
    const result = {};

    // If the object isnt of type object or 
    // object is null, undefined, is an Array
    // or a function then no need to iterate
    // over it and simply return it
    if (typeof obj !== "object" || 
        typeof obj === undefined || 
        obj === null || 
        Array.isArray(obj) || 
        typeof obj == "function") {
        return obj;
    }

    // Store the keys of the object
    const keys = Object.keys(obj);

    // Iterate through the keys of the
    // object retrieved above
    for (let key in keys) {
    
        // Recursively iterate through each of the key.
        result[keys[key]] = deepCopy(obj[keys[key]])
    }
    return result;
}

const deepCopiedObject = deepCopy(obj)

const deepCopiedObjectTwo = deepCopy(objTwo);

// Modifying property country
obj.address.country = "india" 
console.log(deepCopiedObject)
console.log(obj)

objTwo.a = "gfg";
console.log(deepCopiedObjectTwo)
console.log(objTwo)