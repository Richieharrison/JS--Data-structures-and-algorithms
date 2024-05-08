//Big O to the power of K

// The polynomial rule states that polynomial time complexities have a Big-O notation of
// the same polynomial degree.

//If f(n) is a polynomial of degree k, then f(n) is O(nk).
function PolynomialRule(n){
    var count =0;

    for (var i=0;i<n*n;i++){
        count+=1;
    }

    return count;
}

//f(n) = nˆ2 because line 11 runs n*n iterations.
