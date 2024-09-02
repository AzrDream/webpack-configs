import {a as count, changeA} from './a.js';

console.log(count);
changeA();
console.log(count);

import('./b.js').then(res => console.log(res));