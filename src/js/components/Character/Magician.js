import MathCaracter from './MathCaracter';

export default class Magician extends MathCaracter {
  constructor(options) {
    super({ ...options, type: 'Magician' });
    this.attack = 10;
    this.defence = 40;
  }
}
