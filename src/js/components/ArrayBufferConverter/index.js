export default class ArrayBufferConverter {
  constructor() {
    this.buffer = new Uint16Array();
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return String.fromCharCode(...this.buffer);
  }
}
