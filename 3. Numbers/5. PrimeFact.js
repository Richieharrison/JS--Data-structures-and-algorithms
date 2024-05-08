// Prime factorization - is the process of determining which prime numbers multiply to a given number.
// This is the basis relied upon by hashing and encryption.

// Time complexity is 0(sqrt(n)). 
// Works by printing any number that is divisible by i without a remainder.
// When a prime number is passed into this function, it is handled by printing whether n is 
// greater than 2.

const primeFactor = (n)=>{
    while(n%2 == 0){
        console.log(2);
        n = n/2;
    }
    for (var i = 0; i*i <= n; i = i + 2){
        while(n%i == 0){
            console.log(i)
        }
    }
    if(n > 2){
        console.log(n);
    }
}

console.log(primeFactor(198));