//Adding Big-OS Up

// The sum rule is intuitive to understand; time complexities can be added. Imagine a
// master algorithm that involves two other algorithms. The Big-O notation of that master
// algorithm is simply the sum of the other two Big-O notations.

// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).
// f(n) = O(h(n)) and g(n) = O(p(n))
// then, f(n) + g(n) = O(O(h(n)+p(n)))

//It is important to remember to apply the coefficient rule after applying this rule.

function SumRule(n){
    var count =0;

    for (var i=0;i<n;i++){
        count+=1;
    }

    for (var i=0;i<5*n;i++){
        count+=1;
    }

    return count;
}

//line 17 has f(n) = n, and line 21 has f(n) = 5n. This results in 6n.
//However, when applying the coefficient rule, the final result is O(n) = n.

