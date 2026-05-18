// //write a function that transforms an object into a specific keyed structure.
// //eg:const user = {
//   id: 1,
//   profile: {
//     username: "coder123",
//     details: {
//       bio: "Hello world!"
//     }
//   }
// };
// // //o/p- {
//   "id": 1,
//   "profile.username": "coder123",
//   "profile.details.bio": "Hello world!"
// }


//💡 Key thing to remember:
//Every time we hit a nested object we pause, go deeper, 
// get the result, come back and merge it. That's recursion! 😊
function keyify(obj, prefix="")
{
    let result = {};
    //loop through obj
    for(key in obj)
    {
        const value = obj[key];
        //construct path user.address
        const newKey  = prefix ? `${prefix}.${key}`: key;
        if(value && typeof value === "object")
        {
            //recursively merge nested resulta
            const nestedKeys = keyify(value, newKey)
            Object.assign(result, nestedKeys);//mergeing two like Object.assign(result, target) copies all target to result(lik merge)
        }
        else{
            result[key]  = value;
        }
    }
    return result;
}
// if questions comes like 
// Flatten a nested object
// const user = {
//   name: "Alice",
//   address: {
//     city: "Portland",
//     zip: "97201",
//     country: {
//       name: "USA",
//       code: "US"
//     }
//   },
//   age: 30
// };
// Task: Flatten the object so all keys are at the top level.
// Expected output:
// {
//   name: "Alice",
//   age: 30,
//   city: "Portland",
//   zip: "97201",
//   countryName: "USA",
//   countryCode: "US"
// }

function flatten(obj, prefix = "") {
  let result = {};

  for (let key in obj) {
    const value = obj[key];
    
    // create new key name — if prefix exists add it
    const newKey = prefix ? `${prefix}${capitalize(key)}` : key;

    if (value && typeof value === "object") { // ← fix 1: typeof
      const nestedKeys = flatten(value, newKey); // recurse
      Object.assign(result, nestedKeys); // ← fix 2: merge into result
    } else {
      result[newKey] = value;
    }
  }

  return result; // ← fix 3: return result!
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(flatten(user));