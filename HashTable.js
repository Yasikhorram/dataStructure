function hash(key, length) {
  var total = 0;
  for (let char of key) {
    total += char.charCodeAt(0) - 96;
  }
  return total % length;
}

console.log(hash("cyan", 10));
