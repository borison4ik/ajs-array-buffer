import Magican from './js/components/Character/Magician';
import Daemon from './js/components/Character/Daemon';

import ArrayBufferConverter from './js/components/ArrayBufferConverter';
import getBuffer from './js/components/getBuffer';

const demon = new Daemon({ name: 'John' });

demon.attack = 10;
demon.distance = 5;
demon.stoned = true;
console.log(demon);
console.log(demon.attack);

const converter = new ArrayBufferConverter();
converter.load(getBuffer());
converter.toString();
console.log(converter.toString());
