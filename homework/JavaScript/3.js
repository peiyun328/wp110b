//質數
function test (n) {
    for(var k = 2;k < n;k++) {
        if(n % k == 0) {
        return false
        }           
    }
  return true
}
console.log("isPrime(10) -> ",test(10))
console.log("isPrime(3) -> ",test(3))
