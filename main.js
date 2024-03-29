
exports.join = (array, separator) => {
  if (array.length === 0) {
    return "";
  }
  const last_index = array.length - 1;
  let result = "";
  for (let index = 0; index < last_index; index++) {
    result += array[index] + separator;
  }
  return result + array[last_index];
};

exports.flat = (array1) => {
  const result = [];
  let length = 0;
  const length1 = array1.length;
  for (let index1 = 0; index1 < length1; index1++) {
    const array2 = array1[index1];
    const length2 = array2.length;
    for (let index2 = 0; index2 < length2; index2++) {
      result[length++] = array2[index2];
    }
  }
  return result;
};

exports.concat = (...array1) => {
  const result = [];
  let length = 0;
  const length1 = array1.length;
  for (let index1 = 0; index1 < length1; index1++) {
    const array2 = array1[index1];
    const length2 = array2.length;
    for (let index2 = 0; index2 < length2; index2++) {
      result[length++] = array2[index2];
    }
  }
  return result;
};

exports.some = (array, predicate) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
};

exports.every = (array, predicate) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
};

exports.includes = (array, element) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (array[index] === element) {
      return true
    }
  }
  return false;
};

exports.reverse = (array) => {
  const result = [];
  let length = 0;
  for (let index = array.length - 1; index >= 0; index--) {
    result[length++] = array[index];
  }
  return result;
};

exports.map = (array, transform) => {
  const result = [];
  const length = array.length;
  for (let index = 0; index < length; index++) {
    result[index] = transform(array[index], index, array);
  }
  return result;
};

exports.flatMap = (array1, transform) => {
  const result = [];
  let length = 0;
  const length1 = array1.length;
  for (let index1 = 0; index1 < length1; index1++) {
    const array2 = transform(array1[index1], index1, array1);
    const length2 = array2.length;
    for (let index2 = 0; index2 < length2; index2++) {
      result[length++] = array2[index2];
    }
  }
  return result;
};

exports.filter = (array, predicate) => {
  const result = [];
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (predicate(array[index], index, array)) {
      result[result.length] = array[index];
    }
  }
  return result;
};

exports.filterOut = (array, predicate) => {
  const result = [];
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (!predicate(array[index], index, array)) {
      result[result.length] = array[index];
    }
  }
  return result;
};

exports.forEach = (array, procedure) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    procedure(array[index], index, array);
  }
};

exports.mapReduce = (array1, accumulator, finalizer) => {
  const length1 = array1.length;
  if (length1 === 0) {
    return finalizer([]);
  }
  let length2 = 0;
  const array2 = [];
  const next = (element2) => {
    array2[length2++] = element2;
    if (length2 === length1) {
      return finalizer(array2);
    }
    return accumulator(next, array1[length2], length2, array1);
  }
  return accumulator(next, array1[0], 0, array1);
};

exports.reduce = (array, accumulator, result) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    result = accumulator(result, array[index], index, array);
  }
  return result;
};

exports.reduceRight = (array, accumulator, result) => {
  for (let index = array.length - 1; index >= 0; index--) {
    result = accumulator(result, array[index], index, array);
  }
  return result;
};

exports.indexOf = (array, value) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
};

exports.find = (array, predicate) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (predicate(array[index], index, array)) {
      return array[index];
    }
  }
};

exports.findIndex = (array, predicate) => {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

exports.findLastIndex = (array, predicate) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};

exports.lastIndexOf = (array, value) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
};

exports.slice = (array, index, length1) => {
  const result = [];
  let length2 = 0;
  for (; index < length1; index++) {
    result[length2++] = array[index];
  }
  return result;
};

//////////////////
// Set-Inspired //
//////////////////

exports.has = exports.includes;

exports.add = (array1, element) => {
  const length = array1.length;
  for (let index = 0; index < length; index++) {
    if (array1[index] === element) {
      return array1;
    }
  }
  const array2 = [];
  for (let index = 0; index < length; index++) {
    array2[index] = array1[index];
  }
  array2[length] = element;
  return array2;
};

exports.delete = (array1, element) => {
  const length = array1.length;
  for (let index1 = 0; index1 < length; index1++) {
    if (array1[index1] === element) {
      const array2 = [];
      let index2 = 0;
      for (; index2 < index1; index2++) {
        array2[index2] = array1[index2];
      }
      for (; index2 < length - 1; index2++) {
        array2[index2] = array1[index2 + 1];
      }
      return array2;
    }
  }
  return array1;
};

exports.repeat = (element, length) => {
  const array = [];
  for (let index = 0; index < length; index++) {
    array[index] = element;
  }
  return array;
};

exports.zip = (array1, array2) => {
  const length = array1.length > array2.length ? array2.length : array1.length
  const array = [];
  for (let index = 0; index < length; index ++) {
    array[index] = [array1[index], array2[index]];
  }
  return array;
};

exports.unzip = (array) => {
  const array1 = [];
  const array2 = [];
  const length = array.length;
  for (let index = 0; index < length; index ++) {
    array1[index] = array[index][0];
    array2[index] = array[index][1];
  }
  return [array1, array2];
};
