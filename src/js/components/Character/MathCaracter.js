import Character from './Character';

export default class MathCaracter extends Character {
  constructor(options) {
    super(options);
    this._stoned = true;
    this._distance = 2;
    this.attackRatio = [1, 0.9, 0.8, 0.7, 0.6];
  }

  set distance(value) {
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    const ratio = this._distance <= 5 ? this._distance - 1 : 4;
    if (!this._stoned) {
      return this._attack * this.attackRatio[ratio];
    }
    const stonedAttack = this._attack * this.attackRatio[ratio] - Math.log2(this._distance) * 5;
    return stonedAttack > 0 ? stonedAttack : 0;
  }

  set attack(value) {
    this._attack = value;
  }
}
