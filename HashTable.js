const { ThumbDown } = require("@mui/icons-material");

class HashTable {
  // we give it a default value of 53 to be a prime number
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let indx = this._hash(key);
    if (this.keyMap[indx]) {
      this.keyMap[indx].push([key, val]);
    } else {
      this.keyMap[indx] = [key, val];
    }
    return this.keyMap;
  }

  get(key) {
    let indx = this._hash(key);
    if (this.keyMap[indx]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[indx][i][0]) {
          return this.keyMap[indx][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; i < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }
}

let ht = new HashTable();
console.log(ht.set("hello world", "goodbye"));
