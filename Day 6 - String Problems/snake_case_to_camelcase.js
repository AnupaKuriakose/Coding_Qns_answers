//Capitalize all words except first.
//inp-hello_world_test

const snake = "hello_world_test";

const camel = snake.split('_')
  .map((word, index) =>
    index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join('');

console.log(camel); // "helloWorldTest"
//Capitalize first letter of each word
const sentence = "hello world";

const capitalized = sentence.split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');

console.log(capitalized); // "Hello World"