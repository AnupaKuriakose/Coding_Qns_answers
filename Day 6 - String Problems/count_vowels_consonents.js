const str2 = "hello world";
let vowels = 0, consonants = 0;

for (let char of str2.toLowerCase()) {
  if ("aeiou".includes(char)) vowels++;
  else if (char >= 'a' && char <= 'z') consonants++;
}

console.log(vowels, consonants); // 3, 7