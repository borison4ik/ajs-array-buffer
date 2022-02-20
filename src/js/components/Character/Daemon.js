import MathCaracter from './MathCaracter';

export default class Daemon extends MathCaracter {
  constructor(options) {
    super({ ...options, type: 'Daemon' });
    this.attack = 10;
    this.defence = 40;
  }
}
