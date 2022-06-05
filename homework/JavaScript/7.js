//轉置矩陣
var transpose=([[1,2,3], [4,5,6]])
var ans = []
for(var i = 0 ; i < transpose[0].length ; i++){
    ans[i]=[]
    for(var j = 0 ; j < transpose.length ; j++){
        ans[i][j] = transpose[j][i]
    }
}
console.log("transpose([1,2,3],[4,5,6]) -> ",ans)
