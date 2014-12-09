#!/usr/bin/env node
var quicksortjs = require('../lib/quicksortjs');

if (process.argv.length > 2) {
  var parseIntIfNum = function(string) {
    return isNaN(string) ? string : parseInt(string);
  };

  if (process.argv[2] === '-v2' || process.argv[2] === '--version2')
    console.log( quicksortjs.quicksort2(process.argv
                                          .slice(3, process.argv.length)
                                          .map(parseIntIfNum)) );
  else
    console.log( quicksortjs.quicksort(process.argv
                                         .slice(2, process.argv.length)
                                         .map(parseIntIfNum)) );
}
else {
  console.log('Usage:\n' +
              '  quicksortjs [ -v2 | --version2 ] [ item1 item2 item3 ... ]\n\n' +

              'Options:\n' +
              '  -v2, --version2    Use version 2 of the algorithm\n\n' +

              'Example:\n' +
              '  quicksortjs 331 2 11 5 17 12 5 55 11 3 222\n');
}
