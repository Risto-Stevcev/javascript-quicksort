/**
 * @module quicksortjs
 * @author Risto Stevcev
 */


/**
 * @method
 * @param {Array} array An array to sort
 * @returns {Array} The sorted array
 */
exports.sort = function sort(array) {
  if (array.length === 0) 
    return [];
  var x = array.pop();
  var smallerSorted = sort(array.filter(function(e) { return e <= x; }));
  var biggerSorted  = sort(array.filter(function(e) { return e > x; }));
  return Array.prototype.concat(smallerSorted, [x], biggerSorted);
};


/**
 * @method
 * @param {Array} array An array to sort
 * @returns {Array} The sorted array
 */
exports.sort2 = function sort2(list) {
  function __sort2__(list, left, right) {
    var swap = function(list, a, b) {
      var temp = list[a];
      list[a] = list[b];
      list[b] = temp;
    };

    var partition = function(list, left, right, pivotidx) {
      var pivot = list[pivotidx];
      swap(list, right, pivotidx);

      for (var i = left; i < right; i++) {
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
      __sort2__(list, left, pivotidx);
      __sort2__(list, pivotidx+1, right);
    }
    return list;
  }
  return __sort2__(list, 0, list.length - 1);
};
