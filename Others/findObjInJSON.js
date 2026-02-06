//Target a given value in a nested JSON object
const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};
//function
const dig = (obj, target) => {
  if (obj[target]) return obj[target];
  for (prop in obj) {
    if (typeof obj[prop] === "object") {
      const result = dig(obj[prop], target);
      if (result) return result;
    }
  }
  return undefined;
};
console.log(dig(data, "level3"));
console.log(dig(data, "level4"));
console.log(dig(dog, "message"));
