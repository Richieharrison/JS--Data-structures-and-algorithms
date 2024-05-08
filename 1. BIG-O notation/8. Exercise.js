//Calculate the time complexities for each of the exercise code snippets.

// ---------------------------------------------------------------------//

// # Question ---------------------- 1
function someFunction(n) { 
    for (var i=0;i<n*1000;i++) {
        for (var j=0;j<n*20;j++) {
            console.log(i+j);
        }
    }
}

//Answer: Product Rule: 0(n*n)

// ---------------------------------------------------------------------//

// #Question ---------------------- 2
function someFunction(n) {
    for (var i=0;i<n;i++) {
        for (var j=0;j<n;j++) {
            for (var k=0;k<n;k++) {
                for (var l=0;l<10;l++) {
                    console.log(i+j+k+l);
                }
            }
        }
    }
}

//Answer: Product Rule: O(n^3)

// ---------------------------------------------------------------------//

// #Question ---------------------- 3
function someFunction(n) {
    for (var i=0;i<1000;i++) {
        console.log("hi");
    }
}
//Answer: O(1) constant time

// ---------------------------------------------------------------------//

// #Question ---------------------- 4
function someFunction(n) {
    for (var i=0;i<n*10;i++) {
        console.log(n);
    }
}
//Answer: O(n)

// ---------------------------------------------------------------------//

// #Question ---------------------- 5

function someFunction(n) {
    for (var i=0;i<n;i*2) {
        console.log(n);
    }
}
//Answer: O(log2n)

// ---------------------------------------------------------------------//

//  #Question ---------------------- 6
function someFunction(n) {    
    while (true){
       console.log(n);
    }
}
//Answer: O(∞)