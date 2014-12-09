'use strict';
var should = require('should');
var quicksortjs = require('../lib/quicksortjs.js');


var originalArray, expectedArray,
    originalStringArray, expectedStringArray;

var setUp = function() {
  originalArray = [ 1, 44, 12, 3, 2, 19, 7 ];
  expectedArray = [ 1, 2, 3, 7, 12, 19, 44 ];

  originalStringArray = [ 'foo', 'bar', 'baz', 'baa', 'hello', 'world' ];
  expectedStringArray = [ 'baa', 'bar', 'baz', 'foo', 'hello', 'world' ];
}


describe("quicksort", function() {
    before(setUp);

    it('quicksort should sort an array', function() {
      quicksortjs.sort(originalArray).should.eql(expectedArray);
    });

    it('quicksort should sort a string array', function() {
      quicksortjs.sort(originalStringArray).should.eql(expectedStringArray);
    });
});


describe("quicksort2", function() {
    before(setUp);

    it('quicksort v2 should sort an array', function() {
      quicksortjs.sort2(originalArray).should.eql(expectedArray);
    });

    it('quicksort v2 should sort a string array', function() {
      quicksortjs.sort2(originalStringArray).should.eql(expectedStringArray);
    });
});
