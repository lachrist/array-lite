
var ArrayLite = require("./main.js");
var isArray = Array.isArray;
var stringify = JSON.stringify;

function equal (x, y) {
  if (!isArray(x) || !isArray(x)) {
    return x === y;
  }
  if (x.length !== y.length) {
    return false;
  }
  var index = 0;
  var length = x.length;
  while (index < length) {
    if (x[index] !== y[index++]) {
      return false;
    }
  }
  return true;
}

var counter = 0;

function assert (x, y) {
  if (!equal(x, y)) {
    throw new Error("Assertion failure: "+stringify(x)+" is not equal to "+stringify(y))
  }
  counter++;
}

assert(ArrayLite.join([1,2,3], ","), "1,2,3")

assert(ArrayLite.flat([[1,2,3], [4,5,6]]), [1,2,3,4,5,6]);

assert(ArrayLite.concat([1,2,3], [4,5,6]), [1,2,3,4,5,6]);

assert(ArrayLite.some([1,2,3], function (x) { return x===2 }), true);

assert(ArrayLite.some([1,2,3], function (x) { return x===4 }), false);

assert(ArrayLite.every([1,2,3], function (x) { return x<4 }), true);

assert(ArrayLite.every([1,2,3], function (x) { return x<3 }), false);

assert(ArrayLite.includes([1,2,3], 2), true);

assert(ArrayLite.includes([1,2,3], 4), false);

assert(ArrayLite.map([1,2,3], function (x) { return 2*x }), [2,4,6]);

assert(ArrayLite.flatMap([1,2,3], function (x) { return [x,x] }), [1,1,2,2,3,3])

assert(ArrayLite.filter([1,2,3,4,5,6], function (x) { return x % 2 === 0 }), [2,4,6]);

assert(ArrayLite.reverse([1,2,3]), [3,2,1]);

var sum = 0;
ArrayLite.forEach([1,2,3,4], function (x) { sum += x });
assert(sum, 10);

assert(ArrayLite.find([1,2,3], function (x) { return x % 2 === 0 }), 2);

assert(ArrayLite.findIndex([1,2,3], function (x) { return x % 2 === 0 }), 1);

assert(ArrayLite.reduce(["1","2","3"], function (r, x) { return r + x}, "0"), "0123");

assert(ArrayLite.reduceRight(["1","2","3"], function (r, x) { return r + x}, "4"), "4321");

assert(ArrayLite.slice([1,2,3,4,5,6], 1, 4), [2,3,4]);

assert(ArrayLite.indexOf([1,2,3,2], 2), 1);

assert(ArrayLite.lastIndexOf([2,1,2,3], 2), 2);

assert(ArrayLite.orMap([1,2,3], (x) => x > 3), false);

assert(ArrayLite.orMap([1,2,3,4], (x) => x > 3), true);

assert(ArrayLite.andMap([1,2,3], (x) => x <= 3), true);

assert(ArrayLite.andMap([1,2,3,4], (x) => x <= 3), false);

console.log(counter + " assertions passed");