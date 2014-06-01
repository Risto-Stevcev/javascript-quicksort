test( "test quicksort", function() {
    var list     = [1, 44, 12, 3, 2, 19, 7];
    var expected = [1, 2, 3, 7, 12, 19, 44];
    deepEqual( expected, quicksort( list ) );
});

test( "test quicksort2", function() {
    var list     = [1, 44, 12, 3, 2, 19, 7];
    var expected = [1, 2, 3, 7, 12, 19, 44];
    deepEqual( expected, quicksort2( list ) );
});
