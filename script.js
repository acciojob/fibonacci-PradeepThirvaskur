function fibonacci(num) {
// your code here
	if(num<=1) return num;
	return fibonacci(num-2)+fibonacci(num-1);
}
fibonacci(5);

module.exports = fibonacci;
