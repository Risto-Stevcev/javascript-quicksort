/**
 * @module quicksortjs
 * @author Risto Stevcev
 */


/**
 * @method
 * @param {Array} array An array to sort
 * @returns {Array} The sorted array
 */
exports.quicksort = function quicksort(array) {
  if (array.length === 0) 
    return [];
  var x = array.pop();
  var smallerSorted = quicksort(array.filter(function(e) { return e <= x; }));
  var biggerSorted  = quicksort(array.filter(function(e) { return e > x; }));
  return Array.prototype.concat(smallerSorted, [x], biggerSorted);
};


/**
 * @method
 * @param {Array} array An array to sort
 * @returns {Array} The sorted array
 */
exports.quicksort2 = function quicksort2(list) {
  function __quicksort2__(list, left, right) {
    var swap = function(list, a, b) {
      temp = list[a];
      list[a] = list[b];
      list[b] = temp;
    };

    var partition = function(list, left, right, pivotidx) {
      pivot = list[pivotidx];
      swap(list, right, pivotidx);

      for (i = left; i < right; i++) {
        if (list[i] < pivot) {
          swap(list, i, left);
          left++;
        }
      }
      swap(list, left, right);
      return left;
    };

    if (right > left) {
      pivotidx = Math.floor(Math.random() * (right - left + 1)) + left;
      pivotidx = partition(list, left, right, pivotidx);
      __quicksort2__(list, left, pivotidx);
      __quicksort2__(list, pivotidx+1, right);
    }
    return list;
  }
  return __quicksort2__(list, 0, list.length - 1);
}
