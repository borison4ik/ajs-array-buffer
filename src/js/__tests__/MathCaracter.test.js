import Magician from '../components/Character/Magician';

describe('MathCaracter:', () => {
  const john = new Magician({ name: 'John' });

  test('MathCaracter should calculate attack with stoned', () => {
    john.attack = 100;
    john.distance = 2;
    john.stoned = true;
    expect(john.attack).toBe(85);
  });
  test('MathCaracter should calculate attack not stoned', () => {
    john.attack = 100;
    john.distance = 2;
    john.stoned = false;
    expect(john.attack).toBe(90);
    expect(john.distance).toBe(2);
    expect(john.stoned).toBe(false);
  });
  test('MathCaracter should calculate attack maxratio not stoned', () => {
    john.attack = 100;
    john.distance = 12;
    john.stoned = false;
    expect(john.attack).toBe(60);
    expect(john.distance).toBe(12);
    expect(john.stoned).toBe(false);
  });
  test('MathCaracter should return 0 attack', () => {
    john.attack = 10;
    john.distance = 5;
    john.stoned = true;
    expect(john.attack).toBe(0);
    expect(john.distance).toBe(5);
    expect(john.stoned).toBe(true);
  });
});
