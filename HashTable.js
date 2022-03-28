class HashTable {
  // we give it a default value of 53 to be a prime number
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
}

function hash(key, length) {
  let total = 0;
  let prime = 31;

  for (let i = 0; i < Math.min(key.length, length); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % length;
  }
  return total;
}

console.log(hash("hello", 13));
