import ArrayBufferConverter from '../components/ArrayBufferConverter';
import getBuffer from '../components/getBuffer';

describe('ArrayBufferConverter class: ', () => {
  const stringCase = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  test('ArrayBufferConverter should return a string', () => {
    expect(converter.toString()).toBe(stringCase);
  });
});
