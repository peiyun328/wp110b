//平均值
function Avg(array) {
    var i = 0, sum = 0, ArrLen = array.length
    while (i < ArrLen) {
        sum = sum + array[i++]
    }
    return sum / ArrLen
}
var array = [1, 2, 3, 4, 5, 6, 7]
var ans = Avg(array)

console.log("平均值：",ans)
