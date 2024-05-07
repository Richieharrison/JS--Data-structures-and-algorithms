//O(1), constant time, doesn't change in respect to input space.

// example accessing an item in the array by it's index

//O(n), linear time, applies to algorithms that must do n operations in the worst case scenario

//example is printing numbers from 0 to n-1.

//O(n)
function exampleLinear(n){
    if(n == undefined){
        return console.error('There is no input');
    }
    for(var i = 0; i < n; i++){
        console.log(i);
    }
}

// console.log(exampleLinear(5));

//O(n*n(n-squared))
function exampleQuadratic(n){
    for(var i = 0; i < n; i++){
        console.log(i)
        for(var j = i; j < n; j++){
            console.log(j);
        }
    }
}

// console.log(exampleQuadratic(5))

//O(n*n*n)
function exampleCubic(n){
    for(var i = 0; i < n; i++){
        console.log(i)
        for(var j = i; j < n; j++){
            console.log("J", j);
            for(var k = j; j < n; j++){
                console.log("K", k)
            }
        }
    }
}

// console.log(exampleCubic(4))

