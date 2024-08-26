class RandomizedSet {
  data;

  constructor() {
    this.data = {};
  }

  insert(val: number): boolean {
    if (this.data[val]) return false;
    return (this.data[val] = true);
  }

  remove(val: number): boolean {
    if (!this.data[val]) return false;
    delete this.data[val];
    return true;
  }

  getRandom(): number {
    const keys = Object.keys(this.data);
    const num = Math.floor(Math.random() * keys.length);
    return Number(keys[num]);
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
