 function fibo(num) {
    if (num <= 1) return num;
    return fibo(num - 1) + fibo(num - 2);
}

// Example usage:
console.log(fibo(1)); // Output: 0
console.log(fibo(5)); // Output: 3


module.exports = fibonacci;
