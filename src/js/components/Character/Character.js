export default class Character {
  constructor(options) {
    this.optionsNames = ['name', 'type'];
    this.typeNames = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    this.checkOptions(options);
    this.health = 100;
    this.level = 1;
    this.attack = options?.attack ? options.attack : 0;
    this.defence = options?.defence ? options.defence : 0;
  }

  checkOptions(options) {
    if (!Object.keys(options).length) {
      throw new Error('not found options object');
    }
    this.optionsNames.forEach((item) => {
      if (!Object.hasOwnProperty.call(options, item)) {
        throw new Error(`not found ${item} property`);
      }
    });
    if (typeof options.type !== 'string' || !this.typeNames.find((item) => item === options.type)) {
      throw new Error(`options.type should be 'String' and one of ${this.typeNames}`);
    }
    if (typeof options.name !== 'string' || options.name.length < 2 || options.name.length > 10) {
      throw new Error('options.name should be "String" and min 2 max 10 length');
    }

    this.name = options.name;
    this.type = options.type;
  }

  levelUp() {
    if (!this.health > 0) {
      throw new Error('dont level up for dead Character');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Character is already dead');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
