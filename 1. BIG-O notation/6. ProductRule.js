// The product rule simply states how Big-Os can be multiplied.
// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).

function ProductRule(n){
    var count =0;

    for (var i=0;i<n;i++){
        count+=1;
        for (var i=0;i<5*n;i++){
            count+=1;
        }
    }

    return count;
}

// f(n) = 5n*n because line 10 runs 5n times for a total of n iterations.
// Therefore, this results in a total of 5n2 operations. Applying the coefficient rule, the result
// is that O(n)=n2.
 