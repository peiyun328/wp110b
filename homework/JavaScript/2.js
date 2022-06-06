//n!
function fac(num){
    var res = 1
    while(num){
        res *= num
        num--
    }
    return res
}
//console.log("8! = ","8*7*6*5*4*3*2*1 = ",fac(8))

var num = parseInt(Deno.args[0])
console.log('factorial(', num, ')=', fac(num))
