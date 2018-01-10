
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

function assert (x, y) {
  if (!equal(x, y)) {
    throw new Error("Assertion failure: "+stringify(x)+" is not equal to "+stringify(y))
  }
}

assert(ArrayLite.join([1,2,3], ","), "1,2,3")

assert(ArrayLite.flaten([[1,2,3], [4,5,6]]), [1,2,3,4,5,6]);

assert(ArrayLite.concat([1,2,3], [4,5,6]), [1,2,3,4,5,6]);

assert(ArrayLite.any([1,2,3], function (x) { return x===2 }), true);

assert(ArrayLite.any([1,2,3], function (x) { return x===4 }), false);

assert(ArrayLite.all([1,2,3], function (x) { return x<4 }), true);

assert(ArrayLite.all([1,2,3], function (x) { return x<3 }), false);

assert(ArrayLite.contain([1,2,3], 2), true);

assert(ArrayLite.contain([1,2,3], 4), false);

assert(ArrayLite.map([1,2,3], function (x) { return 2*x }), [2,4,6]);

assert(ArrayLite.zipmap([1,2,3], [null, function (x) { return 2*x }]), [1,4,3]);

assert(ArrayLite.filter([1,2,3,4,5,6], function (x) { return x % 2 === 0 }), [2,4,6]);

var sum = 0;
ArrayLite.each([1,2,3,4], function (x) { sum += x });
assert(sum, 10);

assert(ArrayLite.reduce([1,2,3,4], function (r, x) { return r + x}, 0), 10);

assert(ArrayLite.last([1,2,3,4]), 4);

assert(ArrayLite.slice([1,2,3], null, null), [1,2,3]);

assert(ArrayLite.slice([1,2,3,4,5,6], 1, 4), [2,3,4]);

assert(ArrayLite.prefix([1,2,3], [1,2,3,4,5,6]), true);

assert(ArrayLite.prefix([1,3,2], [1,2,3,4,5,6]), false);
