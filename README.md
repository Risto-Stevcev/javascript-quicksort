# QuickSort

[![Build Status](https://travis-ci.org/Risto-Stevcev/javascript-quicksort.svg?branch=master)](https://travis-ci.org/Risto-Stevcev/javascript-quicksort)

QuickSort implementation in JavaScript. There are two implementations of quicksort. ``quicksort`` is a functional 
implementation that chooses the first element as the pivot. ``quicksort2`` is an imperative approach that chooses a 
random pivot. Running time wasn't too bad on Firefox's SpiderMonkey engine:

``quicksort``, a functional implementation w/ first element as pivot:

    timing quicksort: 1406.68ms

``quicksort2``, an imperative implementation w/ a random pivot:

    timing quicksort2: 724.75ms
    
Updated with nodejs:

  ```bash
  $ time cat IntArray.txt | xargs quicksortjs
  
  real	0m2.390s
  user	0m1.037s
  sys	0m0.087s
  ```
