import { deepFreeze } from '../src/deepFreeze';

import { maskToBits } from '../src/maskToBits';

const object = {
    test: 'a',
    b: 'b',
};

const a = 12345;

let b;

object = deepFreeze(object);

deepFreeze(a);

const ab = maskToBits(a);

console.log(ab);

const z = ab + 1;
