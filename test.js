
// nyc --reporter=html --include main.js node test.js ; open coverage/index.html
// nyc --check-coverage --branches 100 --functions 100 --lines 100 --statements 100 --include main.js node test.js

const ArrayLite = require("./main.js");
const Assert = require("assert").strict;

Assert.deepEqual(ArrayLite.join([1,2,3], ","), "1,2,3")
Assert.deepEqual(ArrayLite.join([], ","), "");

Assert.deepEqual(ArrayLite.flat([[1,2,3], [4,5,6]]), [1,2,3,4,5,6]);

Assert.deepEqual(ArrayLite.concat([1,2,3], [4,5,6]), [1,2,3,4,5,6]);

Assert.deepEqual(ArrayLite.some([1,2,3], (x) => x === 2), true);
Assert.deepEqual(ArrayLite.some([1,2,3], (x) => x === 4), false);

Assert.deepEqual(ArrayLite.every([1,2,3], (x) => x < 4), true);
Assert.deepEqual(ArrayLite.every([1,2,3], (x) => x < 3), false);

Assert.deepEqual(ArrayLite.includes([1,2,3], 2), true);
Assert.deepEqual(ArrayLite.includes([1,2,3], 4), false);

Assert.deepEqual(ArrayLite.map([1,2,3], (x) => 2 * x), [2,4,6]);

Assert.deepEqual(ArrayLite.flatMap([1,2,3], (x) => [x,x]), [1,1,2,2,3,3])

Assert.deepEqual(ArrayLite.filter([1,2,3,4,5,6], (x) => x % 2 === 0), [2,4,6]);

Assert.deepEqual(ArrayLite.reverse([1,2,3]), [3,2,1]);

let sum = 0;
ArrayLite.forEach([1,2,3,4], (x) => sum += x);
Assert.deepEqual(sum, 10);

Assert.deepEqual(ArrayLite.find([1,2,3], (x) => x % 2 === 0), 2);

Assert.deepEqual(ArrayLite.findIndex([1,2,3], (x) => x % 2 === 0), 1);
Assert.deepEqual(ArrayLite.findIndex([1,3,5], (x) => x % 2 === 0), -1);

Assert.deepEqual(ArrayLite.reduce(["1","2","3"], (r, x) => r + x, "0"), "0123");

Assert.deepEqual(ArrayLite.reduceRight(["1","2","3"], (r, x) => r + x, "4"), "4321");

Assert.deepEqual(ArrayLite.slice([1,2,3,4,5,6], 1, 4), [2,3,4]);

Assert.deepEqual(ArrayLite.indexOf([1,2,3,2], 2), 1);
Assert.deepEqual(ArrayLite.indexOf([1,2,3,2], 5), -1);

Assert.deepEqual(ArrayLite.lastIndexOf([2,1,2,3], 2), 2);
Assert.deepEqual(ArrayLite.lastIndexOf([2,1,2,3], 5), -1);

Assert.deepEqual(ArrayLite.add([1,2,3], 2), [1,2,3]);
Assert.deepEqual(ArrayLite.add([1,2,3], 4), [1,2,3,4]);

Assert.deepEqual(ArrayLite.delete([1,2,3], 2), [1,3]);
Assert.deepEqual(ArrayLite.delete([1,2,3], 4), [1,2,3]);
