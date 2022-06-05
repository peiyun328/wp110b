//矩陣相加
function add(a,b){
    for (var i = 0; i < a.length; i++)
    {
        for (var j = 0; j < a[0].length; j++)
        {
            a[i][j] += b[i][j]
        }
    }
    return a
}
console.log("add([[1,2,3,4],[5,6,7,8]], [[9,8,7,6],[5,4,3,2]]) ->",add([[1,2,3,4],[5,6,7,8]], [[9,8,7,6],[5,4,3,2]]))
