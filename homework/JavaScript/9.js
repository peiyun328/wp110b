//費氏序列
function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log("f(7) ->",fib(7))
