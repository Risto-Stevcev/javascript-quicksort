# JavaScript QuickSort

QuickSort implementation in JavaScript. There are two implementations of quicksort. ``quicksort`` is a functional 
implementation that chooses the first element as the pivot. ``quicksort2`` is an imperative approach that chooses a 
random pivot. Running time wasn't too bad on Firefox's SpiderMonkey engine:

``quicksort``, a functional implementation w/ first element as pivot:

    timing quicksort: 1406.68ms

``quicksort2``, an imperative implementation w/ a random pivot:

    timing quicksort2: 724.75ms
