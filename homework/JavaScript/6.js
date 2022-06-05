//因數分解
function factor(a){
    var b=[]
    var i=2
    while(a>1){
        if(a%i == 0){
            b.push(i)
            a = a / i
            continue
        }
        i++
    }
    return b
}
console.log("因數分解：",factor(45))
