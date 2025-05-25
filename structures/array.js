class ArrayDS {
  constructor() {
    this.data = [];
  }

  insert(value) {
    this.data.push(value);
  }

  remove(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index out of bounds");
    }
  }

  display() {
    return this.data;
  }

  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index out of bounds");
    }
    return this.data[index];
  }

  update(index, value) {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index out of bounds");
    }
    this.data[index] = value;
  }
}
