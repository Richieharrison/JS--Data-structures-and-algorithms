//Get rid of constants

//If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.
//This means that both 5f(n) and f(n) have the same Big-O notation of O(f(n)).

function a(n){
    var count = 0;
    for(var i=0; i<n; i++){
        count+=1;
    }
    return count;
}

// This block of code has f(n) = n. This is because it adds to count n times. Therefore,
// this function is O(n) in time complexity

function a(n){
    var count =0;
    for (var i=0;i<5*n;i++){
        count+=1;
    }
    return count;
}

// This block has f(n) = 5n. This is because it runs from 0 to 5n. However, the first two
// examples both have a Big-O notation of O(n). Simply put, this is because if n is close to
// infinity or another large number, those four additional operations are meaningless. It is
// going to perform it n times. Any constants are negligible in Big-O notation.

function a(n){
    var count =0;
    for (var i=0;i<n;i++){
        count+=1;
    }
    count+=3;
    return count;
}

// Lastly, this block of code has f(n) = n+1. There is +1 from the last operation
// (count+=3). This still has a Big-O notation of O(n). This is because that 1 operation is not
// dependent on the input n. As n approaches infinity, it will become negligible.