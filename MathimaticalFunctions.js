//factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

//prime
function isPrime(n) {
    if (n <= 1) {
        return false;
    }  
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }  
    return true;
}

//Fibonacci Sequence
function Fibonacci (n){
    let n1=1;
    let n2=2;
    if(n===0 || n===1){
        return n1;
    }
    for(let i=3;i<=n;++i){
        sum = n1 + n2;
        n1=n2;
        n2=sum;
    }

    return n2;
}