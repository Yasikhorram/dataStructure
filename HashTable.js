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
