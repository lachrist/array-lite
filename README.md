# ArrayLite

Tiny array utility which does not access the global object.
This module was developped to produce code resilient to modification of the global object.
It provides a significantly faster alternative to performing `Reflect.apply` on `Array.prototype`'s methods.

Below are the functions provided by this module.
They are inspired from `Array.prototype`'s method of the same name.
The main difference is that the array is passed as the first argument rather than the `this` argument.
Also, it is not possible to specify the `this` argument passed to callback functions (e.g.: `forEach`, `map`, `filter`, etc).
Additional differences are put in parenthesis.

* `concat` (all arguments should be array-like objects)
* `every`
* `filter`
* `find`
* `findIndex`
* `flat` (each element of the array should be an array-like object, does not accept a `depth` argument)
* `flatMap` (each element of the value returned by the `callback` should be an array-like object)
* `forEach`
* `includes`
* `indexOf`
* `join` (`separator` argument is mandatory)
* `lastIndexOf` (does not accept a `fromIndex` argument)
* `map`
* `reduce` (`initialValue` argument is mandatory)
* `reduceRight` (`initialValue` argument is mandatory)
* `reverse` (`begin` and `end` argument are both mandatory)
* `slice`
* `some`
