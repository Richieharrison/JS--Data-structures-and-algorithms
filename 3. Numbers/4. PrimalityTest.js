//All prime numbers are in the form 6k +/- 1.

// For testing the prime number n , the loop only has to test until the square root of n.

//This is because if the square root of n is not a prime number, n is not a prime number.

const isPrime = (n) =>{
    if(n <= 1){
        return false;
    }
    // if(n <= 3) return true;
    // if(n % 2||n%3 == 0) return false;
    
    for(var i = 5; i * i <= n; i=i+6){
        if(n%i == 0 || n % (1+2) == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(3));